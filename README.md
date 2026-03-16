# Manisha Shrestha — Portfolio (React + Vite)

Personal portfolio website built with React 18 and Vite 5.

## 🗂 Project Structure

```
manisha-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx          ← entry point
    ├── App.jsx           ← root component
    ├── index.css         ← global styles & CSS variables
    ├── assets/
    │   └── profile.jpg   ← profile photo
    ├── hooks/
    │   └── useReveal.js  ← scroll reveal hook
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx   / .css
        ├── About.jsx  / .css
        ├── Skills.jsx / .css
        ├── Projects.jsx / .css
        ├── Contact.jsx  / .css
        └── Footer.jsx   / .css
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗 Build for Production

```bash
npm run build
# Output goes to /dist folder
```

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages helper
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Then add to vite.config.js:
# base: '/your-repo-name/'

npm run deploy
```

## 📬 Contact Form

Uses **Formspree** (ID: `xnjgbzlk`) — emails go to `manishashresthaaa25@gmail.com`.

On the **first submission**, Formspree sends a confirmation email — click the link to activate it.

To change the Formspree ID, edit `src/components/Contact.jsx`:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', { ... })
```

## 🎨 Customising

| What              | Where                          |
|-------------------|--------------------------------|
| Colors            | `src/index.css` → `:root`      |
| Personal info     | Each component's data array    |
| Projects          | `src/components/Projects.jsx`  |
| Social links      | `src/components/Hero.jsx`      |
| Contact links     | `src/components/Contact.jsx`   |
| Profile photo     | `src/assets/profile.jpg`       |
