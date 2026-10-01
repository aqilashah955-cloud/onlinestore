# Chitral Bazaar — Authentic Local Marketplace

An online marketplace for genuine Chitrali products: dry fruits & foods,
mountain honey, wool clothing, handicrafts, Kalasha heritage crafts and
ready-made gift boxes — each product carrying its region of origin.
Pure static site: no build step, no external dependencies. Product photos
are real Wikimedia Commons images (sample catalogue).

**Features**
- Homepage: Shop Local, From the Mountains to Your Home, Made by Chitral,
  Shop by Region, Chitral Gift Boxes, Meet the Makers sections
- Full catalogue with live search, category pills, region filter, price
  filter, chips (Handmade / Food / Clothing / Gifts / New / Best sellers /
  Wishlist) and 5 sort orders
- Product cards: photo, 📍 origin region, weight, rating, PKR price,
  discount badges, Add to Cart, Book Now (email), wishlist heart,
  Quick View modal
- Quick View: photo gallery, origin/producer block, "The Story Behind This
  Product", "Meet the Maker" (demo names), materials/method/packaging specs
- Cart drawer with quantities, remove, totals — saved in browser localStorage
- Coupons: CHITRAL10 (10%), FESTIVE15 (15%), WELCOME20 (20%)
- Checkout form that validates and redirects the order to WhatsApp
  (+92 345 6121725) with a pre-filled summary, plus email-order option
  (nizarsyed74@gmail.com)
- Delivery info strip and WhatsApp contact footer

**Run locally**
- Just open `index.html` in any browser, or serve the folder:
  `python3 -m http.server` then visit `http://localhost:8000`

**Customize**
- Store name, WhatsApp number, order email, currency, coupons: constants at
  the top of `app.js`
- Products: edit the `PRODUCTS` array at the top of `app.js` — every field
  is documented in the comments there (sample/demo data)
- Regions: edit the `VALLEYS` array; maker profiles: `MAKERS`
- Palette: CSS variables at the top of `styles.css` (mountain-warm theme)

**Put it on GitHub Pages**
1. Create a repo on GitHub and push these files to the `main` branch.
2. In the repo: Settings → Pages → Deploy from branch → `main` → Save.
3. GitHub will give you a public link like
   `https://<username>.github.io/<repo>/`.
