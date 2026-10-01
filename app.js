/* ============================================================
   Chitral Bazaar — authentic local marketplace
   ------------------------------------------------------------
   STORE_NAME       : change your store's display name here.
   WHATSAPP_NUMBER  : your WhatsApp number in international format
                      (country code + number, no "+", no spaces).
   ORDER_EMAIL      : your email address for email orders.
   COUPONS          : discount codes (percent off, case-insensitive).
   CURRENCY         : price prefix shown before amounts.

   PRODUCTS — SAMPLE CATALOGUE (sample data).
   Replace with your real catalogue: every product object supports:
     id, name, category (see CATEGORIES), price (PKR, number),
     oldPrice (optional discount anchor), desc (short), longDesc,
     story ("The Story Behind This Product"), image, images[] (extras),
     emoji (fallback), weight, valley (see VALLEYS), producer (placeholder name),
     village, method, materials, packaging, ptype, rating (0-5),
     reviews (count), featured, bestseller, isNew, added (YYYY-MM-DD),
     maker {name, village, craft, time, materials} (optional),
     tags {handmade, food, clothing, gift}
   ============================================================ */
const STORE_NAME = "Chitral Bazaar";
const WHATSAPP_NUMBER = "923456121725";
const ORDER_EMAIL = "nizarsyed74@gmail.com";
const CURRENCY = "Rs";

/* Discount coupons: code -> percent off */
const COUPONS = { CHITRAL10: 10, FESTIVE15: 15, WELCOME20: 20 };
const COUPON_KEY = "chitralbazaar_coupon_v1";
const WISH_KEY = "chitralbazaar_wish_v1";

const CATEGORIES = [
  { id: "dryfoods",    name: "Dry Fruits & Foods", emoji: "🍑" },
  { id: "honey",       name: "Chitral Honey",      emoji: "🍯" },
  { id: "wool",        name: "Wool & Clothing",    emoji: "🧶" },
  { id: "handicrafts", name: "Handicrafts",        emoji: "👜" },
  { id: "kalasha",     name: "Kalasha Heritage",   emoji: "🏔️" },
  { id: "giftboxes",   name: "Gift Boxes",         emoji: "🎁" },
  { id: "giftcards",   name: "Gift Cards",         emoji: "💳" },
];

const VALLEYS = [
  { id: "upper-chitral", name: "Upper Chitral", emoji: "⛰️" },
  { id: "lower-chitral", name: "Lower Chitral", emoji: "🌄" },
];

/* Sample maker profiles (placeholder names — replace with real artisan stories) */
const MAKERS = [
  { name: "Bibi Zara", role: "Wool weaver", village: "Upper Chitral", emoji: "🧶",
    story: "Weaves shawls and patti cloth on a wooden loom, a craft passed down through three generations of her family." },
  { name: "Sher Wali", role: "Woodcarver", village: "Lower Chitral", emoji: "🪵",
    story: "Carves keepsake boxes and kitchenware from seasoned walnut wood, finishing each piece by hand." },
  { name: "Fazal", role: "Beekeeper", village: "Lower Chitral", emoji: "🍯",
    story: "Keeps hives in the high pastures of Lower Chitral and harvests honey twice a year, in spring and late summer." },
  { name: "Nasreen", role: "Embroiderer", village: "Lower Chitral", emoji: "🪡",
    story: "Stitches traditional Chitrali embroidery onto bags, purses and wall pieces, often working with a small group of neighbours." },
];

/* ---- catalogue is inserted here (see build note above) ---- */
const PRODUCTS = [
  {
    "added": "2026-07-02",
    "bestseller": true,
    "category": "dryfoods",
    "desc": "Sweet sun-dried apricots from the orchards of Upper Chitral.",
    "emoji": "🍑",
    "featured": true,
    "id": "f01",
    "longDesc": "Whole apricots picked ripe from family orchards in Upper Chitral and dried slowly in the mountain sun. Soft, chewy and naturally sweet — the classic Chitrali khubani.",
    "materials": "Apricots",
    "method": "Sun-dried on rooftops and courtyards",
    "name": "Sun-Dried Chitrali Khubani",
    "packaging": "Sealed food-grade pouch",
    "price": 899,
    "producer": "Rehmat",
    "ptype": "Farm-produced",
    "rating": 4.8,
    "reviews": 214,
    "story": "Apricots have grown in Chitral's valleys for generations. Every summer, families spread the ripe fruit on rooftops and courtyards to dry in the mountain sun — the same unhurried way it has been done for decades.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Turkey_dried_apricots.jpg/960px-Turkey_dried_apricots.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dried_Apricots.jpg/960px-Dried_Apricots.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/A_bunch_of_dried_apricots.JPG/960px-A_bunch_of_dried_apricots.JPG"
    ]
  },
  {
    "added": "2026-07-02",
    "category": "dryfoods",
    "desc": "Sweet apricot kernels, cracked and sorted by hand.",
    "emoji": "🫘",
    "id": "f02",
    "longDesc": "The kernels inside dried Chitrali apricot stones, cracked by hand and sorted for size. Mild, sweet and crunchy — eaten as a snack or added to desserts.",
    "materials": "Apricot kernels",
    "method": "Hand-cracked and sorted",
    "name": "Khubani Giri (Apricot Kernels)",
    "packaging": "Sealed food-grade pouch",
    "price": 1150,
    "producer": "Sultan",
    "ptype": "Farm-produced",
    "rating": 4.7,
    "reviews": 96,
    "story": "In Chitral, nothing from the apricot harvest goes to waste. After the fruit is dried, the stones are cracked open through winter evenings to reveal the sweet kernels inside.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Apricot_kernel_in_bowl.jpg/960px-Apricot_kernel_in_bowl.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dried_apricot_kernels%2C_Malatya_01.jpg/960px-Dried_apricot_kernels%2C_Malatya_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Apricot_seeds.jpg/960px-Apricot_seeds.jpg"
    ]
  },
  {
    "added": "2026-07-05",
    "category": "dryfoods",
    "desc": "Thin-shelled walnuts from Upper Chitral's old walnut groves.",
    "emoji": "🌰",
    "id": "f03",
    "longDesc": "Whole walnuts from mature trees in Upper Chitral, gathered each autumn. Thin shells, full kernels — the everyday walnut of Chitrali households.",
    "materials": "Walnuts",
    "method": "Harvested and air-dried",
    "name": "Chitrali Walnuts (In Shell)",
    "packaging": "Breathable jute sack",
    "price": 1250,
    "producer": "Gul",
    "ptype": "Farm-produced",
    "rating": 4.6,
    "reviews": 132,
    "story": "Walnut trees shade many Chitrali courtyards, some planted by grandparents and still bearing. The autumn harvest is a family affair, gathered before the first snow.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "1 kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Noces_Walnuts_Nueces.jpg/960px-Noces_Walnuts_Nueces.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/960px-Walnuts_-_whole_and_open_with_halved_kernel.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Juglans_regia_2009_G2.jpg/960px-Juglans_regia_2009_G2.jpg"
    ]
  },
  {
    "added": "2026-07-05",
    "bestseller": true,
    "category": "dryfoods",
    "desc": "Hand-shelled walnut kernels, halves and large pieces.",
    "emoji": "🌰",
    "id": "f04",
    "longDesc": "Upper Chitral walnuts shelled by hand and sorted into halves and large pieces. Rich and crunchy — ready to eat, bake with, or gift.",
    "materials": "Walnut kernels",
    "method": "Hand-shelled and sorted",
    "name": "Walnut Kernels",
    "oldPrice": 1650,
    "packaging": "Sealed food-grade pouch",
    "price": 1450,
    "producer": "Gul",
    "ptype": "Farm-produced",
    "rating": 4.9,
    "reviews": 187,
    "story": "Shelling walnuts is winter work in Chitral, done around the stove in the evenings. The best halves are set aside for guests and special occasions.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Whole_walnut_kernel_and_shell.jpg/960px-Whole_walnut_kernel_and_shell.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Walnut_Brains.jpg/960px-Walnut_Brains.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Californian_walnut_kernel_within_a_half-broken_shell%2C_photographed_in_West_Bengal%2C_India%2C_on_January_14%2C_2024.jpg/960px-Californian_walnut_kernel_within_a_half-broken_shell%2C_photographed_in_West_Bengal%2C_India%2C_on_January_14%2C_2024.jpg"
    ]
  },
  {
    "added": "2026-07-10",
    "category": "dryfoods",
    "desc": "Crunchy almonds from the lower valleys of Chitral.",
    "emoji": "🫘",
    "id": "f05",
    "longDesc": "Almonds grown in the warmer lower valleys of Chitral, harvested in late summer and dried in shell before packing.",
    "materials": "Almonds",
    "method": "Harvested and sun-dried",
    "name": "Mountain Almonds",
    "packaging": "Sealed food-grade pouch",
    "price": 1650,
    "producer": "Javed",
    "ptype": "Farm-produced",
    "rating": 4.5,
    "reviews": 74,
    "story": "Almond blossom is one of the first signs of spring in lower Chitral. By late summer the nuts are gathered, dried, and stored for the long winter.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Almonds_in_a_bowl.jpg/960px-Almonds_in_a_bowl.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Liat_Portal_for_Foodie_Disorder_-_Almonds.jpg/960px-Liat_Portal_for_Foodie_Disorder_-_Almonds.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Liat_Portal_for_Foodie_Disorder_-_Raw_almonds_in_a_bowl.jpg/960px-Liat_Portal_for_Foodie_Disorder_-_Raw_almonds_in_a_bowl.jpg"
    ]
  },
  {
    "added": "2026-09-12",
    "category": "dryfoods",
    "desc": "Honey-sweet dried white mulberries.",
    "emoji": "🫐",
    "id": "f06",
    "isNew": true,
    "longDesc": "White mulberries picked fully ripe and dried until chewy and deeply sweet. A traditional Chitrali snack, eaten by the handful.",
    "materials": "White mulberries",
    "method": "Shade-dried",
    "name": "Dried Mulberries (Shahtoot)",
    "packaging": "Sealed food-grade pouch",
    "price": 750,
    "producer": "Amina",
    "ptype": "Farm-produced",
    "rating": 4.6,
    "reviews": 58,
    "story": "Mulberry trees grow beside irrigation channels across Chitral. Children eat them fresh off the branch in early summer; the rest are dried for winter.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dried_mulberry_fruit.jpg/960px-Dried_mulberry_fruit.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dried_mulberries%2C_Malatya_01.jpg/960px-Dried_mulberries%2C_Malatya_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Dried_mulberry.jpg"
    ]
  },
  {
    "added": "2026-08-03",
    "category": "dryfoods",
    "desc": "Crisp-sweet dried apple rings from Upper Chitral orchards.",
    "emoji": "🍎",
    "id": "f07",
    "longDesc": "Apples sliced into rings and dried until lightly chewy with concentrated sweetness. No additives — just apples and mountain air.",
    "materials": "Apples",
    "method": "Sliced and sun-dried",
    "name": "Dried Apple Rings",
    "packaging": "Sealed food-grade pouch",
    "price": 950,
    "producer": "Rehmat",
    "ptype": "Farm-produced",
    "rating": 4.4,
    "reviews": 41,
    "story": "Apple orchards have spread across upper Chitral in recent decades. Drying the surplus is the old answer to a short harvest season and a long winter.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "400 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dried_apple_slices.jpg/960px-Dried_apple_slices.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Morceaux_de_pommes_lyophilisees.jpg/960px-Morceaux_de_pommes_lyophilisees.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jablka%2C_gruszki%2C_sliwki_suszone_z_Wandalina.jpg/960px-Jablka%2C_gruszki%2C_sliwki_suszone_z_Wandalina.jpg"
    ]
  },
  {
    "added": "2026-08-20",
    "category": "dryfoods",
    "desc": "Soft dried figs from the warm slopes of Lower Chitral.",
    "emoji": "🫒",
    "id": "f08",
    "longDesc": "Figs left to ripen fully on the tree, then dried whole. Soft, jammy and rich — a small-batch harvest from Lower Chitral's warm slopes.",
    "materials": "Figs",
    "method": "Tree-ripened and sun-dried",
    "name": "Dried Figs",
    "packaging": "Sealed food-grade pouch",
    "price": 1350,
    "producer": "Javed",
    "ptype": "Farm-produced",
    "rating": 4.7,
    "reviews": 39,
    "story": "Figs need Chitral's warmest corners, and Lower Chitral provides them. The harvest is small and mostly eaten locally — what reaches beyond the valley is a treat.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "400 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dried_figs.jpg/960px-Dried_figs.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Fig_%28Dried%29.jpg/960px-Fig_%28Dried%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Dried_figs_of_Kerala.jpg/960px-Dried_figs_of_Kerala.jpg"
    ]
  },
  {
    "added": "2026-08-01",
    "category": "dryfoods",
    "desc": "Buttery chilgoza pine nuts, hand-extracted.",
    "emoji": "🌲",
    "featured": true,
    "id": "f09",
    "longDesc": "Pine nuts from high-altitude chilgoza pines, extracted from the cones by hand. Buttery and delicate — Chitral's most prized dry fruit.",
    "materials": "Pine nuts (chilgoza)",
    "method": "Hand-extracted and roasted",
    "name": "Chilgoza (Pine Nuts)",
    "packaging": "Sealed food-grade pouch",
    "price": 2800,
    "producer": "Sultan",
    "ptype": "Farm-produced",
    "rating": 4.9,
    "reviews": 112,
    "story": "Chilgoza cones are gathered from steep pine forests and roasted to release the nuts inside. It is slow, skilled work — which is why chilgoza is treasured.",
    "tags": {
      "food": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "250 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Shelled_pine_nuts.jpg/960px-Shelled_pine_nuts.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pine_Nuts_Macro.jpg/960px-Pine_Nuts_Macro.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Siberian_pine_nuts-1.jpg/960px-Siberian_pine_nuts-1.jpg"
    ]
  },
  {
    "added": "2026-07-15",
    "bestseller": true,
    "category": "dryfoods",
    "desc": "Traditional Chitrali walnut sweet, prepared for winter.",
    "emoji": "🍪",
    "id": "f10",
    "longDesc": "The traditional winter sweet of Chitral — walnuts bound with sweetened dough, shaped by hand and baked. Served with tea on cold evenings.",
    "materials": "Walnuts, wheat flour, sugar",
    "method": "Hand-shaped and baked in small batches",
    "name": "Walnut Kilao (Kelawo)",
    "packaging": "Food-safe box",
    "price": 1100,
    "producer": "Shireen",
    "ptype": "Traditionally prepared",
    "rating": 4.8,
    "reviews": 143,
    "story": "Kilao is made when winter closes in and the year's walnuts are shelled. Every family has its own touch, but the heart of it is the same: walnuts, patience and a hot oven.",
    "tags": {
      "food": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gozinaki_with_walnuts.jpg/960px-Gozinaki_with_walnuts.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Croccante_calabrese.JPG/960px-Croccante_calabrese.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Gozinaki_with_hazelnuts.jpg/960px-Gozinaki_with_hazelnuts.jpg"
    ]
  },
  {
    "added": "2026-09-05",
    "category": "dryfoods",
    "desc": "Mountain herbs blended for a warming cup.",
    "emoji": "🍵",
    "id": "f11",
    "isNew": true,
    "longDesc": "A blend of dried mountain herbs gathered in Lower Chitral, mixed for a fragrant, warming brew. Brew a teaspoon per cup.",
    "materials": "Dried mountain herbs",
    "method": "Hand-gathered and shade-dried, blended by hand",
    "name": "Chitrali Herbal Tea Blend",
    "packaging": "Resealable kraft pouch",
    "price": 650,
    "producer": "Amina",
    "ptype": "Traditionally prepared",
    "rating": 4.5,
    "reviews": 47,
    "story": "Gathering herbs from the hillsides is summer work in Chitral, and every household dries its own bundle. This blend follows the local way of mixing them.",
    "tags": {
      "food": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "100 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Herbal_Tea_01.jpg/960px-Herbal_Tea_01.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Herbal_tea_in_white_mug.jpg/960px-Herbal_tea_in_white_mug.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Loose_Leaf_Tisanes_-_Sparrows_Coffee.jpg"
    ]
  },
  {
    "added": "2026-08-10",
    "category": "dryfoods",
    "desc": "Apricots, mulberries, walnuts and almonds in one mix.",
    "emoji": "🥜",
    "id": "f12",
    "longDesc": "A ready-to-eat mix of Chitral's best: dried apricots, mulberries, walnut kernels and almonds. Packed for lunchboxes, treks and tea time.",
    "materials": "Dried apricots, mulberries, walnuts, almonds",
    "method": "Hand-mixed in small batches",
    "name": "Mountain Trail Mix",
    "oldPrice": 1400,
    "packaging": "Resealable pouch",
    "price": 1200,
    "producer": "Shireen",
    "ptype": "Traditionally prepared",
    "rating": 4.6,
    "reviews": 88,
    "story": "Travellers in the mountains have always carried dried fruit for the road. This mix packs that tradition into a pouch for the city.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Trail_Mix.JPG/960px-Trail_Mix.JPG",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Studentenfutter_01.JPG/960px-Studentenfutter_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Gorp.jpg"
    ]
  },
  {
    "added": "2026-07-01",
    "bestseller": true,
    "category": "honey",
    "desc": "Thick wildflower honey from high-pasture hives of Lower Chitral.",
    "emoji": "🍯",
    "featured": true,
    "id": "h01",
    "longDesc": "Honey from hives set in the high pastures of Lower Chitral, where bees work wild mountain flowers all summer. Thick, dark and deeply flavoured.",
    "maker": {
      "craft": "Beekeeping",
      "materials": "Hives, wildflower forage",
      "name": "Fazal",
      "time": "Seasonal harvests",
      "village": "Lower Chitral"
    },
    "materials": "Honey",
    "method": "Harvested twice a year, strained and jarred",
    "name": "Mountain Wild Honey",
    "packaging": "Glass jar",
    "price": 1600,
    "producer": "Fazal",
    "ptype": "Farm-produced",
    "rating": 4.9,
    "reviews": 201,
    "story": "Beekeepers carry their hives up to the high pastures as the snows melt and bring them down before winter. The honey carries the taste of that short, flower-filled summer.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dipper_stick_and_honey_in_a_jar.jpg/960px-Dipper_stick_and_honey_in_a_jar.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Honey_jar_%28411317929%29.jpg/960px-Honey_jar_%28411317929%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Honey_jars.jpg/960px-Honey_jars.jpg"
    ]
  },
  {
    "added": "2026-07-20",
    "category": "honey",
    "desc": "Light spring honey from Lower Chitral.",
    "emoji": "🍯",
    "id": "h02",
    "longDesc": "The first harvest of the year, taken in late spring when orchards and wildflowers bloom together. Light in colour with a gentle floral note.",
    "materials": "Honey",
    "method": "Spring harvest, strained and jarred",
    "name": "Raw Spring Honey",
    "packaging": "Glass jar",
    "price": 1450,
    "producer": "Sher",
    "ptype": "Farm-produced",
    "rating": 4.7,
    "reviews": 83,
    "story": "Spring comes late to the Kalash valleys, but when it arrives the blossoms open all at once. This honey is gathered from that brief, abundant bloom.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "500 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dipper_stick_and_honey_in_a_jar.jpg/960px-Dipper_stick_and_honey_in_a_jar.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Honey_jar_%28411317929%29.jpg/960px-Honey_jar_%28411317929%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Honey_jars.jpg/960px-Honey_jars.jpg"
    ]
  },
  {
    "added": "2026-08-15",
    "category": "honey",
    "desc": "Full kilo of late-summer honey from Lower Chitral.",
    "emoji": "🍯",
    "id": "h03",
    "longDesc": "The main summer harvest from Lower Chitral's apiaries — a generous kilo jar of amber honey, gathered when the high meadows are at their peak.",
    "materials": "Honey",
    "method": "Summer harvest, strained and jarred",
    "name": "Summer Harvest Honey",
    "packaging": "Glass jar",
    "price": 2700,
    "producer": "Noor",
    "ptype": "Farm-produced",
    "rating": 4.8,
    "reviews": 64,
    "story": "By late summer the high meadows of Lower Chitral are thick with flowers, and the hives are at their heaviest. This is the harvest beekeepers wait for all year.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "1 kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Beehives_in_the_mountains_of_Bosnia.jpg/960px-Beehives_in_the_mountains_of_Bosnia.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Beehive_in_mountain.jpg/960px-Beehive_in_mountain.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Beehives_in_Lynch_Canyon_Open_Space_2022-04-17_1552_1.jpg/960px-Beehives_in_Lynch_Canyon_Open_Space_2022-04-17_1552_1.jpg"
    ]
  },
  {
    "added": "2026-09-08",
    "category": "honey",
    "desc": "Cut honeycomb, exactly as the bees made it.",
    "emoji": "🍯",
    "id": "h04",
    "isNew": true,
    "longDesc": "Sections of comb cut straight from the frame, dripping with honey. Chew the comb or spread it warm on bread — the oldest way to eat honey.",
    "materials": "Honeycomb",
    "method": "Cut from the frame by hand",
    "name": "Natural Honeycomb",
    "packaging": "Food-safe box",
    "price": 1200,
    "producer": "Fazal",
    "ptype": "Farm-produced",
    "rating": 4.8,
    "reviews": 52,
    "story": "Before jars and strainers there was the comb itself. Cutting comb is the simplest harvest of all, and many in Chitral still prefer it this way.",
    "tags": {
      "food": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "250 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Honeycomb_at_breakfast.jpg/960px-Honeycomb_at_breakfast.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Honeycomb_-_Flickr_-_Bistrosavage.jpg/960px-Honeycomb_-_Flickr_-_Bistrosavage.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fresh_honeycomb_dripping_honey_India.jpg/960px-Fresh_honeycomb_dripping_honey_India.jpg"
    ]
  },
  {
    "added": "2026-08-25",
    "category": "honey",
    "desc": "Mountain honey in a ready-to-gift jar.",
    "emoji": "🎁",
    "id": "h05",
    "longDesc": "Selected mountain honey packed in a handsome gift jar with a wooden dipper. Ready to give — no wrapping needed.",
    "materials": "Honey, glass jar, wooden dipper",
    "method": "Selected harvest, hand-packed",
    "name": "Premium Chitrali Honey — Gift Jar",
    "packaging": "Gift box with dipper",
    "price": 1950,
    "producer": "Shireen",
    "ptype": "Farm-produced",
    "rating": 4.9,
    "reviews": 77,
    "story": "Honey is the gift Chitralis bring when they visit family in the cities. This jar is packed to travel well and arrive looking its best.",
    "tags": {
      "food": true,
      "gift": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "350 g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dipper_stick_and_honey_in_a_jar.jpg/960px-Dipper_stick_and_honey_in_a_jar.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Honey_jar_%28411317929%29.jpg/960px-Honey_jar_%28411317929%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Honey_jars.jpg/960px-Honey_jars.jpg"
    ]
  },
  {
    "added": "2026-06-20",
    "bestseller": true,
    "category": "wool",
    "desc": "Hand-felted wool pakol — the iconic cap of Chitral.",
    "emoji": "🧢",
    "featured": true,
    "id": "w01",
    "longDesc": "The unmistakable round wool cap of Chitral, felted by hand from sheep's wool and rolled into its classic shape. Warm, durable and worn with pride.",
    "maker": {
      "craft": "Pakol felting",
      "materials": "Local sheep's wool",
      "name": "Rehmat",
      "time": "2–3 days per cap",
      "village": "Lower Chitral"
    },
    "materials": "Sheep's wool",
    "method": "Hand-felted and shaped",
    "name": "Traditional Chitrali Pakol",
    "packaging": "Cloth bag",
    "price": 850,
    "producer": "Rehmat",
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 176,
    "story": "The pakol is more than a cap in Chitral — it is an identity. Felted from local wool, shaped by hand and worn rolled, it has kept heads warm in these mountains for centuries.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "One size",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_09.jpg/960px-A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_09.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_02.jpg/960px-A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Pakol_cap.png"
    ]
  },
  {
    "added": "2026-07-18",
    "category": "wool",
    "desc": "Fine-wool pakol with a softer, denser felt.",
    "emoji": "🧢",
    "id": "w02",
    "longDesc": "A step up from the everyday pakol — made with finer wool, felted denser and finished smoother. Holds its roll beautifully and lasts for years.",
    "maker": {
      "craft": "Pakol felting",
      "materials": "Fine sheep's wool",
      "name": "Sultan",
      "time": "3–4 days per cap",
      "village": "Upper Chitral"
    },
    "materials": "Fine sheep's wool",
    "method": "Hand-felted, dense finish",
    "name": "Premium Wool Pakol",
    "oldPrice": 1700,
    "packaging": "Cloth bag",
    "price": 1450,
    "producer": "Sultan",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 92,
    "story": "Upper Chitral's felt-makers are known for the density of their work. This premium pakol is felted longer and finished by hand for a cap that keeps its shape season after season.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "One size",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_05.jpg/960px-A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_05.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_12.jpg/960px-A_young_man_with_a_pacole_hat_Iran_Canon_Photography_Mostafa_Meraji_12.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/A_young_man_wearing_Afghan_clothing_01.jpg/960px-A_young_man_wearing_Afghan_clothing_01.jpg"
    ]
  },
  {
    "added": "2026-07-08",
    "category": "wool",
    "desc": "Warm hand-loomed shawl in natural wool tones.",
    "emoji": "🧣",
    "featured": true,
    "id": "w03",
    "longDesc": "Woven on a wooden loom from local wool, this shawl is thick, warm and softens with wear. Natural wool tones with a traditional woven border.",
    "maker": {
      "craft": "Hand-loom weaving",
      "materials": "Local sheep's wool",
      "name": "Bibi Zara",
      "time": "4–5 days per shawl",
      "village": "Upper Chitral"
    },
    "materials": "Sheep's wool",
    "method": "Hand-loomed",
    "name": "Hand-Woven Chitrali Shawl",
    "packaging": "Folded in cloth wrap",
    "price": 3200,
    "producer": "Bibi Zara",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 134,
    "story": "In Upper Chitral, the loom still stands in many homes. Weaving a shawl takes days of steady work — warping, weaving and finishing — and each one carries its weaver's rhythm.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "2 metres",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Hand_Woven_Shawl.jpg/960px-Hand_Woven_Shawl.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shawl_%28AM_1934.274-1%29.jpg/960px-Shawl_%28AM_1934.274-1%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Shawl_%28AM_9381-1%29.jpg/960px-Shawl_%28AM_9381-1%29.jpg"
    ]
  },
  {
    "added": "2026-08-05",
    "category": "wool",
    "desc": "Traditional hand-woven woollen cloth, sold by the metre.",
    "emoji": "🧵",
    "id": "w04",
    "longDesc": "Patti — also called shu — is the traditional hand-woven woollen cloth of the northern valleys, used for coats, waistcoats and winter wear. Sold by the metre off the loom.",
    "maker": {
      "craft": "Hand-loom weaving",
      "materials": "Local sheep's wool",
      "name": "Bibi Zara",
      "time": "2–3 days per metre",
      "village": "Upper Chitral"
    },
    "materials": "Sheep's wool",
    "method": "Hand-loomed",
    "name": "Chitrali Patti (Shu) — per metre",
    "packaging": "Rolled in cloth",
    "price": 1800,
    "producer": "Bibi Zara",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 45,
    "story": "Before tailors and shops, every household wove its own patti for winter clothing. The cloth is dense, wind-resistant and made to be handed down.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "Per metre",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tweed_fabric.jpg/960px-Tweed_fabric.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Donegal_Tweed.JPG/960px-Donegal_Tweed.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kullvi_Pattu_Weaving_in_Kullu_district%2C1.jpg/960px-Kullvi_Pattu_Weaving_in_Kullu_district%2C1.jpg"
    ]
  },
  {
    "added": "2026-07-25",
    "category": "wool",
    "desc": "Classic Chitrali-style waistcoat in woven wool.",
    "emoji": "🦺",
    "id": "w05",
    "longDesc": "A tailored waistcoat cut from dense Chitrali wool cloth, with traditional styling. Worn over shalwar kameez in winter — the classic Chitrali look.",
    "materials": "Wool patti cloth, lining",
    "method": "Tailored from hand-woven cloth",
    "name": "Woolen Waistcoat",
    "packaging": "Garment bag",
    "price": 4500,
    "producer": "Karim",
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 71,
    "story": "The waistcoat over shalwar kameez is Chitral's signature winter dress. Tailors in Lower Chitral cut them from hand-woven patti, made to last a decade of winters.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "Sizes M–XL",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Waistcoat_in_pakistan.jpg/960px-Waistcoat_in_pakistan.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Waistcoat.jpg/960px-Waistcoat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Waistcoat_MET_DT1728.jpg/960px-Waistcoat_MET_DT1728.jpg"
    ]
  },
  {
    "added": "2026-07-12",
    "bestseller": true,
    "category": "wool",
    "desc": "Thick hand-knitted socks for cold floors and colder nights.",
    "emoji": "🧦",
    "id": "w06",
    "longDesc": "Three pairs of thick wool socks, knitted by hand in Upper Chitral. Warm enough for unheated winter rooms and mountain nights.",
    "maker": {
      "craft": "Hand knitting",
      "materials": "Local sheep's wool",
      "name": "Maryam",
      "time": "1 day per pair",
      "village": "Upper Chitral"
    },
    "materials": "Sheep's wool",
    "method": "Hand-knitted",
    "name": "Hand-Knitted Wool Socks (3-pack)",
    "packaging": "Paper band, set of 3",
    "price": 600,
    "producer": "Maryam",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 158,
    "story": "Knitting fills the long winter evenings in Upper Chitral. Socks are the first thing girls learn to knit — and these are knitted the traditional way, dense and warm.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "Free size",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Hand_knitted_socks.jpg/960px-Hand_knitted_socks.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hand-knitted_Himachali_socks%2C4.jpg/960px-Hand-knitted_Himachali_socks%2C4.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Hand_knitted_sock.jpg"
    ]
  },
  {
    "added": "2026-09-10",
    "category": "wool",
    "desc": "Soft hand-woven scarf in earthy stripes.",
    "emoji": "🧣",
    "id": "w07",
    "isNew": true,
    "longDesc": "A long, soft scarf woven from Chitrali wool with simple earthy stripes. Warm without bulk — for daily winter wear.",
    "materials": "Sheep's wool",
    "method": "Hand-loomed",
    "name": "Woolen Scarf",
    "packaging": "Folded in cloth wrap",
    "price": 1100,
    "producer": "Bibi Zara",
    "ptype": "Handmade",
    "rating": 4.6,
    "reviews": 49,
    "story": "Scarves are woven on the same looms as shawls, often from leftover warp threads — nothing wasted, everything warm.",
    "tags": {
      "clothing": true,
      "handmade": true
    },
    "valley": "upper-chitral",
    "village": "Upper Chitral",
    "weight": "1.8 metres",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Purple_heather_pure_wool_infinity_scarf.jpg/960px-Purple_heather_pure_wool_infinity_scarf.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Alpaca_wool_scarf.JPG/960px-Alpaca_wool_scarf.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tiias_scarf_%285281952443%29.jpg/960px-Tiias_scarf_%285281952443%29.jpg"
    ]
  },
  {
    "added": "2026-07-22",
    "category": "handicrafts",
    "desc": "Sturdy shoulder bag with traditional Chitrali embroidery.",
    "emoji": "👜",
    "featured": true,
    "id": "c01",
    "longDesc": "A roomy everyday shoulder bag in strong cotton canvas, front panel embroidered by hand with traditional Chitrali motifs in bright thread.",
    "maker": {
      "craft": "Embroidery",
      "materials": "Cotton canvas, silk thread",
      "name": "Nasreen",
      "time": "3–4 days per bag",
      "village": "Lower Chitral"
    },
    "materials": "Cotton canvas, embroidery thread",
    "method": "Hand-embroidered panel, machine-stitched bag",
    "name": "Embroidered Shoulder Bag",
    "packaging": "Cloth bag",
    "price": 1650,
    "producer": "Nasreen",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 86,
    "story": "Chitrali embroidery turns everyday things beautiful. These motifs — mountains, flowers, geometric borders — have been stitched onto clothing and household cloth for generations.",
    "tags": {
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "30 × 25 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Traditional_turkmen_embroidered_bag.jpg/960px-Traditional_turkmen_embroidered_bag.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bag_MET_57916.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/America%2C_first_half_19th_Century_-_Embroidered_Bag_-_1922.47_-_Cleveland_Museum_of_Art.jpg/960px-America%2C_first_half_19th_Century_-_Embroidered_Bag_-_1922.47_-_Cleveland_Museum_of_Art.jpg"
    ]
  },
  {
    "added": "2026-08-08",
    "category": "handicrafts",
    "desc": "Small embroidered clutch for evenings and events.",
    "emoji": "👛",
    "id": "c02",
    "longDesc": "A neat hand-embroidered clutch with a zip close and inner pocket — sized for a phone, cash and keys. Each piece has a slightly different motif.",
    "maker": {
      "craft": "Embroidery",
      "materials": "Cotton, silk thread",
      "name": "Nasreen",
      "time": "1–2 days per purse",
      "village": "Lower Chitral"
    },
    "materials": "Cotton, embroidery thread, zip",
    "method": "Hand-embroidered, hand-finished",
    "name": "Handmade Clutch Purse",
    "oldPrice": 1150,
    "packaging": "Cloth pouch",
    "price": 950,
    "producer": "Nasreen",
    "ptype": "Handmade",
    "rating": 4.6,
    "reviews": 63,
    "story": "Small pieces like this are often stitched in the afternoons, when the day's bigger work is done. No two come out exactly alike.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "20 × 12 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Purse_%28ST391%29_-_Costume_Accessory-Purse_-_MoMu_Antwerp.jpg/960px-Purse_%28ST391%29_-_Costume_Accessory-Purse_-_MoMu_Antwerp.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cream_Colored_Embroidered_Purse_-_DPLA_-_c81452b0339f37089311412e455454a0_%28page_11%29.jpg/960px-Cream_Colored_Embroidered_Purse_-_DPLA_-_c81452b0339f37089311412e455454a0_%28page_11%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Embroidered_purse%2C_France%2C_mid_14th_century_AD_-_Cinquantenaire_Museum_-_Brussels%2C_Belgium_-_DSC08798.jpg/960px-Embroidered_purse%2C_France%2C_mid_14th_century_AD_-_Cinquantenaire_Museum_-_Brussels%2C_Belgium_-_DSC08798.jpg"
    ]
  },
  {
    "added": "2026-07-06",
    "bestseller": true,
    "category": "handicrafts",
    "desc": "Hand-carved walnut box for jewellery and keepsakes.",
    "emoji": "🗝️",
    "id": "c03",
    "longDesc": "Carved from seasoned Chitrali walnut wood and polished by hand, with a fitted lid and soft inner lining. For jewellery, letters and small treasures.",
    "maker": {
      "craft": "Woodcarving",
      "materials": "Seasoned walnut wood",
      "name": "Sher Wali",
      "time": "4–5 days per box",
      "village": "Lower Chitral"
    },
    "materials": "Walnut wood, cloth lining",
    "method": "Hand-carved and polished",
    "name": "Walnut Wood Keepsake Box",
    "packaging": "Padded box",
    "price": 2200,
    "producer": "Sher Wali",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 118,
    "story": "Walnut wood is Chitral's fine timber — dark, hard and beautifully grained. Carvers in Lower Chitral shape it into boxes meant to be kept for a lifetime.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "18 × 12 × 8 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carved_wooden_box%2C_Kinh_ethnic_group%2C_Quang_Binh_province_-_Vietnam_National_Museum_of_Fine_Arts_-_Hanoi%2C_Vietnam_-_DSC05212.JPG/960px-Carved_wooden_box%2C_Kinh_ethnic_group%2C_Quang_Binh_province_-_Vietnam_National_Museum_of_Fine_Arts_-_Hanoi%2C_Vietnam_-_DSC05212.JPG",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/WLA_vanda_Box_Carved_lacquer_on_wood_Yongle_reign_period.jpg/960px-WLA_vanda_Box_Carved_lacquer_on_wood_Yongle_reign_period.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Carved_Wooden_Bowl_With_Lid_%2830646940752%29.jpg"
    ]
  },
  {
    "added": "2026-09-03",
    "category": "handicrafts",
    "desc": "Four cooking spoons carved from fruit wood.",
    "emoji": "🥄",
    "id": "c04",
    "isNew": true,
    "longDesc": "A set of four sturdy cooking spoons, each carved by hand from local fruit wood and finished with food-safe oil. Kind to pots, built to last.",
    "maker": {
      "craft": "Woodcarving",
      "materials": "Fruit wood",
      "name": "Sher Wali",
      "time": "1 day per set",
      "village": "Lower Chitral"
    },
    "materials": "Fruit wood, food-safe oil",
    "method": "Hand-carved, oil-finished",
    "name": "Hand-Carved Wooden Spoon Set",
    "packaging": "Cloth roll",
    "price": 780,
    "producer": "Sher Wali",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 44,
    "story": "Wooden spoons are still the daily tools of Chitrali kitchens. Carvers shape them to sit comfortably in the hand — no two are ever identical.",
    "tags": {
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "Set of 4",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hand_Carved_Wooden_Spoon.jpg/960px-Hand_Carved_Wooden_Spoon.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Carved_Wooden_Basting_Spoon.jpg/960px-Carved_Wooden_Basting_Spoon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Carved_burled_wood_spoon.jpg/960px-Carved_burled_wood_spoon.jpg"
    ]
  },
  {
    "added": "2026-08-18",
    "category": "handicrafts",
    "desc": "Small embroidered keychain — a little piece of Chitral.",
    "emoji": "🔑",
    "id": "c05",
    "longDesc": "A sturdy little keychain with a hand-embroidered motif and metal ring. A small, affordable piece of Chitrali craft.",
    "materials": "Cotton, embroidery thread, metal ring",
    "method": "Hand-embroidered",
    "name": "Handmade Keychain",
    "packaging": "Paper tag",
    "price": 250,
    "producer": "Nasreen",
    "ptype": "Handmade",
    "rating": 4.5,
    "reviews": 91,
    "story": "The smallest pieces carry the same stitches as the largest. Keychains like these are often a young embroiderer's first finished work.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "8 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Indigenous_%28Ojibwe%29_beaded_keychains.jpg/960px-Indigenous_%28Ojibwe%29_beaded_keychains.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sandal_keychain.jpg/960px-Sandal_keychain.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Key_ring.jpg/960px-Key_ring.jpg"
    ]
  },
  {
    "added": "2026-08-12",
    "category": "kalasha",
    "desc": "Pouch with embroidery inspired by Kalasha textile patterns.",
    "emoji": "👝",
    "id": "k01",
    "longDesc": "A drawstring pouch embroidered with patterns inspired by the colourful textiles of the Kalasha valleys. Made by artisans in Lower Chitral.",
    "maker": {
      "craft": "Embroidery",
      "materials": "Cotton, wool thread",
      "name": "Gulnaz",
      "time": "2–3 days per pouch",
      "village": "Lower Chitral"
    },
    "materials": "Cotton, embroidery thread",
    "method": "Hand-embroidered",
    "name": "Kalasha-Inspired Embroidered Pouch",
    "packaging": "Cloth pouch",
    "price": 1250,
    "producer": "Gulnaz",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 58,
    "story": "The Kalasha valleys are known for vibrant dress and needlework. This pouch takes inspiration from those textile traditions, made respectfully by local artisans.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "18 × 14 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Embroidery_on_a_shawl_from_Punjab_01.jpg/960px-Embroidery_on_a_shawl_from_Punjab_01.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Embroidery_on_a_shawl_from_Punjab_04.jpg/960px-Embroidery_on_a_shawl_from_Punjab_04.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Close-up_of_contemporary_Phulkari_embroidery_technique_.jpg/960px-Close-up_of_contemporary_Phulkari_embroidery_technique_.jpg"
    ]
  },
  {
    "added": "2026-08-28",
    "category": "kalasha",
    "desc": "Hand-strung beaded necklace in Kalasha style.",
    "emoji": "📿",
    "id": "k02",
    "longDesc": "A bold, colourful necklace hand-strung in the style of Kalasha beadwork — layered beads and traditional colour combinations.",
    "materials": "Glass and metal beads, cord",
    "method": "Hand-strung",
    "name": "Kalasha-Style Beaded Necklace",
    "oldPrice": 2100,
    "packaging": "Gift box",
    "price": 1850,
    "producer": "Zar",
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 47,
    "story": "Beadwork is central to Kalasha adornment, with colours and patterns carrying local meaning. This piece is inspired by that tradition, strung by hand in Lower Chitral.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "45 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kalash_womens_headdress.jpg/960px-Kalash_womens_headdress.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/An_old_Kalash_woman_in_tradational_outfit.jpg/960px-An_old_Kalash_woman_in_tradational_outfit.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Woman_headdress_Kalash.jpg/960px-Woman_headdress_Kalash.jpg"
    ]
  },
  {
    "added": "2026-09-01",
    "category": "kalasha",
    "desc": "Woven wall piece celebrating Kalasha valley life.",
    "emoji": "🖼️",
    "featured": true,
    "id": "k03",
    "longDesc": "A woven and embroidered wall hanging depicting everyday valley life — mountains, fields and homes — in the bright palette of the Kalasha valleys.",
    "materials": "Wool and cotton, embroidery thread",
    "method": "Hand-woven with embroidered details",
    "name": "Kalasha Cultural Wall Hanging",
    "packaging": "Rolled in cloth",
    "price": 2400,
    "producer": "Gulnaz",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 36,
    "story": "This wall hanging celebrates the daily life of the Kalasha valleys rather than any ceremony: the mountains, the fields, the houses. Made to be hung with respect for the culture that inspired it.",
    "tags": {
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "60 × 40 cm",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kalash_women_traditional_clothing.jpg/960px-Kalash_women_traditional_clothing.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Woman_headdress_Kalash.jpg/960px-Woman_headdress_Kalash.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kalasha_women.jpg/960px-Kalasha_women.jpg"
    ]
  },
  {
    "added": "2026-07-28",
    "bestseller": true,
    "category": "giftboxes",
    "desc": "A first taste of Chitral: apricots, walnuts, honey and tea.",
    "emoji": "🎁",
    "id": "g01",
    "longDesc": "The perfect introduction — sun-dried apricots, walnut kernels, a jar of mountain honey and herbal tea, packed in a keepsake box.",
    "materials": "Apricots, walnuts, honey, herbal tea",
    "method": "Hand-packed",
    "name": "Chitral Starter Box",
    "packaging": "Keepsake gift box",
    "price": 2499,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 97,
    "story": "Put together for anyone who has never tasted Chitral. Each box is packed by hand with the flavours Chitralis themselves would choose.",
    "tags": {
      "food": true,
      "gift": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "1.2 kg box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ramadan_Blessings_Gift.jpg/960px-Ramadan_Blessings_Gift.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dryfruits.jpg/960px-Dryfruits.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dried_fruit_and_nuts_mix_for_kid_snacks_%2815093547798%29.jpg/960px-Dried_fruit_and_nuts_mix_for_kid_snacks_%2815093547798%29.jpg"
    ]
  },
  {
    "added": "2026-08-06",
    "category": "giftboxes",
    "desc": "Three honeys and comb in one gift box.",
    "emoji": "🍯",
    "id": "g02",
    "longDesc": "Wild honey, spring honey and a cut of natural honeycomb with a wooden dipper — a box for the honey lover.",
    "materials": "Wild honey, spring honey, honeycomb, dipper",
    "method": "Hand-packed",
    "name": "Mountain Honey Box",
    "packaging": "Keepsake gift box",
    "price": 2999,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 68,
    "story": "Chitral's honey changes with the season and the valley. This box gathers three of them side by side so you can taste the difference.",
    "tags": {
      "food": true,
      "gift": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "900 g box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Honey_box.jpg/960px-Honey_box.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Three_French_monofloral_honey_jars.jpg/960px-Three_French_monofloral_honey_jars.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dipper_stick_and_honey_in_a_jar.jpg/960px-Dipper_stick_and_honey_in_a_jar.jpg"
    ]
  },
  {
    "added": "2026-07-15",
    "category": "giftboxes",
    "desc": "Six Chitrali dry fruits in a festive box.",
    "emoji": "🎁",
    "featured": true,
    "id": "g03",
    "longDesc": "Apricots, walnut kernels, almonds, mulberries, figs and chilgoza, arranged in a festive compartment box. The classic Chitrali gift.",
    "materials": "6 varieties of dry fruits",
    "method": "Hand-packed",
    "name": "Dry Fruit Box",
    "oldPrice": 3900,
    "packaging": "Compartment gift box",
    "price": 3499,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 142,
    "story": "Dry fruit boxes are the traditional gift of the region — carried to weddings, festivals and family visits. This is that tradition, ready to send.",
    "tags": {
      "food": true,
      "gift": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "1.5 kg box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ramadan_Blessings_Gift.jpg/960px-Ramadan_Blessings_Gift.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dryfruits.jpg/960px-Dryfruits.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dried_fruit_and_nuts_mix_for_kid_snacks_%2815093547798%29.jpg/960px-Dried_fruit_and_nuts_mix_for_kid_snacks_%2815093547798%29.jpg"
    ]
  },
  {
    "added": "2026-09-06",
    "category": "giftboxes",
    "desc": "Kilao, honey and dried fruit — Chitral on a plate.",
    "emoji": "🍪",
    "id": "g04",
    "isNew": true,
    "longDesc": "Walnut kilao, a honey jar and dried apricots and mulberries — the flavours of a Chitrali tea table, boxed.",
    "materials": "Walnut kilao, honey, dried fruits",
    "method": "Hand-packed",
    "name": "Taste of Chitral Box",
    "packaging": "Keepsake gift box",
    "price": 2199,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.7,
    "reviews": 54,
    "story": "If you were served tea in a Chitrali home, this is what would appear beside it. A box of everyday hospitality.",
    "tags": {
      "food": true,
      "gift": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "900 g box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gift_box.jpg/960px-Gift_box.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Gift_box_I.jpg/960px-Gift_box_I.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gift_box_II.jpg/960px-Gift_box_II.jpg"
    ]
  },
  {
    "added": "2026-08-30",
    "category": "giftboxes",
    "desc": "Wool socks, kilao, honey and tea for the cold months.",
    "emoji": "🧦",
    "id": "g05",
    "longDesc": "Hand-knitted wool socks, walnut kilao, mountain honey and herbal tea — everything for a warm Chitrali winter evening.",
    "materials": "Wool socks, kilao, honey, herbal tea",
    "method": "Hand-packed",
    "name": "Chitral Winter Box",
    "packaging": "Keepsake gift box",
    "price": 3999,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 43,
    "story": "Winter in Chitral is long and deep. This box holds what gets families through it: warmth for the feet, sweetness for the tea, and honey for the throat.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "1.8 kg box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Exotic_Fruit_Gift_Basket_%284461109309%29.jpg/960px-Exotic_Fruit_Gift_Basket_%284461109309%29.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gift_baskets_on_a_table_%2812001051855%29.jpg/960px-Gift_baskets_on_a_table_%2812001051855%29.jpg"
    ]
  },
  {
    "added": "2026-08-20",
    "category": "giftboxes",
    "desc": "Our finest: chilgoza, premium honey, pakol and crafts.",
    "emoji": "🎁",
    "featured": true,
    "id": "g06",
    "longDesc": "The grand box — chilgoza, premium wild honey, a traditional pakol, an embroidered pouch and dried apricots. For weddings and honoured guests.",
    "materials": "Chilgoza, premium honey, pakol, embroidered pouch, apricots",
    "method": "Hand-packed",
    "name": "Premium Chitral Gift Box",
    "packaging": "Premium keepsake box",
    "price": 5999,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 5.0,
    "reviews": 28,
    "story": "Reserved for the most important occasions, this box gathers the finest things Chitral makes — the same gifts a family would assemble with pride.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "2.2 kg box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gift_box.jpg/960px-Gift_box.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Gift_box_I.jpg/960px-Gift_box_I.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gift_box_II.jpg/960px-Gift_box_II.jpg"
    ]
  },
  {
    "added": "2026-09-02",
    "category": "giftboxes",
    "desc": "Elegant bulk-ready boxes for offices and events.",
    "emoji": "💼",
    "id": "g07",
    "longDesc": "A refined selection — premium honey, dry fruit box, walnut keepsake box and herbal tea — in understated premium packaging. Bulk orders welcome on WhatsApp.",
    "materials": "Premium honey, dry fruits, keepsake box, herbal tea",
    "method": "Hand-packed",
    "name": "Corporate Gift Box",
    "packaging": "Premium corporate box",
    "price": 7499,
    "producer": "Chitral Bazaar packing",
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 19,
    "story": "Made for offices and events that want to give something with a story. Each box carries a card about where in Chitral its contents come from.",
    "tags": {
      "gift": true,
      "handmade": true
    },
    "valley": "lower-chitral",
    "village": "Lower Chitral",
    "weight": "2.5 kg box",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Precious_dates_gift.jpg/960px-Precious_dates_gift.jpg",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/White-Box-of-Chocolates.jpg/960px-White-Box-of-Chocolates.jpg"
    ]
  },
  {
    "added": "2026-09-01",
    "category": "giftcards",
    "desc": "Rs 1,000 gift card — the code is sent via WhatsApp or email after purchase, redeemable on any product.",
    "emoji": "🎁",
    "id": "gc1",
    "isNew": true,
    "longDesc": "Give the gift of choice. After purchase we send the gift code via WhatsApp or email; it can be used on any product in the store.",
    "name": "Gift Card — Rs 1,000",
    "packaging": "Digital code via WhatsApp/email",
    "price": 1000,
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 33,
    "story": "For when you want to give Chitral but let them choose. The code works across the whole store.",
    "tags": {
      "gift": true
    },
    "valley": "lower-chitral",
    "weight": "Digital code",
    "image": "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8zNV9waG90b19vZl93aGl0ZV9naWZ0X2JveF93aXRoX3JlZF9yaWJib25fX2lzb19lOWRkZmNlOC05ZDljLTQ0ZjUtODc3Mi05NzhhODliMDdmNGJfMS5qcGc.jpg",
    "images": []
  },
  {
    "added": "2026-09-01",
    "category": "giftcards",
    "desc": "Rs 2,500 gift card — the code is sent via WhatsApp or email after purchase, redeemable on any product.",
    "emoji": "🎁",
    "id": "gc2",
    "longDesc": "Give the gift of choice. After purchase we send the gift code via WhatsApp or email; it can be used on any product in the store.",
    "name": "Gift Card — Rs 2,500",
    "packaging": "Digital code via WhatsApp/email",
    "price": 2500,
    "ptype": "Handmade",
    "rating": 4.8,
    "reviews": 21,
    "story": "For when you want to give Chitral but let them choose. The code works across the whole store.",
    "tags": {
      "gift": true
    },
    "valley": "lower-chitral",
    "weight": "Digital code",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Giving_a_gift.jpg",
    "images": []
  },
  {
    "added": "2026-09-01",
    "category": "giftcards",
    "desc": "Rs 5,000 gift card — the code is sent via WhatsApp or email after purchase, redeemable on any product.",
    "emoji": "🎀",
    "id": "gc3",
    "longDesc": "Give the gift of choice. After purchase we send the gift code via WhatsApp or email; it can be used on any product in the store.",
    "name": "Gift Card — Rs 5,000",
    "packaging": "Digital code via WhatsApp/email",
    "price": 5000,
    "ptype": "Handmade",
    "rating": 4.9,
    "reviews": 14,
    "tags": {
      "gift": true
    },
    "valley": "lower-chitral",
    "weight": "Digital code",
    "image": "https://images.pexels.com/photos/10278973/pexels-photo-10278973.jpeg?auto=compress&w=1260&h=750&dpr=1",
    "images": []
  },
  {
    "added": "2026-09-01",
    "category": "giftcards",
    "desc": "Rs 10,000 gift card — the code is sent via WhatsApp or email after purchase, redeemable on any product.",
    "emoji": "🎀",
    "id": "gc4",
    "longDesc": "Give the gift of choice. After purchase we send the gift code via WhatsApp or email; it can be used on any product in the store.",
    "name": "Gift Card — Rs 10,000",
    "packaging": "Digital code via WhatsApp/email",
    "price": 10000,
    "ptype": "Handmade",
    "rating": 5.0,
    "reviews": 9,
    "tags": {
      "gift": true
    },
    "valley": "lower-chitral",
    "weight": "Digital code",
    "image": "https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg?auto=compress&cs=tinysrgb&w=600",
    "images": []
  }
];

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
      '<span class="card-origin">📍 ' + esc(v.name) + (p.weight ? ' <span class="card-weight">' + esc(p.weight) + "</span>" : "") + "</span>" +
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
          "<div>📍 <strong>Origin:</strong> " + esc(v.name) + ", Chitral, Pakistan</div>" +
          (p.producer ? "<div>👨‍🌾 <strong>Producer:</strong> " + esc(p.producer) + "</div>" : "") +
          "<div>🏔️ <strong>Made in:</strong> Chitral, Pakistan</div>" +
          (p.ptype ? "<div>📦 <strong>Product type:</strong> " + esc(p.ptype) + "</div>" : "") +
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
