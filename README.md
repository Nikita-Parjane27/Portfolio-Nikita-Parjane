# Nikita Parjane — 3D Full-Stack Developer Portfolio

Modern, lightweight 3D developer portfolio built with **React**, **Three.js**, **Tailwind CSS**, and **Vite**.

## Project Structure

```text
Portfolio-Nikita-Parjane/
├── public/
│   ├── img/                 # Place your photo.jpg here
│   └── projects/            # Place real project screenshots here (.png / .webp)
├── src/
│   ├── components/
│   │   └── Hero3DCanvas.jsx # Interactive Three.js WebGL hero scene
│   ├── App.jsx              # Main portfolio layout, case study modals & filters
│   ├── index.css            # Tailwind directives & custom grid background
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Quick Start (Local Setup)

1. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```
2. Copy your existing `img/photo.jpg` into `public/img/photo.jpg`.
3. (Optional) Add real screenshots of your projects inside `public/projects/` and update the `screenshot` field in `src/App.jsx`.
4. Start the local dev server:
   ```bash
   pnpm dev
   ```

## Push to GitHub & Auto-Deploy on Vercel

Since your repository (`Nikita-Parjane27/Portfolio-Nikita-Parjane`) is already connected to `portfolio-nikita-parjane.vercel.app`, pushing to `main` will automatically build and deploy the new Vite + React + Three.js site:

```bash
git add .
git commit -m "Upgrade portfolio to interactive 3D React + Three.js architecture"
git push origin main
```
