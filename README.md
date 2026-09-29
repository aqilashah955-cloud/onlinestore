# Chitral Bazaar — Online Store

A standalone multi-category online store website for a Chitral-based business.
Pure static site: no build step, no external dependencies. Product images are
tasteful emoji placeholders so the site works fully offline.

**Features**
- Live product search + category filter pills (6 categories)
- Product grid with PKR prices and Add to Cart
- Cart drawer with quantities, remove, totals — saved in browser localStorage
- Checkout form (name, phone, address, payment method, notes) that validates
  and redirects the order to WhatsApp with a pre-filled order summary
- Delivery info strip and WhatsApp contact footer

**Run locally**
- Just open `index.html` in any browser, or serve the folder:
  `python3 -m http.server` then visit `http://localhost:8000`

**Customize**
- Store name, WhatsApp number, currency: constants at the top of `app.js`
- Products: edit the `PRODUCTS` array at the top of `app.js`
  (instructions are in the comments there)

**Put it on GitHub Pages**
1. Create a repo on GitHub and push these files to the `main` branch.
2. In the repo: Settings → Pages → Deploy from branch → `main` → Save.
3. GitHub will give you a public link like
   `https://<username>.github.io/<repo>/`.
