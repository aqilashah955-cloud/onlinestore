/* ============================================================
   Chitral Bazaar — store configuration
   ------------------------------------------------------------
   STORE_NAME       : change your store's display name here.
   WHATSAPP_NUMBER  : your WhatsApp number in international format
                      (country code + number, no "+", no spaces).
                      Order messages are sent here on checkout.
   ORDER_EMAIL      : your email address. Shoppers can also send
                      their order here via the email button.
   CURRENCY         : price prefix shown before amounts.
   ============================================================ */
const STORE_NAME = "Chitral Bazaar";
const WHATSAPP_NUMBER = "923456121725";
const ORDER_EMAIL = "nizarsyed74@gmail.com";
const CURRENCY = "Rs";

const CATEGORIES = [
  { id: "handicrafts", name: "Handicrafts", emoji: "🧶" },
  { id: "dryfruits",   name: "Dry Fruits & Local Foods", emoji: "🍑" },
  { id: "clothing",    name: "Clothing & Apparel", emoji: "👕" },
  { id: "electronics", name: "Electronics", emoji: "🔌" },
  { id: "homekitchen", name: "Home & Kitchen", emoji: "🏠" },
  { id: "beauty",      name: "Beauty & Personal Care", emoji: "🧴" },
  { id: "gemstones",   name: "Gemstones", emoji: "💎" },
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
                "electronics", "homekitchen", "beauty", "gemstones")
     price    : number, in PKR (no commas)
     desc     : short description
     emoji    : an emoji used as the product's placeholder image
     image    : URL of the product photo (shown on the card;
                falls back to the emoji if it fails to load)
     badge    : optional — "New", "Popular", "Sale", or omit it
   ============================================================ */
const PRODUCTS = [
  // ---- Handicrafts ----
  { id: "p01", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_02.jpg/960px-A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_02.jpg", name: "Pakol — Traditional Chitrali Cap", category: "handicrafts", price: 850,  desc: "Hand-felted pure wool pakol, the iconic Chitrali cap.", emoji: "🧢", badge: "Popular" },
  { id: "p02", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kashmiri_shawls.jpg/960px-Kashmiri_shawls.jpg", name: "Hand-Woven Woolen Shawl",          category: "handicrafts", price: 3200, desc: "Warm hand-loomed shawl woven by Chitrali artisans.",  emoji: "🧣" },
  { id: "p03", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kermina_Suzani.jpg/960px-Kermina_Suzani.jpg", name: "Embroidered Wall Hanging",         category: "handicrafts", price: 1500, desc: "Colorful hand-embroidered wall piece with mountain motifs.", emoji: "🖼️" },
  { id: "p04", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Box%2C_jewellery_%28AM_672585-2%29.jpg/960px-Box%2C_jewellery_%28AM_672585-2%29.jpg", name: "Walnut Wood Keepsake Box",         category: "handicrafts", price: 2200, desc: "Hand-carved walnut wood box, perfect for jewelry.",    emoji: "🗝️", badge: "New" },

  // ---- Dry Fruits & Local Foods ----
  { id: "p05", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dried_red_apricots.jpg/960px-Dried_red_apricots.jpg", name: "Dried Apricots — 1 kg",    category: "dryfruits", price: 1100, desc: "Sun-dried valley apricots, naturally sweet.",        emoji: "🍑", badge: "Popular" },
  { id: "p06", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/White_walnut_kernels.jpg/960px-White_walnut_kernels.jpg", name: "Deshelled Walnuts — 1 kg", category: "dryfruits", price: 1600, desc: "Premium deshelled walnuts, rich and crunchy.",         emoji: "🌰" },
  { id: "p07", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Antiguan_honey_products_at_an_exhibition_in_Saint_Lucia.jpg/960px-Antiguan_honey_products_at_an_exhibition_in_Saint_Lucia.jpg", name: "Pure Mountain Honey — 500 g", category: "dryfruits", price: 1400, desc: "Raw unprocessed honey from high-altitude beehives.", emoji: "🍯" },
  { id: "p08", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dried_berries.jpg/960px-Dried_berries.jpg", name: "Dried Mulberries — 500 g", category: "dryfruits", price: 750,  desc: "Sweet dried mulberries, a healthy everyday snack.",    emoji: "🫐", badge: "New" },

  // ---- Clothing & Apparel ----
  { id: "p09", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Waistcoat.jpg/960px-Waistcoat.jpg", name: "Men's Woolen Waistcoat",    category: "clothing", price: 4500, desc: "Classic Chitrali-style woolen waistcoat, tailored fit.", emoji: "🦺" },
  { id: "p10", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Embroidered-pashmina-shawl.jpg/960px-Embroidered-pashmina-shawl.jpg", name: "Pashmina Shawl",            category: "clothing", price: 2800, desc: "Soft pashmina-blend shawl in elegant colors.",           emoji: "🧣" },
  { id: "p11", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Embroidered_dress%2C_view_1%2C_Kohistan%2C_Northwest_Frontier_Province%2C_Pakistan%2C_early_20th_century%2C_cotton%2C_silk%2C_glass%2C_plastic%2C_silver%2C_brass_-_Fernbank_Museum_of_Natural_History_-_DSC00129.JPG/960px-thumbnail.jpg", name: "Ladies Embroidered Kurti",  category: "clothing", price: 2400, desc: "Cotton kurti with traditional Chitrali embroidery.",     emoji: "👗", badge: "Popular" },
  { id: "p12", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hand-knitted_Himachali_socks%2C1.jpg/960px-Hand-knitted_Himachali_socks%2C1.jpg", name: "Woolen Socks — Pack of 3",  category: "clothing", price: 600,  desc: "Thick hand-knitted woolen socks for winter.",           emoji: "🧦" },

  // ---- Electronics ----
  { id: "p13", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Solar_Lantern.jpg/960px-Solar_Lantern.jpg", name: "Solar Power Deal",       category: "electronics", price: 3500, desc: "Rechargeable solar lantern — ideal during load-shedding.", emoji: "💡", badge: "Popular" },
  { id: "p14", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/5V_2.5A_Mobile_Portable_USB_Battery_Charger_%288925597960%29.jpg/960px-5V_2.5A_Mobile_Portable_USB_Battery_Charger_%288925597960%29.jpg", name: "Power Bank 20000 mAh",             category: "electronics", price: 2900, desc: "Fast-charging high-capacity power bank.",                   emoji: "🔋" },
  { id: "p15", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/7W_LED_light_bulb_%28GU10%29.JPG/960px-7W_LED_light_bulb_%28GU10%29.JPG", name: "LED Rechargeable Bulbs — Pack of 4", category: "electronics", price: 1200, desc: "Energy-saving bulbs with built-in backup battery.",     emoji: "💡" },
  { id: "p16", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/ActiveSound_wireless_earbuds_by_Hykker_%28POJM200483%29.jpg/960px-ActiveSound_wireless_earbuds_by_Hykker_%28POJM200483%29.jpg", name: "Wireless Earbuds",                 category: "electronics", price: 2500, desc: "Bluetooth earbuds with charging case.",                     emoji: "🎧", badge: "New" },

  // ---- Home & Kitchen ----
  { id: "p17", image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Cebu_Clay_pot_3.jpg", name: "Traditional Clay Karahi",      category: "homekitchen", price: 950,  desc: "Handmade clay cooking pot for authentic flavor.",  emoji: "🍲" },
  { id: "p18", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Adjarian_khachapuri_on_a_wooden_tray.jpg/960px-Adjarian_khachapuri_on_a_wooden_tray.jpg", name: "Walnut Wood Serving Tray",     category: "homekitchen", price: 1350, desc: "Polished walnut wood tray, artisan-made.",         emoji: "🍽️" },
  { id: "p19", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ri_2014_-_Thermos_flask_-_James_Dewar_%2827%29.jpg/960px-Ri_2014_-_Thermos_flask_-_James_Dewar_%2827%29.jpg", name: "Insulated Thermos Flask — 1 L", category: "homekitchen", price: 1800, desc: "Keeps tea hot for hours, steel body.",             emoji: "🫖" },
  { id: "p20", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bed_in_Seattle_hotel.jpg/960px-Bed_in_Seattle_hotel.jpg", name: "Hand-Loomed Cotton Bedsheet",  category: "homekitchen", price: 1650, desc: "Breathable hand-loomed bedsheet, king size.",      emoji: "🛏️" },

  // ---- Beauty & Personal Care ----
  { id: "p21", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Eucalyptus_Oil_Bottles_Inglewood.jpg/960px-Eucalyptus_Oil_Bottles_Inglewood.jpg", name: "Apricot Kernel Oil — 100 ml",  category: "beauty", price: 20000, desc: "Cold-pressed apricot oil for skin and hair.",          emoji: "🧴", badge: "Popular" },
  { id: "p22", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Day_cream_02.jpg/960px-Day_cream_02.jpg", name: "Walnut Shell Face Scrub",      category: "beauty", price: 550, desc: "Gentle natural exfoliating scrub.",                    emoji: "🧖" },
  { id: "p23", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Aleppo_soap_01.jpg/960px-Aleppo_soap_01.jpg", name: "Herbal Soap Bars — Pack of 3", category: "beauty", price: 650, desc: "Handmade herbal soaps with mountain botanicals.",      emoji: "🧼" },
  { id: "p24", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Care_peach_shampoo_%282019%29_03.jpg/960px-Care_peach_shampoo_%282019%29_03.jpg", name: "Mountain Herb Shampoo — 250 ml", category: "beauty", price: 800, desc: "Herbal shampoo for strong, shiny hair.",             emoji: "🧴", badge: "New" },

  // ---- Gemstones (SAMPLE prices — replace with your own catalogue prices) ----
  { id: "p25", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Aquamarine_%28GeoDIL_number_-_904%29.jpg/960px-Aquamarine_%28GeoDIL_number_-_904%29.jpg", name: "Aquamarine Crystal — Natural", category: "gemstones", price: 45000, desc: "Sky-blue natural aquamarine, famed in the Shigar valley mines.", emoji: "💎" },
  { id: "p26", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Tourmaline-139750.jpg", name: "Tourmaline Crystal — Pink-Green", category: "gemstones", price: 60000, desc: "Striking bi-color tourmaline crystal from Gilgit-Baltistan.", emoji: "💎", badge: "Rare" },
  { id: "p27", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/2_blue_topaz_crystals.jpg/960px-2_blue_topaz_crystals.jpg", name: "Blue Topaz — Facet Grade", category: "gemstones", price: 18000, desc: "Clear blue topaz, ideal for cutting and jewelry.", emoji: "💎" },
  { id: "p28", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Almandine_garnet_1.jpg/960px-Almandine_garnet_1.jpg", name: "Red Garnet — Almandine", category: "gemstones", price: 25000, desc: "Deep-red almandine garnet crystals, collector grade.", emoji: "💎" },
  { id: "p29", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/%28Muzo%29_Emerald_crystal_in_its_matrix.jpg/960px-%28Muzo%29_Emerald_crystal_in_its_matrix.jpg", name: "Emerald in Matrix — Specimen", category: "gemstones", price: 150000, desc: "Vivid green emerald crystal in natural host rock.", emoji: "💎", badge: "New" },
  { id: "p30", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Lapis-lazuli_hg.jpg/960px-Lapis-lazuli_hg.jpg", name: "Lapis Lazuli — Premium Blue", category: "gemstones", price: 35000, desc: "Intense blue lapis with golden pyrite flecks, Hindu Kush origin.", emoji: "💎" },
  // --- Women's dresses & outerwear (prices are samples — replace with real prices) ---
  { id: "p31", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Cotton_Embroidered_Dupatta.jpg/960px-Cotton_Embroidered_Dupatta.jpg", name: "Women's Embroidered Chiffon Dupatta", category: "clothing", price: 1200, desc: "Lightweight chiffon dupatta with delicate embroidery.", emoji: "🧕", badge: "New" },
  { id: "p32", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Cardigan%2C_sweater.JPG/960px-Cardigan%2C_sweater.JPG", name: "Women's Woolen Cardigan", category: "clothing", price: 2200, desc: "Cozy knitted cardigan, perfect for chilly evenings.", emoji: "🧥" },
  { id: "p33", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Woman_in_a_winter_coat%2C_Japan._%2810797193766%29.jpg/960px-Woman_in_a_winter_coat%2C_Japan._%2810797193766%29.jpg", name: "Ladies Winter Coat", category: "clothing", price: 5500, desc: "Warm long winter coat with a flattering fit.", emoji: "🧥" },
  { id: "p34", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Hoodie_m7agar.jpg/960px-Hoodie_m7agar.jpg", name: "Hoodie — Unisex", category: "clothing", price: 1800, desc: "Soft fleece hoodie, everyday comfort wear.", emoji: "🧥", badge: "Popular" },
  { id: "p35", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Islamic_Clothing_Abaya.jpg", name: "Abaya — Classic Black", category: "clothing", price: 3800, desc: "Elegant classic black abaya, modest and graceful.", emoji: "🧕" },
  { id: "p36", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Jean_jacket.jpg/960px-Jean_jacket.jpg", name: "Men's Denim Jacket", category: "clothing", price: 3200, desc: "Rugged denim jacket, a timeless outerwear staple.", emoji: "🧥" },
  { id: "p37", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Person_smiling_while_wearing_a_dark_coat_with_a_fur-lined_hood.jpg/960px-Person_smiling_while_wearing_a_dark_coat_with_a_fur-lined_hood.jpg", name: "Men's Winter Parka", category: "clothing", price: 6500, desc: "Heavy-duty parka with fur-lined hood for harsh winters.", emoji: "🧥" },
  { id: "p38", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Green_Aran_Sweater.JPG/960px-Green_Aran_Sweater.JPG", name: "Men's Woolen Sweater", category: "clothing", price: 2400, desc: "Thick cable-knit woolen sweater, classic style.", emoji: "🧶" },
  { id: "p39", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Pashmina-boteh.jpg/960px-Pashmina-boteh.jpg", name: "Men's Woolen Shawl", category: "clothing", price: 1900, desc: "Warm woolen shawl with traditional woven pattern.", emoji: "🧣" },
  { id: "p40", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Wedding_dresses_in_Eastern_Culture.jpg/960px-Wedding_dresses_in_Eastern_Culture.jpg", name: "Women's Embroidered Maxi", category: "clothing", price: 4200, desc: "Festive embroidered maxi dress for special occasions.", emoji: "👗" },
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
    const bookUrl = "mailto:" + ORDER_EMAIL
      + "?subject=" + encodeURIComponent("Booking — " + p.name + " (" + STORE_NAME + ")")
      + "&body=" + encodeURIComponent("Hello,\n\nI would like to book this product:\n\n" + p.name + " — " + fmt(p.price) + "\n\nName: \nPhone: \nAddress: ");
    card.innerHTML =
      '<div class="card-visual">' +
        '<span class="card-fallback" aria-hidden="true">' + p.emoji + "</span>" +
        (p.image ? '<img class="card-img" src="' + p.image + '" alt="' + p.name +
          '" loading="lazy" onerror="this.remove()" />' : "") +
        (p.badge ? '<span class="badge">' + p.badge + "</span>" : "") +
      "</div>" +
      '<div class="card-body">' +
        '<span class="card-cat">' + (cat ? cat.name : p.category) + "</span>" +
        "<h3>" + p.name + "</h3>" +
        '<p class="card-desc">' + p.desc + "</p>" +
        '<div class="card-row">' +
          '<span class="price">' + fmt(p.price) + "</span>" +
          '<div class="card-actions">' +
            '<a class="book-btn" href="' + bookUrl + '">Book Now</a>' +
            '<button class="add-btn" data-id="' + p.id + '">Add to Cart</button>' +
          "</div>" +
        "</div>" +
      "</div>";
    grid.appendChild(card);
  });
  grid.querySelectorAll(".add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { addToCart(btn.getAttribute("data-id")); });
  });
  observeReveals(grid);
}

/* Scroll-reveal for product cards (staggered, respects nothing extra) */
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
        '<span class="card-fallback sm" aria-hidden="true">' + p.emoji + "</span>" +
        (p.image ? '<img src="' + p.image + '" alt="" loading="lazy" onerror="this.remove()" />' : "") +
      "</div>" +
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
  var badge = $("cartCount");
  badge.classList.remove("pop");
  void badge.offsetWidth; /* restart the pop animation */
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
  const emailBody = lines.map(function (l) { return l.replace(/\*/g, ""); }).join("\n");
  const emailUrl = "mailto:" + ORDER_EMAIL
    + "?subject=" + encodeURIComponent("New Order — " + STORE_NAME)
    + "&body=" + encodeURIComponent(emailBody);
  note.innerHTML = "Opening WhatsApp with your order… Prefer email? "
    + "<a href=\"" + emailUrl + "\">Send order via Email</a>";
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
  $("emailLink").href = "mailto:" + ORDER_EMAIL;
  $("emailLink").textContent = ORDER_EMAIL;
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
