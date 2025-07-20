# Dorkify

A modern, interactive Google Dork query builder for OSINT, recon, and research.

---

## 🌐 Live Demo

Try it now: [https://dorkify-sigma.vercel.app](https://dorkify-sigma.vercel.app)

---

## 📖 Overview

**Dorkify** helps you build advanced Google search queries (dorks) for open-source intelligence (OSINT), bug bounty, and research.  
No need to remember complex syntax—just fill in the fields, add keywords, and copy or save your custom dorks!

---

## ✨ Features

- **Easy Google Dork Builder:** Add multiple keywords for title/text, file types, and more.
- **AND/OR Logic:** Add as many keywords as you want—Dorkify builds the correct query.
- **Site Restriction:** Limit searches to specific domains.
- **Dark/Light Mode:** Switch themes for comfortable viewing.
- **History:** Save and download your search history (only saved dorks are kept).
- **Live Preview:** See your dork as you build it.

---

## 🚀 Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KshitijPathak222/Dorkify.git
   cd Dorkify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

- React
- TypeScript
- CSS Modules

---

## 🖥️ Usage

1. **Choose a category** (e.g., File Types, Page Title, etc.).
2. **Add keywords** for title or text fields (use "Add Another" for more).
3. **Optionally specify a site** (e.g., example.com).
4. **Copy or save** your dork query.
5. **Saved dorks** appear in your history (only when you click "Save").

---

## 📦 Project Structure

```
public/
  index.html
  logo.svg
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

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## 📝 CopyRight

Copyright (c) 2025 Kshitij Pathak

This software is provided free of charge for personal and educational use only.
Commercial use, resale is strictly prohibited.
