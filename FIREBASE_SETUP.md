# Seller Center — one-time Firebase setup

Do these steps once on your computer. It takes about 10 minutes.
You only need a Google account.

## 1. Create the Firebase project
1. Go to **console.firebase.google.com** and sign in with your Google account.
2. Click **Add project**.
3. Project name: type `Chitral Bazaar` → click **Continue**.
4. Google Analytics: you can leave it on or turn it off → click **Create project** → **Continue**.

## 2. Turn on Email/Password login
1. In the left menu click **Build → Authentication**.
2. Click **Get started**.
3. Click the **Sign-in method** tab → click **Email/Password**.
4. Turn **Enable** on → click **Save**.

## 3. Create the database
1. In the left menu click **Build → Firestore Database**.
2. Click **Create database**.
3. Choose **Start in production mode** → **Next**.
4. Pick a location (choose the one nearest Pakistan, e.g. `asia-south1`) → **Enable**.

## 4. Add the database rules
1. In Firestore Database, click the **Rules** tab.
2. Delete everything in the box.
3. Open the file **`firestore.rules`** from this repo, copy all of it, paste it into the box.
4. Click **Publish**.

## 5. Turn on image storage
1. In the left menu click **Build → Storage**.
2. Click **Get started** → **Start in production mode** → **Next** → **Done**.
3. Click the **Rules** tab.
4. Delete everything in the box.
5. Open the file **`storage.rules`** from this repo, copy all of it, paste it into the box.
6. Click **Publish**.

## 6. Connect the website
1. Click **Project Overview** (top of the left menu) → **Project settings** (⚙️ icon) → **General**.
2. Scroll to **Your apps** → click the **Web** icon (`</>`).
3. App nickname: type `Chitral Bazaar Web` → click **Register app**.
4. You will see a block called `firebaseConfig` with values like `apiKey: "AIza..."`. **Copy each value.**
5. Open the file **`firebase-config.js`** in this repo and replace every `"PASTE_ME"` with the value you copied (keep the quotes).
6. Push the updated `firebase-config.js` to GitHub (or tell your developer it's ready).

Done — open `seller.html` on your site and sign up. Your email (`nizarsyed74@gmail.com`) automatically gets the Approvals panel.

**How sellers get paid:** orders arrive on your WhatsApp and each line shows the seller's shop name. The store keeps 10% commission; the seller keeps 90% — you settle it with each seller directly.
