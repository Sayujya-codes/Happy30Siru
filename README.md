# 🎂 Happy 30th Birthday, Siru!

A celebrative birthday website built with React + MUI.

---

## Folder Structure

```
birthday-siru/
├── assets/                  ← Drop your images here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (up to photo12.jpg)
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              ← Root with ThemeProvider
│   ├── index.js             ← React entry point
│   ├── styles/
│   │   └── theme.js         ← MUI theme + global animations
│   ├── pages/
│   │   └── BirthdayPage.jsx ← Page layout (assembles all sections)
│   └── components/
│       ├── HeroSection.jsx  ← Big "30" hero with name reveal
│       ├── MessagesSection.jsx ← 4 message cards (edit text here)
│       ├── GallerySection.jsx  ← 12-slot mosaic gallery + lightbox
│       ├── FooterSection.jsx   ← Closing outro section
│       ├── Confetti.jsx        ← Ambient confetti animation
│       ├── MusicPlayer.jsx     ← Web Audio API Happy Birthday melody
│       └── ScrollReveal.jsx    ← Reusable scroll animation wrapper
└── package.json
```

---

## Setup

```bash
npm install
npm start
```

---

## Customization Guide

### ✏️ Messages
Edit the `messages` array in `src/components/MessagesSection.jsx`.
Change the `text` field of each card and optionally the `label` too.

### 🖼 Photos
1. Put your images in the `assets/` folder named `photo1.jpg` through `photo12.jpg`
2. Update captions in `src/components/GallerySection.jsx` in the `photos` array.
   - Change `caption: "Caption goes here"` for each photo.
   - You can also change `src` paths to custom filenames.

### 🎵 Music
The music uses the Web Audio API — no audio file needed!
- The button appears bottom-right after 2 seconds.
- Click to start/stop the Happy Birthday melody (it loops).

### 🎨 Colors / Theme
Edit `src/styles/theme.js` to adjust the palette.

---

## Notes
- All animations use CSS keyframes + IntersectionObserver (no extra libraries).
- Gallery has a lightbox with keyboard navigation (← → Esc).
- Confetti is purely CSS-animated, zero performance impact.
- Fonts: Playfair Display (headings) + Lato (body) via Google Fonts.
