# Dorkify

A modern, interactive Google Dork query builder for OSINT, recon, and research.

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deploy to Netlify (Recommended)

1. **Build the app:**
   ```bash
   npm run build
   ```
   This creates a `build/` folder.

2. **Deploy:**
   - Go to [https://app.netlify.com/](https://app.netlify.com/)
   - Click **"Add new site" → "Import an existing project"**
   - Connect your GitHub repo (or drag & drop the `build/` folder if deploying manually)
   - Set the build command to `npm run build` and the publish directory to `build`
   - Click **Deploy Site**

---

## 🌐 Deploy to Vercel (Alternative)

1. Go to [https://vercel.com/](https://vercel.com/)
2. Import your GitHub repo
3. Vercel auto-detects React and builds your app

---

## 🆓 Other Free Hosting Options

- **GitHub Pages:**  
  Use [gh-pages](https://github.com/tschaub/gh-pages) to deploy the `build/` folder.
- **Firebase Hosting:**  
  [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- **Surge:**  
  ```bash
  npm install -g surge
  surge ./build
  ```

---

## 📦 Project Structure

```
public/
  index.html
src/
  App.tsx
  index.tsx
  components/
    Header.tsx
    CategoryTiles.tsx
    DorkBuilderForm.tsx
    LivePreviewBox.tsx
    ActionButtons.tsx
    RecentDorksDisplay.tsx
    ...css files...
```

---

## 📝 License

MIT
