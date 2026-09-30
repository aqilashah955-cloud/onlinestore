/* ============================================================
   Chitral Bazaar — store configuration
   ------------------------------------------------------------
   STORE_NAME       : change your store's display name here.
   WHATSAPP_NUMBER  : your WhatsApp number in international format
                      (country code + number, no "+", no spaces).
                      Order messages are sent here on checkout.
   ORDER_EMAIL      : your email address. Shoppers can also send
                      their order here via the email button.
   COUPONS          : discount codes shoppers can apply in the cart
                      (percent off; codes are case-insensitive).
   CURRENCY         : price prefix shown before amounts.
   ============================================================ */
const STORE_NAME = "Chitral Bazaar";
const WHATSAPP_NUMBER = "923456121725";
const ORDER_EMAIL = "nizarsyed74@gmail.com";
const CURRENCY = "Rs";

/* Discount coupons: code -> percent off */
const COUPONS = { CHITRAL10: 10, FESTIVE15: 15, WELCOME20: 20 };
const COUPON_KEY = "chitralbazaar_coupon_v1";

const CATEGORIES = [
  { id: "handicrafts", name: "Handicrafts", emoji: "🧶" },
  { id: "dryfruits",   name: "Dry Fruits & Local Foods", emoji: "🍑" },
  { id: "clothing",    name: "Clothing & Apparel", emoji: "👕" },
  { id: "electronics", name: "Electronics", emoji: "🔌" },
  { id: "homekitchen", name: "Home & Kitchen", emoji: "🏠" },
  { id: "beauty",      name: "Beauty & Personal Care", emoji: "🧴" },
  { id: "gemstones",   name: "Gemstones", emoji: "💎" },
  { id: "giftcards",   name: "Gift Cards", emoji: "💳" },
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
                "electronics", "homekitchen", "beauty", "gemstones",
                "giftcards")
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
  // --- Nightwear & men's essentials (prices are samples — replace with real prices) ---
  { id: "p41", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Brassiere_%28AM_2000.93.83-4%29.jpg/960px-Brassiere_%28AM_2000.93.83-4%29.jpg", name: "Women's Cotton Bra — Comfort Fit", category: "clothing", price: 950, desc: "Soft breathable cotton bra with all-day comfort fit.", emoji: "👚" },
  { id: "p42", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Loungewear_MET_CI44.64.17ab_F.jpg/960px-Loungewear_MET_CI44.64.17ab_F.jpg?utm_source=www.wikidata.org&utm_campaign=index&utm_content=thumbnail", name: "Women's Satin Night Suit", category: "clothing", price: 2800, desc: "Smooth satin two-piece night suit, elegant and comfy.", emoji: "🌙" },
  { id: "p43", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Two_piece_pajamas.jpg/250px-Two_piece_pajamas.jpg?utm_source=de.wiktionary.org&utm_campaign=parser&utm_content=thumbnail", name: "Women's Cotton Night Suit", category: "clothing", price: 1800, desc: "Lightweight cotton pajama set for restful sleep.", emoji: "🌙" },
  { id: "p44", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Crew_neck_T-shirt.jpg", name: "Men's Cotton T-Shirt — Crew Neck", category: "clothing", price: 900, desc: "Classic crew-neck tee in soft pure cotton.", emoji: "👕", badge: "Popular" },
  { id: "p45", image: "https://i5.walmartimages.com/asr/60349220-d3a9-499f-a77d-8222073ce6d3.765b657b940f34a18d9722f3fb80d86f.jpeg", name: "Men's Polo Shirt — Classic", category: "clothing", price: 1500, desc: "Smart-casual polo with ribbed collar and cuffs.", emoji: "👕" },
  { id: "p46", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BHC-Fliegerjacke.jpg/1280px-BHC-Fliegerjacke.jpg?utm_source=ru.wiktionary.org&utm_campaign=index&utm_content=thumbnail", name: "Men's Bomber Jacket — Casual", category: "clothing", price: 5500, desc: "Casual bomber jacket with ribbed hem, street-ready style.", emoji: "🧥" },
  { id: "p47", image: "https://modo-vintogo.shop/cdn/shop/products/png_2f758a1d-4b68-4b7a-bfcf-6afa07e69a8b.jpg?v=1683289605&width=1024", name: "Men's Winter Overcoat — Wool Blend", category: "clothing", price: 8500, desc: "Long wool-blend overcoat, sharp and warm for winter.", emoji: "🧥" },
  { id: "p48", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Briefs.jpg/500px-Briefs.jpg", name: "Men's Cotton Briefs — Underwear (3-pack)", category: "clothing", price: 1200, desc: "Pack of 3 breathable cotton briefs, everyday essentials.", emoji: "🩲" },
  { id: "p49", image: "https://i5.walmartimages.com/asr/7d4288cd-6253-483f-90d6-3a3a9a410bba.d2f8a3a2f3e2976a6f440d6f06a67233.jpeg", name: "Men's Cotton Vest — Undershirt", category: "clothing", price: 650, desc: "Sleeveless cotton vest, soft innerwear for daily wear.", emoji: "🎽" },
  { id: "p50", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Navy_blazer_jacket.jpg/1280px-Navy_blazer_jacket.jpg", name: "Men's Formal Blazer", category: "clothing", price: 9500, desc: "Tailored formal blazer, perfect for events and office.", emoji: "🤵", badge: "New" },

  // ---- Gift Cards (SAMPLE prices — replace with your own catalogue prices) ----
  { id: "p51", image: "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8zNV9waG90b19vZl93aGl0ZV9naWZ0X2JveF93aXRoX3JlZF9yaWJib25fX2lzb19lOWRkZmNlOC05ZDljLTQ0ZjUtODc3Mi05NzhhODliMDdmNGJfMS5qcGc.jpg", name: "Gift Card — Rs 1,000", category: "giftcards", price: 1000, desc: "Rs 1,000 gift card — the gift code is sent via WhatsApp or email after purchase, redeemable on any product.", emoji: "🎁", badge: "New" },
  { id: "p52", image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Giving_a_gift.jpg", name: "Gift Card — Rs 2,500", category: "giftcards", price: 2500, desc: "Rs 2,500 gift card — the gift code is sent via WhatsApp or email after purchase, redeemable on any product.", emoji: "🎁" },
  { id: "p53", image: "https://images.pexels.com/photos/10278973/pexels-photo-10278973.jpeg?auto=compress&w=1260&h=750&dpr=1", name: "Gift Card — Rs 5,000", category: "giftcards", price: 5000, desc: "Rs 5,000 gift card — the gift code is sent via WhatsApp or email after purchase, redeemable on any product.", emoji: "🎀" },
  { id: "p54", image: "https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Gift Card — Rs 10,000", category: "giftcards", price: 10000, desc: "Rs 10,000 gift card — the gift code is sent via WhatsApp or email after purchase, redeemable on any product.", emoji: "🎀" },

  // ---- More clothing (SAMPLE prices — replace with real prices) ----
  { id: "p55", image: "https://images.pexels.com/photos/36325962/pexels-photo-36325962/free-photo-of-elegant-portrait-of-woman-in-pakistani-embroidered-dress.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy", name: "Women's Embroidered Frock", category: "clothing", price: 3200, desc: "Elegant cream frock with intricate Pakistani embroidery and dupatta.", emoji: "👗", badge: "New" },
  { id: "p56", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Embroidered-pashmina-shawl.jpg/960px-Embroidered-pashmina-shawl.jpg", name: "Women's Pashmina Shawl", category: "clothing", price: 3500, desc: "Luxurious pashmina shawl with vivid floral embroidery.", emoji: "🧣" },
  { id: "p57", image: "https://upload.wikimedia.org/wikipedia/commons/2/21/In_my_salwar_suit.jpg", name: "Women's Lawn Suit — 3 Piece", category: "clothing", price: 2800, desc: "Classic 3-piece lawn suit, breathable fabric for summer.", emoji: "👚" },
  { id: "p58", image: "https://images.pexels.com/photos/8989608/pexels-photo-8989608.jpeg?auto=compress&cs=tinysrgb&w=800", name: "Women's Jeans", category: "clothing", price: 2200, desc: "Classic blue denim jeans with a comfortable modern fit.", emoji: "👖" },
  { id: "p59", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Clothing_worn_by_most_Pashtun_males.jpg", name: "Men's Shalwar Kameez", category: "clothing", price: 3500, desc: "Traditional light shalwar kameez with waistcoat, timeless style.", emoji: "👔" },
  { id: "p60", image: "https://images.pexels.com/photos/3889627/pexels-photo-3889627.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy", name: "Men's Jeans", category: "clothing", price: 2400, desc: "Slim-fit blue jeans, durable everyday denim.", emoji: "👖" },
  { id: "p61", image: "https://images.pexels.com/photos/28873299/pexels-photo-28873299/free-photo-of-stylish-man-in-black-leather-jacket-outdoors.jpeg?w=600", name: "Men's Leather Jacket", category: "clothing", price: 8500, desc: "Premium black leather jacket with shearling collar.", emoji: "🧥", badge: "Popular" },
  { id: "p62", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Standing_man_in_sportwear.jpg/960px-Standing_man_in_sportwear.jpg", name: "Men's Track Suit", category: "clothing", price: 3200, desc: "Full tracksuit — jacket and track pants for sport and leisure.", emoji: "🏃" },

  // ---- More gemstones (SAMPLE prices — replace with your own catalogue prices) ----
  { id: "p63", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Honey_nephrite_pendant.jpg/960px-Honey_nephrite_pendant.jpg", name: "Nephrite — Well Polished Handcrafted Carving", category: "gemstones", price: 75000, desc: "Hand-carved honey nephrite pendant with floral relief and a mirror polish — prized in Pakistan's northern gemstone trade.", emoji: "🟡", badge: "Rare" },
  { id: "p64", image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Turquoise-29507.jpg", name: "Turquoise", category: "gemstones", price: 22000, desc: "Polished turquoise nodule with natural matrix veining in vivid sky blue.", emoji: "🩵" },
  { id: "p65", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Polished_quartz.JPG/960px-Polished_quartz.JPG", name: "Dur-e-Najaf", category: "gemstones", price: 15000, desc: "Crystal-clear polished Dur-e-Najaf quartz with glass-like transparency.", emoji: "💎" },
  { id: "p66", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Black_oval_onyx_cabochons_1.jpg/960px-Black_oval_onyx_cabochons_1.jpg", name: "Mohe Najaf", category: "gemstones", price: 12000, desc: "Jet-black Mohe Najaf polished cabochons with a deep mirror shine.", emoji: "⚫" },
  { id: "p67", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Gemperidot.JPG", name: "Peridot", category: "gemstones", price: 28000, desc: "Faceted peridot glowing with vivid olive-green fire, from the northern valleys.", emoji: "🫒", badge: "New" },
  { id: "p68", image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Cut_Ruby.jpg", name: "Ruby", category: "gemstones", price: 90000, desc: "Faceted oval ruby with a rich pinkish-red glow.", emoji: "❤️" },
  { id: "p69", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Amatista_Piedra_Pulida.jpg/960px-Amatista_Piedra_Pulida.jpg", name: "Amethyst", category: "gemstones", price: 18000, desc: "Smooth polished amethyst in soft violet hues.", emoji: "💜" },
  { id: "p70", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2_Smoky_quartz.JPG/960px-2_Smoky_quartz.JPG", name: "Smoky Quartz", category: "gemstones", price: 14000, desc: "Faceted smoky quartz in warm cognac-brown tones.", emoji: "🤎" },
];

/* ---------------- state ---------------- */
const CART_KEY = "chitralbazaar_cart_v1";
let cart = loadCart();          // { productId: qty }
let activeCategory = "all";
let searchQuery = "";
let appliedCoupon = loadCoupon(); // { code, pct } or null

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
/* discount = round(subtotal * pct/100) */
function couponDiscount(subtotal) {
  return appliedCoupon ? Math.round(subtotal * appliedCoupon.pct / 100) : 0;
}

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

function filterToCategory(id) {
  activeCategory = id;
  renderPills();
  renderProducts();
  var grid = document.getElementById("productGrid");
  if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------- shop-by-collection cards ---------------- */
function renderCollections() {
  const wrap = $("collectionCards");
  if (!wrap) return;
  wrap.innerHTML = "";
  CATEGORIES.forEach(function (c) {
    const count = PRODUCTS.filter(function (p) { return p.category === c.id; }).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "collection-card";
    card.innerHTML =
      '<span class="collection-emoji" aria-hidden="true">' + c.emoji + "</span>" +
      '<span class="collection-name">' + c.name + "</span>" +
      '<span class="collection-count">' + count + (count === 1 ? " item" : " items") + "</span>";
    card.addEventListener("click", function () { filterToCategory(c.id); });
    wrap.appendChild(card);
  });
}

/* ---------------- footer category links ---------------- */
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

/* ---------------- promo bar ---------------- */
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

/* ---------------- coupons ---------------- */
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

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  renderStoreName();
  renderPills();
  renderCollections();
  renderFooterCats();
  renderProducts();
  renderCart();
  initPromoBar();

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
});
