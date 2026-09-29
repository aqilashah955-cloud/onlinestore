/* ============================================================
   Chitral Bazaar — store configuration
   ------------------------------------------------------------
   STORE_NAME       : change your store's display name here.
   WHATSAPP_NUMBER  : your WhatsApp number in international format
                      (country code + number, no "+", no spaces).
                      Order messages are sent here on checkout.
   CURRENCY         : price prefix shown before amounts.
   ============================================================ */
const STORE_NAME = "Chitral Bazaar";
const WHATSAPP_NUMBER = "923456121725";
const CURRENCY = "Rs";

const CATEGORIES = [
  { id: "handicrafts", name: "Handicrafts", emoji: "🧶" },
  { id: "dryfruits",   name: "Dry Fruits & Local Foods", emoji: "🍑" },
  { id: "clothing",    name: "Clothing & Apparel", emoji: "👕" },
  { id: "electronics", name: "Electronics", emoji: "🔌" },
  { id: "homekitchen", name: "Home & Kitchen", emoji: "🏠" },
  { id: "beauty",      name: "Beauty & Personal Care", emoji: "🧴" },
];

/* ============================================================
   SAMPLE PRODUCT DATA
   ------------------------------------------------------------
   These are placeholder products so the store works out of the
   box. Replace them with your real catalogue.

   How to add a product: copy one of the objects below, give it a
   unique "id", and fill in the fields:
     id       : unique string, e.g. "p25"
     name     : product name
     category : must match one of the category ids above
               ("handicrafts", "dryfruits", "clothing",
                "electronics", "homekitchen", "beauty")
     price    : number, in PKR (no commas)
     desc     : short description
     emoji    : an emoji used as the product's placeholder image
     badge    : optional — "New", "Popular", "Sale", or omit it
   ============================================================ */
const PRODUCTS = [
  // ---- Handicrafts ----
  { id: "p01", name: "Pakol — Traditional Chitrali Cap", category: "handicrafts", price: 850,  desc: "Hand-felted pure wool pakol, the iconic Chitrali cap.", emoji: "🧢", badge: "Popular" },
  { id: "p02", name: "Hand-Woven Woolen Shawl",          category: "handicrafts", price: 3200, desc: "Warm hand-loomed shawl woven by Chitrali artisans.",  emoji: "🧣" },
  { id: "p03", name: "Embroidered Wall Hanging",         category: "handicrafts", price: 1500, desc: "Colorful hand-embroidered wall piece with mountain motifs.", emoji: "🖼️" },
  { id: "p04", name: "Walnut Wood Keepsake Box",         category: "handicrafts", price: 2200, desc: "Hand-carved walnut wood box, perfect for jewelry.",    emoji: "🗝️", badge: "New" },

  // ---- Dry Fruits & Local Foods ----
  { id: "p05", name: "Dried Apricots — 1 kg",    category: "dryfruits", price: 1100, desc: "Sun-dried valley apricots, naturally sweet.",        emoji: "🍑", badge: "Popular" },
  { id: "p06", name: "Deshelled Walnuts — 1 kg", category: "dryfruits", price: 1600, desc: "Premium deshelled walnuts, rich and crunchy.",         emoji: "🌰" },
  { id: "p07", name: "Pure Mountain Honey — 500 g", category: "dryfruits", price: 1400, desc: "Raw unprocessed honey from high-altitude beehives.", emoji: "🍯" },
  { id: "p08", name: "Dried Mulberries — 500 g", category: "dryfruits", price: 750,  desc: "Sweet dried mulberries, a healthy everyday snack.",    emoji: "🫐", badge: "New" },

  // ---- Clothing & Apparel ----
  { id: "p09", name: "Men's Woolen Waistcoat",    category: "clothing", price: 4500, desc: "Classic Chitrali-style woolen waistcoat, tailored fit.", emoji: "🦺" },
  { id: "p10", name: "Pashmina Shawl",            category: "clothing", price: 2800, desc: "Soft pashmina-blend shawl in elegant colors.",           emoji: "🧣" },
  { id: "p11", name: "Ladies Embroidered Kurti",  category: "clothing", price: 2400, desc: "Cotton kurti with traditional Chitrali embroidery.",     emoji: "👗", badge: "Popular" },
  { id: "p12", name: "Woolen Socks — Pack of 3",  category: "clothing", price: 600,  desc: "Thick hand-knitted woolen socks for winter.",           emoji: "🧦" },

  // ---- Electronics ----
  { id: "p13", name: "Solar Lantern with Charger",       category: "electronics", price: 3500, desc: "Rechargeable solar lantern — ideal during load-shedding.", emoji: "💡", badge: "Popular" },
  { id: "p14", name: "Power Bank 20000 mAh",             category: "electronics", price: 2900, desc: "Fast-charging high-capacity power bank.",                   emoji: "🔋" },
  { id: "p15", name: "LED Rechargeable Bulbs — Pack of 4", category: "electronics", price: 1200, desc: "Energy-saving bulbs with built-in backup battery.",     emoji: "💡" },
  { id: "p16", name: "Wireless Earbuds",                 category: "electronics", price: 2500, desc: "Bluetooth earbuds with charging case.",                     emoji: "🎧", badge: "New" },

  // ---- Home & Kitchen ----
  { id: "p17", name: "Traditional Clay Karahi",      category: "homekitchen", price: 950,  desc: "Handmade clay cooking pot for authentic flavor.",  emoji: "🍲" },
  { id: "p18", name: "Walnut Wood Serving Tray",     category: "homekitchen", price: 1350, desc: "Polished walnut wood tray, artisan-made.",         emoji: "🍽️" },
  { id: "p19", name: "Insulated Thermos Flask — 1 L", category: "homekitchen", price: 1800, desc: "Keeps tea hot for hours, steel body.",             emoji: "🫖" },
  { id: "p20", name: "Hand-Loomed Cotton Bedsheet",  category: "homekitchen", price: 1650, desc: "Breathable hand-loomed bedsheet, king size.",      emoji: "🛏️" },

  // ---- Beauty & Personal Care ----
  { id: "p21", name: "Apricot Kernel Oil — 100 ml",  category: "beauty", price: 900, desc: "Cold-pressed apricot oil for skin and hair.",          emoji: "🧴", badge: "Popular" },
  { id: "p22", name: "Walnut Shell Face Scrub",      category: "beauty", price: 550, desc: "Gentle natural exfoliating scrub.",                    emoji: "🧖" },
  { id: "p23", name: "Herbal Soap Bars — Pack of 3", category: "beauty", price: 650, desc: "Handmade herbal soaps with mountain botanicals.",      emoji: "🧼" },
  { id: "p24", name: "Mountain Herb Shampoo — 250 ml", category: "beauty", price: 800, desc: "Herbal shampoo for strong, shiny hair.",             emoji: "🧴", badge: "New" },
];

/* ---------------- state ---------------- */
const CART_KEY = "chitralbazaar_cart_v1";
let cart = loadCart();          // { productId: qty }
let activeCategory = "all";
let searchQuery = "";

/* ---------------- helpers ---------------- */
function fmt(n) {
  return CURRENCY + " " + Number(n).toLocaleString("en-PK");
}
function $(id) { return document.getElementById(id); }
function productById(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }
function categoryById(id) { return CATEGORIES.find(function (c) { return c.id === id; }); }
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

/* ---------------- rendering ---------------- */
function renderStoreName() {
  document.title = STORE_NAME + " — Online Store";
  $("storeName").textContent = STORE_NAME;
  $("heroTitle").textContent = "Welcome to " + STORE_NAME;
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

function renderProducts() {
  const grid = $("productGrid");
  grid.innerHTML = "";
  const q = searchQuery.trim().toLowerCase();
  const list = PRODUCTS.filter(function (p) {
    const inCat = activeCategory === "all" || p.category === activeCategory;
    const inSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return inCat && inSearch;
  });
  if (list.length === 0) {
    grid.innerHTML = '<p class="empty-msg">No products found. Try a different search.</p>';
    return;
  }
  list.forEach(function (p) {
    const cat = categoryById(p.category);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="card-visual">' + p.emoji +
        (p.badge ? '<span class="badge">' + p.badge + "</span>" : "") +
      "</div>" +
      '<div class="card-body">' +
        '<span class="card-cat">' + (cat ? cat.name : p.category) + "</span>" +
        "<h3>" + p.name + "</h3>" +
        '<p class="card-desc">' + p.desc + "</p>" +
        '<div class="card-row">' +
          '<span class="price">' + fmt(p.price) + "</span>" +
          '<button class="add-btn" data-id="' + p.id + '">Add to Cart</button>' +
        "</div>" +
      "</div>";
    grid.appendChild(card);
  });
  grid.querySelectorAll(".add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { addToCart(btn.getAttribute("data-id")); });
  });
}

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
      '<div class="cart-emoji">' + p.emoji + "</div>" +
      '<div class="cart-info"><h4>' + p.name + "</h4>" +
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
  $("cartSubtotal").textContent = fmt(cartTotal());
  $("cartTotal").textContent = fmt(cartTotal());
}

/* ---------------- cart actions ---------------- */
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
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

/* ---------------- checkout ---------------- */
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

  const lines = [];
  lines.push("*New Order — " + STORE_NAME + "*");
  lines.push("--------------------------");
  Object.keys(cart).forEach(function (id) {
    const p = productById(id);
    if (!p) return;
    lines.push(cart[id] + " × " + p.name + " — " + fmt(p.price * cart[id]));
  });
  lines.push("--------------------------");
  lines.push("Total: " + fmt(cartTotal()));
  lines.push("");
  lines.push("Name: " + name);
  lines.push("Phone: " + phone);
  lines.push("Address: " + address);
  lines.push("Payment: " + payment);
  if (notes) lines.push("Notes: " + notes);

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
  note.textContent = "Opening WhatsApp with your order…";
  cart = {};
  saveCart();
  renderCart();
  setTimeout(function () { window.location.href = url; }, 1200);
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderStoreName();
  renderPills();
  renderProducts();
  renderCart();

  $("waLink").href = "https://wa.me/" + WHATSAPP_NUMBER;
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
});
