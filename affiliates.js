/* ============================================================
   Chitral Bazaar — Partner Picks (Daraz & Amazon affiliates)
   ------------------------------------------------------------
   HOW TO ADD AN AFFILIATE PRODUCT:
   1. Sign up for the affiliate program (Daraz Affiliate / Amazon
      Associates) and generate your tracking link for the product.
   2. Copy the EXAMPLE block below, paste it inside AFFILIATE_PRODUCTS,
      and fill in: name, source ("daraz" or "amazon"), url (your full
      affiliate tracking link), image, priceLabel, desc.
   3. Push — the "Partner Picks" section appears automatically.
      While this array is empty the section stays hidden.

   RULES (required by both programs):
   - Keep the affiliate disclosure on the page (it is in index.html).
   - Use rel="sponsored" on the links (already in the card template).
   - priceLabel is free text, e.g. "Rs 2,499 on Daraz" / "$24.99 on Amazon".
   ============================================================ */
const AFFILIATE_PRODUCTS = [
  // EXAMPLE — delete this block and add your real affiliate links:
  // {
  //   id: "aff01",
  //   name: "Stainless Steel Vacuum Flask 1L",
  //   source: "daraz",
  //   url: "https://www.daraz.pk/products/example?affiliate_id=YOUR_ID",
  //   image: "https://example.com/flask.jpg",
  //   priceLabel: "Rs 1,899 on Daraz",
  //   desc: "Keeps chai hot for 12 hours — a mountain household essential."
  // },
];

const AFFILIATE_META = {
  daraz:  { label: "Daraz",  cta: "Buy on Daraz \u2192",  shipped: "Sold & shipped by Daraz" },
  amazon: { label: "Amazon", cta: "Buy on Amazon \u2192", shipped: "Sold & shipped by Amazon" }
};

function escAff(s) {
  if (typeof esc === "function") return esc(s);
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function affiliateCardHTML(a) {
  const meta = AFFILIATE_META[a.source] || AFFILIATE_META.daraz;
  return '<article class="card aff-card">' +
    '<span class="aff-badge aff-' + escAff(a.source) + '">' + meta.label + "</span>" +
    (a.image ? '<img class="card-img" src="' + escAff(a.image) + '" alt="' + escAff(a.name) + '" loading="lazy" onerror="this.remove()" />' : "") +
    '<div class="card-body">' +
    "<h3>" + escAff(a.name) + "</h3>" +
    (a.priceLabel ? '<p class="aff-price">' + escAff(a.priceLabel) + "</p>" : "") +
    (a.desc ? '<p class="aff-desc">' + escAff(a.desc) + "</p>" : "") +
    '<a class="aff-btn aff-' + escAff(a.source) + '-btn" href="' + escAff(a.url) + '" target="_blank" rel="sponsored noopener">' + meta.cta + "</a>" +
    '<p class="aff-shipped">' + meta.shipped + "</p>" +
    "</div></article>";
}

function renderAffiliates() {
  const section = document.getElementById("affiliateSection");
  const row = document.getElementById("affiliateRow");
  if (!section || !row) return;
  if (!AFFILIATE_PRODUCTS.length) { section.style.display = "none"; return; }
  section.style.display = "";
  row.innerHTML = AFFILIATE_PRODUCTS.map(affiliateCardHTML).join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAffiliates);
} else {
  renderAffiliates();
}
