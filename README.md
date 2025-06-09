# Kbordados Website (Static Site)

This project is now a **simple static HTML/CSS/JS website** for Kbordados, migrated from a React SPA to make editing and deployment easier.

## 📁 Structure

```
/                  # Project root
├── index.html     # Main entry point (all content and layout)
├── static-site/   # Contains images, CSS, and JS assets
│   ├── images/    # All images and assets (logos, backgrounds, service images, etc.)
│   ├── css/       # (Optional) For custom CSS if needed
│   └── js/
│       └── script.js  # Handles client carousel and contact form interactivity
```

## 🧩 Features
- **Tailwind CSS** via CDN for easy styling and editing.
- **All content and layout** in a single `index.html` file at the root.
- **Client logos carousel** and **contact form** handled with vanilla JavaScript (no frameworks).
- **Contact form** uses [Formspree](https://formspree.io/) for submissions.
- **No build process** required—just static files.

## 🚀 How to Use

1. **Edit Content:**
   - Open `index.html` in your editor to update text, images, or layout.
   - To change images, replace files in `static-site/images/` and update the `src` in the HTML if needed.
   - For custom interactivity, edit `static-site/js/script.js`.

2. **Styling:**
   - Tailwind CSS is included via CDN in the `<head>`. You can use Tailwind utility classes directly in your HTML.
   - For custom CSS, add files to `static-site/css/` and link them in `index.html`.

3. **Deploy:**
   - Upload the entire repository (or its contents) to any static hosting provider (e.g., GitHub Pages, Netlify, Vercel, etc.).
   - `index.html` at the root is the entry point.
   - For **GitHub Pages**, set the source to the `main` branch and the `/ (root)` folder in your repo settings.

4. **Contact Form:**
   - The contact form submits to Formspree. To use your own Formspree endpoint, update the `action` in the form and the endpoint in `static-site/js/script.js`.

## 🧹 What Was Removed
- All React, Node.js, and build dependencies.
- No more `src/`, `node_modules/`, or `package.json`.
- No build or deployment scripts—just static files.

---

**Enjoy your fast, simple, and easily editable static website!**
