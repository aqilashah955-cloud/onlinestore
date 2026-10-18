/* Chitral Bazaar — customer reviews (quick view).
   Reviews are stored in the visitor's own browser (localStorage) and shown
   on their device. A "Send via WhatsApp" button lets the store owner receive
   genuine reviews for moderation before publishing them in the catalogue. */
const REV_KEY = "chitralbazaar_reviews_v1";

function loadReviews() {
  try { return JSON.parse(localStorage.getItem(REV_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveReviews(r) {
  try { localStorage.setItem(REV_KEY, JSON.stringify(r)); } catch (e) {}
}
function productReviews(id) {
  const all = loadReviews();
  return all[id] || [];
}
function reviewStarsRow(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += i <= rating ? "\u2605" : "\u2606";
  return s;
}
function reviewsHTML(p) {
  const list = productReviews(p.id);
  let h = "<h4>Customer Reviews</h4>";
  if (list.length === 0) {
    h += '<p class="rev-empty">No customer reviews yet on this device \u2014 be the first to share your experience.</p>';
  } else {
    h += '<div class="rev-list">' + list.map(function (r) {
      return '<div class="rev-item">' +
        '<div class="rev-head"><strong>' + esc(r.name) + '</strong>' +
        '<span class="stars">' + reviewStarsRow(r.rating) + '</span></div>' +
        "<p>" + esc(r.text) + "</p>" +
        '<span class="rev-date">' + esc(r.date) + " \u00B7 saved on this device</span></div>";
    }).join("") + "</div>";
  }
  h += '<form class="rev-form" id="revForm">' +
    "<h5>Write a review</h5>" +
    '<div class="rev-stars" id="revStars" role="radiogroup" aria-label="Star rating">' +
    [1, 2, 3, 4, 5].map(function (n) {
      return '<button type="button" data-star="' + n + '" aria-label="' + n + ' star">\u2606</button>';
    }).join("") +
    "</div>" +
    '<input type="text" id="revName" placeholder="Your name" maxlength="40" autocomplete="name" />' +
    '<textarea id="revText" rows="3" placeholder="What did you think of this product?" maxlength="500"></textarea>' +
    '<p class="rev-note" id="revNote"></p>' +
    '<button type="submit" class="add-btn">Submit Review</button>' +
    "</form>";
  return h;
}
function reviewSentHTML(p, entry) {
  const msg = "*New Product Review \u2014 Chitral Bazaar*\n" +
    "Product: " + p.name + "\n" +
    "Name: " + entry.name + "\n" +
    "Rating: " + entry.rating + "/5\n" +
    "Review: " + entry.text;
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  return '<div class="rev-sent"><p><strong>Thanks ' + esc(entry.name) + '!</strong> Your review is saved on this device.</p>' +
    '<a class="book-btn" target="_blank" rel="noopener" href="' + url + '">Send review to store via WhatsApp</a>' +
    '<p class="rev-hint">Reviews sent to the store are checked before being published publicly.</p></div>';
}
function bindReviews(p) {
  let chosen = 0;
  const starBox = document.getElementById("revStars");
  const form = document.getElementById("revForm");
  if (!starBox || !form) return;
  starBox.addEventListener("click", function (e) {
    const b = e.target.closest("[data-star]");
    if (!b) return;
    chosen = Number(b.getAttribute("data-star"));
    starBox.querySelectorAll("[data-star]").forEach(function (x) {
      const on = Number(x.getAttribute("data-star")) <= chosen;
      x.textContent = on ? "\u2605" : "\u2606";
      x.classList.toggle("on", on);
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("revName").value.trim();
    const text = document.getElementById("revText").value.trim();
    const note = document.getElementById("revNote");
    if (!name || !text || chosen < 1) {
      note.textContent = "Please add your name, pick a star rating and write a few words.";
      return;
    }
    const entry = { name: name, rating: chosen, text: text, date: new Date().toISOString().slice(0, 10) };
    const all = loadReviews();
    (all[p.id] = all[p.id] || []).push(entry);
    saveReviews(all);
    document.getElementById("qvReviews").innerHTML = reviewsHTML(p) + reviewSentHTML(p, entry);
    bindReviews(p);
  });
}
