/* ============================================================
   Hindukush Emporium — storefront logic
   Product data lives in products.js (loaded first).
   Customer reviews live in reviews.js (loaded after).
   ============================================================ */


/* ---------------- state ---------------- */
const CART_KEY = "chitralbazaar_cart_v1";
let cart = loadCart();              // { productId: qty }
let wishlist = loadWish();          // { productId: true }
let activeCategory = "all";
let activeValley = "all";
let searchQuery = "";
let sortBy = "popular";
let priceBand = "all";
let chips = { handmade: false, food: false, clothing: false, gift: false, isNew: false, bestseller: false, wishlist: false };
let appliedCoupon = loadCoupon();   // { code, pct } or null

function loadCoupon() {
  try {
    const raw = localStorage.getItem(COUPON_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw);
    if (c && c.code && COUPONS[String(c.code).toUpperCase()] != null) {
      return { code: String(c.code).toUpperCase(), pct: COUPONS[String(c.code).toUpperCase()] };
    }
    return null;
  } catch (e) { return null; }
}
function saveCoupon() {
  try {
    if (appliedCoupon) localStorage.setItem(COUPON_KEY, JSON.stringify(appliedCoupon));
    else localStorage.removeItem(COUPON_KEY);
  } catch (e) {}
}
function couponDiscount(subtotal) {
  return appliedCoupon ? Math.round(subtotal * appliedCoupon.pct / 100) : 0;
}
function loadWish() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveWish() {
  try { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)); } catch (e) {}
}

/* ---------------- helpers ---------------- */
function fmt(n) {
  return CURRENCY + " " + Number(n).toLocaleString("en-PK");
}
function $(id) { return document.getElementById(id); }
function productById(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }
function categoryById(id) { return CATEGORIES.find(function (c) { return c.id === id; }); }
function valleyById(id) { return VALLEYS.find(function (v) { return v.id === id; }) || { id: "chitral", name: "Chitral", emoji: "📍" }; }
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}
function cartCount() {
  return Object.values(cart).reduce(function (a, b) { return a + b; }, 0);
}
function cartTotal() {
  return Object.keys(cart).reduce(function (sum, id) {
    const p = productById(id);
    return p ? sum + p.price * cart[id] : sum;
  }, 0);
}
function discountPct(p) {
  if (!p.oldPrice || p.oldPrice <= p.price) return 0;
  return Math.round((p.oldPrice - p.price) / p.oldPrice * 100);
}
function stars(p) {
  const full = Math.round(p.rating || 0);
  return "★".repeat(full) + "☆".repeat(Math.max(0, 5 - full));
}
function bookUrl(p) {
  return "mailto:" + ORDER_EMAIL
    + "?subject=" + encodeURIComponent("Booking — " + p.name + " (" + STORE_NAME + ")")
    + "&body=" + encodeURIComponent("Hello,\n\nI would like to book this product:\n\n" + p.name + " — " + fmt(p.price) + "\n\nName: \nPhone: \nAddress: ");
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------------- product card ---------------- */
function cardHTML(p) {
  const cat = categoryById(p.category);
  const v = valleyById(p.valley);
  const wished = !!wishlist[p.id];
  const off = discountPct(p);
  const badge = off > 0
    ? '<span class="badge sale">−' + off + "%</span>"
    : (p.isNew ? '<span class="badge">New</span>'
      : (p.bestseller ? '<span class="badge">Popular</span>' : ""));
  return (
    '<div class="card-visual" data-qv="' + p.id + '">' +
      '<span class="card-fallback" aria-hidden="true">' + (p.emoji || "🏔️") + "</span>" +
      (p.image ? '<img class="card-img" src="' + p.image + '" alt="' + esc(p.name) +
        '" loading="lazy" onerror="this.remove()" />' : "") +
      badge +
      '<button class="wish-btn' + (wished ? " active" : "") + '" data-wish="' + p.id + '" aria-label="Add to wishlist">' + (wished ? "❤️" : "🤍") + "</button>" +
    "</div>" +
    '<div class="card-body">' +
      '<span class="card-cat">' + (cat ? cat.name : p.category) + "</span>" +
      "<h3>" + esc(p.name) + "</h3>" +
      '<span class="card-origin">' + (p.valley ? "📍 " + esc(v.name) : "✨ Emporium Pick") + (p.weight ? ' <span class="card-weight">' + esc(p.weight) + "</span>" : "") + "</span>" +
      (p.discreet ? '<span class="discreet-pill">📦 Discreet packaging</span>' : "") +
      '<span class="card-rating"><span class="stars">' + stars(p) + "</span> " + (p.rating || 0).toFixed(1) + " (" + (p.reviews || 0) + ")</span>" +
      '<p class="card-desc">' + esc(p.desc) + "</p>" +
      '<div class="card-row">' +
        '<span class="price-wrap"><span class="price">' + fmt(p.price) + "</span>" +
        (p.oldPrice && p.oldPrice > p.price ? '<span class="old-price">' + fmt(p.oldPrice) + "</span>" : "") +
        "</span>" +
        '<div class="card-actions">' +
          '<a class="book-btn" href="' + bookUrl(p) + '">Book Now</a>' +
          '<button class="add-btn" data-add="' + p.id + '">Add to Cart</button>' +
        "</div>" +
      "</div>" +
      '<button class="qv-btn" data-qv="' + p.id + '">🔍 Quick View</button>' +
    "</div>"
  );
}

function bindCardEvents(scope) {
  scope.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      addToCart(btn.getAttribute("data-add"));
    });
  });
  scope.querySelectorAll("[data-wish]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleWish(btn.getAttribute("data-wish"));
    });
  });
  scope.querySelectorAll("[data-qv]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (e.target.closest("[data-wish]")) return;
      openQuickView(el.getAttribute("data-qv"));
    });
  });
  observeReveals(scope);
}

/* ---------------- filtering & sorting ---------------- */
function filteredProducts() {
  const q = searchQuery.trim().toLowerCase();
  let list = PRODUCTS.filter(function (p) {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    if (activeValley !== "all" && p.valley !== activeValley) return false;
    if (q && !(p.name.toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q) ||
        (p.longDesc || "").toLowerCase().includes(q))) return false;
    if (priceBand === "u1000" && p.price >= 1000) return false;
    if (priceBand === "1000-2500" && (p.price < 1000 || p.price > 2500)) return false;
    if (priceBand === "2500-5000" && (p.price < 2500 || p.price > 5000)) return false;
    if (priceBand === "o5000" && p.price <= 5000) return false;
    const t = p.tags || {};
    if (chips.handmade && !t.handmade) return false;
    if (chips.food && !t.food) return false;
    if (chips.clothing && !t.clothing) return false;
    if (chips.gift && !t.gift) return false;
    if (chips.isNew && !p.isNew) return false;
    if (chips.bestseller && !p.bestseller) return false;
    if (chips.wishlist && !wishlist[p.id]) return false;
    return true;
  });
  const by = sortBy;
  list.sort(function (a, b) {
    if (by === "price-asc") return a.price - b.price;
    if (by === "price-desc") return b.price - a.price;
    if (by === "newest") return String(b.added || "").localeCompare(String(a.added || ""));
    if (by === "rating") return (b.rating || 0) - (a.rating || 0) || (b.reviews || 0) - (a.reviews || 0);
    /* popular */
    return ((b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)) || (b.reviews || 0) - (a.reviews || 0);
  });
  return list;
}

function renderProducts() {
  const grid = $("productGrid");
  grid.innerHTML = "";
  const list = filteredProducts();
  $("resultCount").textContent = list.length + (list.length === 1 ? " product" : " products");
  if (list.length === 0) {
    grid.innerHTML = '<p class="empty-msg">No products found. Try a different search or clear the filters.</p>';
    return;
  }
  list.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = cardHTML(p);
    grid.appendChild(card);
  });
  bindCardEvents(grid);
}

/* ---------------- home sections ---------------- */
function renderRow(elId, list) {
  const row = $(elId);
  if (!row) return;
  row.innerHTML = "";
  list.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = cardHTML(p);
    row.appendChild(card);
  });
  bindCardEvents(row);
}

function renderHomeSections() {
  const byCat = function (id) { return PRODUCTS.filter(function (p) { return p.category === id; }); };
  renderRow("featuredRow", PRODUCTS.filter(function (p) { return p.featured; }).slice(0, 10));
  renderRow("mountainsRow",
    byCat("dryfoods").concat(byCat("honey"))
      .sort(function (a, b) { return (b.reviews || 0) - (a.reviews || 0); }).slice(0, 10));
  renderRow("madebyRow",
    byCat("wool").concat(byCat("handicrafts"))
      .sort(function (a, b) { return (b.reviews || 0) - (a.reviews || 0); }).slice(0, 10));
  renderRow("giftboxRow", byCat("giftboxes").slice(0, 10));
}

/* ---------------- valleys ---------------- */
function renderValleys() {
  const wrap = $("valleyCards");
  if (!wrap) return;
  wrap.innerHTML = "";
  VALLEYS.forEach(function (v) {
    const count = PRODUCTS.filter(function (p) { return p.valley === v.id; }).length;
    if (count === 0) return;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "valley-card" + (activeValley === v.id ? " active" : "");
    card.innerHTML =
      '<span class="valley-emoji" aria-hidden="true">' + v.emoji + "</span>" +
      '<span class="valley-name">' + esc(v.name) + "</span>" +
      '<span class="valley-count">' + count + (count === 1 ? " product" : " products") + "</span>";
    card.addEventListener("click", function () { setValley(v.id); });
    wrap.appendChild(card);
  });
}

function renderValleyFilter() {
  const sel = $("valleyFilter");
  if (!sel) return;
  const cur = sel.value || "all";
  sel.innerHTML = '<option value="all">All regions</option>';
  VALLEYS.forEach(function (v) {
    const count = PRODUCTS.filter(function (p) { return p.valley === v.id; }).length;
    if (count === 0 && v.id !== "chitral") return;
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = v.emoji + " " + v.name + " (" + count + ")";
    sel.appendChild(opt);
  });
  sel.value = cur;
}

function setValley(id) {
  activeValley = id;
  const sel = $("valleyFilter");
  if (sel) sel.value = id;
  renderValleys();
  renderProducts();
  var grid = $("productGrid");
  if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------- makers ---------------- */
function renderMakers() {
  const row = $("makersRow");
  if (!row) return;
  row.innerHTML = "";
  MAKERS.forEach(function (m) {
    const card = document.createElement("div");
    card.className = "maker-card";
    card.innerHTML =
      '<div class="maker-avatar" aria-hidden="true">' + m.emoji + "</div>" +
      "<h3>" + esc(m.name) + "</h3>" +
      '<div class="maker-role">' + esc(m.role) + "</div>" +
      "<p>" + esc(m.story) + "</p>" +
      '<span class="maker-village">📍 ' + esc(m.village) + ", Chitral</span>";
    row.appendChild(card);
  });
}

/* ---------------- wishlist ---------------- */
function toggleWish(id) {
  if (wishlist[id]) delete wishlist[id];
  else wishlist[id] = true;
  saveWish();
  renderProducts();
  renderHomeSections();
}

/* ---------------- quick view ---------------- */
function openQuickView(id) {
  const p = productById(id);
  if (!p) return;
  const cat = categoryById(p.category);
  const v = valleyById(p.valley);
  const gallery = [p.image].concat(p.images || []).filter(Boolean);
  const wished = !!wishlist[p.id];
  const off = discountPct(p);
  let html =
    '<div class="qv-grid">' +
      '<div class="qv-gallery">' +
        (gallery[0] ? '<img id="qvMainImg" class="qv-main" src="' + gallery[0] + '" alt="' + esc(p.name) + '" onerror="this.remove()" />' : "") +
        (gallery.length > 1 ? '<div class="qv-thumbs">' + gallery.map(function (g, i) {
          return '<img src="' + g + '" alt="" data-thumb="' + i + '" class="' + (i === 0 ? "active" : "") + '" onerror="this.remove()" />';
        }).join("") + "</div>" : "") +
      "</div>" +
      '<div class="qv-info">' +
        '<span class="card-cat">' + (cat ? cat.name : p.category) + "</span>" +
        "<h2>" + esc(p.name) + "</h2>" +
        '<span class="card-rating"><span class="stars">' + stars(p) + "</span> " + (p.rating || 0).toFixed(1) + " · " + (p.reviews || 0) + " reviews</span>" +
        '<div class="qv-price-row"><span class="price">' + fmt(p.price) + "</span>" +
        (p.oldPrice && p.oldPrice > p.price ? '<span class="old-price">' + fmt(p.oldPrice) + "</span><span class='off-tag'>−" + off + "%</span>" : "") +
        "</div>" +
        '<div class="qv-origin-box">' +
          (p.valley ? "<div>📍 <strong>Origin:</strong> " + esc(v.name) + ", Chitral, Pakistan</div>" : "") +
          (p.producer ? "<div>👨‍🌾 <strong>Producer:</strong> " + esc(p.producer) + "</div>" : "") +
          (p.valley ? "<div>🏔️ <strong>Made in:</strong> Chitral, Pakistan</div>" : "") +
          (p.ptype ? "<div>📦 <strong>Product type:</strong> " + esc(p.ptype) + "</div>" : "") +
          (p.discreet ? "<div>🤐 <strong>Packaging:</strong> Discreet, unmarked packaging</div>" : "") +
        "</div>" +
        (p.longDesc ? '<div class="qv-section"><h4>About this product</h4><p>' + esc(p.longDesc) + "</p></div>" : "") +
        (p.story ? '<div class="qv-section"><h4>The Story Behind This Product</h4><p>' + esc(p.story) + "</p></div>" : "") +
        (p.maker ?
          '<div class="qv-section"><h4>Meet the Maker</h4><div class="qv-maker"><strong>' + esc(p.maker.name) + "</strong>" +
          "<ul>" +
            "<li>🏘️ Village: " + esc(p.maker.village) + "</li>" +
            "<li>🧶 Craft: " + esc(p.maker.craft) + "</li>" +
            "<li>⏳ Approx. production time: " + esc(p.maker.time) + "</li>" +
            "<li>🧵 Materials: " + esc(p.maker.materials) + "</li>" +
          "</ul></div></div>" : "") +
        '<dl class="qv-spec">' +
          (p.weight ? "<dt>Weight / Size</dt><dd>" + esc(p.weight) + "</dd>" : "") +
          (p.materials ? "<dt>Materials</dt><dd>" + esc(p.materials) + "</dd>" : "") +
          (p.method ? "<dt>Production</dt><dd>" + esc(p.method) + "</dd>" : "") +
          (p.packaging ? "<dt>Packaging</dt><dd>" + esc(p.packaging) + "</dd>" : "") +
        "</dl>" +
        '<div class="qv-section" id="qvReviews">' + (typeof reviewsHTML === "function" ? reviewsHTML(p) : "") + "</div>" +
        '<div class="qv-actions">' +
          '<a class="book-btn" href="' + bookUrl(p) + '">Book Now</a>' +
          '<button class="add-btn" id="qvAdd">Add to Cart</button>' +
          '<button class="wish-btn' + (wished ? " active" : "") + '" id="qvWish" style="position:static" aria-label="Add to wishlist">' + (wished ? "❤️" : "🤍") + "</button>" +
        "</div>" +
      "</div>" +
    "</div>";
  $("qvContent").innerHTML = html;
  $("qvModal").classList.add("open");
  $("qvOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
  const addBtn = $("qvAdd");
  if (addBtn) addBtn.addEventListener("click", function () { addToCart(p.id); });
  const wishBtn = $("qvWish");
  if (wishBtn) wishBtn.addEventListener("click", function () {
    toggleWish(p.id);
    closeQuickView();
    openQuickView(p.id);
  });
  document.querySelectorAll("[data-thumb]").forEach(function (t) {
    t.addEventListener("click", function () {
      const main = $("qvMainImg");
      if (main) main.src = gallery[Number(t.getAttribute("data-thumb"))];
      document.querySelectorAll("[data-thumb]").forEach(function (x) { x.classList.remove("active"); });
      t.classList.add("active");
    });
  });
  if (typeof bindReviews === "function") bindReviews(p);
}
function closeQuickView() {
  $("qvModal").classList.remove("open");
  $("qvOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------------- header / pills / footer ---------------- */
function renderStoreName() {
  document.title = STORE_NAME + " — Authentic Products from Chitral";
  $("storeName").textContent = STORE_NAME;
}

function renderPills() {
  const wrap = $("categoryPills");
  wrap.innerHTML = "";
  const all = [{ id: "all", name: "All", emoji: "🛍️" }].concat(CATEGORIES);
  all.forEach(function (c) {
    const btn = document.createElement("button");
    btn.className = "pill" + (c.id === activeCategory ? " active" : "");
    btn.textContent = c.emoji + " " + c.name;
    btn.addEventListener("click", function () {
      activeCategory = c.id;
      renderPills();
      renderProducts();
    });
    wrap.appendChild(btn);
  });
}

function filterToCategory(id) {
  activeCategory = id;
  renderPills();
  renderProducts();
  var grid = $("productGrid");
  if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderFooterCats() {
  const ul = $("footerCats");
  if (ul) {
    ul.innerHTML = "";
    CATEGORIES.forEach(function (c) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#productGrid";
      a.textContent = c.emoji + " " + c.name;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        filterToCategory(c.id);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
  const footName = $("footerStoreName");
  if (footName) footName.textContent = STORE_NAME;
}

function initPromoBar() {
  const bar = $("promoBar");
  if (!bar) return;
  try {
    if (localStorage.getItem("chitralbazaar_promo_dismissed") === "1") {
      bar.style.display = "none";
      return;
    }
  } catch (e) {}
  $("promoClose").addEventListener("click", function () {
    bar.style.display = "none";
    try { localStorage.setItem("chitralbazaar_promo_dismissed", "1"); } catch (e) {}
  });
}

/* Scroll-reveal for product cards */
var revealObserver = null;
function observeReveals(scope) {
  var cards = scope.querySelectorAll(".card");
  cards.forEach(function (card, i) {
    card.style.setProperty("--d", Math.min(i * 45, 450) + "ms");
  });
  if (!("IntersectionObserver" in window)) {
    cards.forEach(function (c) { c.classList.add("in"); });
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px 40px 0px" });
  }
  cards.forEach(function (c) { revealObserver.observe(c); });
}

/* ---------------- cart ---------------- */
function renderCart() {
  $("cartCount").textContent = cartCount();
  const items = $("cartItems");
  items.innerHTML = "";
  const ids = Object.keys(cart).filter(function (id) { return productById(id); });
  $("cartEmpty").style.display = ids.length ? "none" : "block";
  $("cartFooter").style.display = ids.length ? "block" : "none";
  ids.forEach(function (id) {
    const p = productById(id);
    const qty = cart[id];
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML =
      '<div class="cart-thumb">' +
        '<span class="card-fallback sm" aria-hidden="true">' + (p.emoji || "🏔️") + "</span>" +
        (p.image ? '<img src="' + p.image + '" alt="" loading="lazy" onerror="this.remove()" />' : "") +
      "</div>" +
      '<div class="cart-info"><h4>' + esc(p.name) + "</h4>" +
      '<span class="price">' + fmt(p.price) + "</span></div>" +
      '<div class="qty">' +
        '<button data-act="dec" data-id="' + id + '">−</button>' +
        "<span>" + qty + "</span>" +
        '<button data-act="inc" data-id="' + id + '">+</button>' +
      "</div>" +
      '<button class="remove-btn" data-act="rm" data-id="' + id + '" title="Remove">✕</button>';
    items.appendChild(row);
  });
  items.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-id");
      const act = btn.getAttribute("data-act");
      if (act === "inc") changeQty(id, 1);
      else if (act === "dec") changeQty(id, -1);
      else if (act === "rm") removeItem(id);
    });
  });
  const subtotal = cartTotal();
  const discount = couponDiscount(subtotal);
  $("cartSubtotal").textContent = fmt(subtotal);
  const dRow = $("discountRow");
  if (discount > 0 && appliedCoupon) {
    dRow.style.display = "flex";
    $("discountLabel").textContent = "Discount (" + appliedCoupon.code + ")";
    $("cartDiscount").textContent = "−" + fmt(discount);
  } else {
    dRow.style.display = "none";
  }
  $("cartTotal").textContent = fmt(subtotal - discount);

  const hasCoupon = !!appliedCoupon;
  $("couponForm").style.display = hasCoupon ? "none" : "flex";
  $("couponApplied").style.display = hasCoupon ? "flex" : "none";
  if (hasCoupon) $("couponCodeLabel").textContent = appliedCoupon.code;
}

function applyCoupon() {
  const msg = $("couponMsg");
  const code = $("couponInput").value.trim().toUpperCase();
  if (!code) {
    msg.textContent = "Please enter a coupon code.";
    msg.className = "coupon-msg error";
    return;
  }
  if (COUPONS[code] != null) {
    appliedCoupon = { code: code, pct: COUPONS[code] };
    saveCoupon();
    $("couponInput").value = "";
    msg.textContent = "🎉 Code applied — " + COUPONS[code] + "% off!";
    msg.className = "coupon-msg success";
    renderCart();
  } else {
    msg.textContent = "Invalid coupon code. Please try again.";
    msg.className = "coupon-msg error";
  }
}
function removeCoupon() {
  appliedCoupon = null;
  saveCoupon();
  $("couponMsg").textContent = "";
  $("couponMsg").className = "coupon-msg";
  renderCart();
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  var badge = $("cartCount");
  badge.classList.remove("pop");
  void badge.offsetWidth;
  badge.classList.add("pop");
  openCart();
}
function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}
function removeItem(id) {
  delete cart[id];
  saveCart();
  renderCart();
}
function openCart() {
  $("cartDrawer").classList.add("open");
  $("cartOverlay").classList.add("show");
  showCartView();
}
function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("cartOverlay").classList.remove("show");
}
function showCartView() {
  $("cartView").style.display = "block";
  $("checkoutView").style.display = "none";
  renderCart();
}
function showCheckoutView() {
  if (cartCount() === 0) return;
  $("cartView").style.display = "none";
  $("checkoutView").style.display = "block";
  $("orderNote").textContent = "";
}

function placeOrder() {
  const name = $("coName").value.trim();
  const phone = $("coPhone").value.trim();
  const address = $("coAddress").value.trim();
  const payment = $("coPayment").value;
  const notes = $("coNotes").value.trim();
  const note = $("orderNote");

  if (!name) { note.textContent = "Please enter your full name."; return; }
  if (!/^[+\d][\d\s-]{6,}$/.test(phone)) { note.textContent = "Please enter a valid phone number."; return; }
  if (!address) { note.textContent = "Please enter your city / address."; return; }

  const subtotal = cartTotal();
  const discount = couponDiscount(subtotal);
  const orderTotal = subtotal - discount;

  const lines = [];
  lines.push("*New Order — " + STORE_NAME + "*");
  lines.push("--------------------------");
  Object.keys(cart).forEach(function (id) {
    const p = productById(id);
    if (!p) return;
    lines.push(cart[id] + " × " + p.name + " — " + fmt(p.price * cart[id]));
  });
  lines.push("--------------------------");
  lines.push("Subtotal: " + fmt(subtotal));
  if (discount > 0 && appliedCoupon) {
    lines.push("Discount (" + appliedCoupon.code + "): -" + fmt(discount));
  }
  lines.push("Total: " + fmt(orderTotal));
  lines.push("");
  lines.push("Name: " + name);
  lines.push("Phone: " + phone);
  lines.push("Address: " + address);
  lines.push("Payment: " + payment);
  if (notes) lines.push("Notes: " + notes);

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
  const emailBody = lines.map(function (l) { return l.replace(/\*/g, ""); }).join("\n");
  const emailUrl = "mailto:" + ORDER_EMAIL
    + "?subject=" + encodeURIComponent("New Order — " + STORE_NAME)
    + "&body=" + encodeURIComponent(emailBody);
  note.innerHTML = "Opening WhatsApp with your order… Prefer email? "
    + "<a href=\"" + emailUrl + "\">Send order via Email</a>";
  cart = {};
  appliedCoupon = null;
  saveCart();
  saveCoupon();
  renderCart();
  setTimeout(function () { window.location.href = url; }, 1200);
}

/* ---------------- filters wiring ---------------- */
function initFilters() {
  const vf = $("valleyFilter");
  if (vf) vf.addEventListener("change", function () { setValley(vf.value); });
  const pf = $("priceFilter");
  if (pf) pf.addEventListener("change", function () { priceBand = pf.value; renderProducts(); });
  const ss = $("sortSelect");
  if (ss) ss.addEventListener("change", function () { sortBy = ss.value; renderProducts(); });
  document.querySelectorAll(".chip[data-chip]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const key = chip.getAttribute("data-chip");
      chips[key] = !chips[key];
      chip.classList.toggle("active", chips[key]);
      renderProducts();
    });
  });
  const clear = $("clearFilters");
  if (clear) clear.addEventListener("click", function () {
    activeCategory = "all";
    activeValley = "all";
    searchQuery = "";
    sortBy = "popular";
    priceBand = "all";
    Object.keys(chips).forEach(function (k) { chips[k] = false; });
    const si = $("searchInput");
    if (si) si.value = "";
    if (vf) vf.value = "all";
    if (pf) pf.value = "all";
    if (ss) ss.value = "popular";
    document.querySelectorAll(".chip[data-chip]").forEach(function (c) { c.classList.remove("active"); });
    renderPills();
    renderValleys();
    renderProducts();
  });
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderStoreName();
  renderPills();
  renderValleys();
  renderValleyFilter();
  renderHomeSections();
  renderMakers();
  renderProducts();
  renderCart();
  initPromoBar();
  initFilters();

  $("waLink").href = "https://wa.me/" + WHATSAPP_NUMBER;
  $("emailLink").href = "mailto:" + ORDER_EMAIL;
  $("emailLink").textContent = "📧 " + ORDER_EMAIL;
  $("year").textContent = new Date().getFullYear();

  $("searchInput").addEventListener("input", function (e) {
    searchQuery = e.target.value;
    renderProducts();
  });
  $("cartBtn").addEventListener("click", openCart);
  $("closeCart").addEventListener("click", closeCart);
  $("cartOverlay").addEventListener("click", closeCart);
  $("checkoutBtn").addEventListener("click", showCheckoutView);
  $("backToCartBtn").addEventListener("click", showCartView);
  $("placeOrderBtn").addEventListener("click", placeOrder);
  $("couponApplyBtn").addEventListener("click", applyCoupon);
  $("couponRemoveBtn").addEventListener("click", removeCoupon);
  $("couponInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); applyCoupon(); }
  });
  $("giftCardBtn").addEventListener("click", function () { filterToCategory("giftcards"); });

  $("qvClose").addEventListener("click", closeQuickView);
  $("qvOverlay").addEventListener("click", closeQuickView);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeQuickView();
      closeCart();
    }
  });
});
