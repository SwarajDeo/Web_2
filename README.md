# Sandhya Fashion Portfolio

A modern personal portfolio website for Sandhya, built with React, Vite, Tailwind CSS, Framer Motion, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

The development server is configured for `http://127.0.0.1:5173`.

Do not use the VS Code "Go Live" button for this project. Live Server cannot compile React JSX, Tailwind, or npm package imports, so it may show a blank page. Use `npm run dev` instead.

## Build

```bash
npm run build
```

## Personalize contact links

Update `profileLinks` near the top of `src/App.jsx`:

```js
const profileLinks = {
  linkedin: 'https://www.linkedin.com/in/sandhya-kumari-a25672223/',
  email: 'rajsandhya091@gmail.com',
  phone: '+917488680819'
}
```
