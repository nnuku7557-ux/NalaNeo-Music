# 🎵 NalaNeoMusic

Aplikasi musik mobile berbasis **React + Capacitor** dengan integrasi **Jamendo API**.
Mendukung full streaming, background play, dan loop/repeat lagu.

---

## 📁 Struktur Project

```
NalaNeoMusic/
├── .github/
│   └── workflows/
│       └── build.yml              # CI/CD otomatis build APK
├── android/                       # (auto-generated oleh Capacitor)
├── ios/                           # (auto-generated oleh Capacitor)
├── dist/                          # (auto-generated oleh Vite build)
├── public/
│   └── icon.png                   # Icon aplikasi
├── src/
│   ├── components/
│   │   ├── Player.jsx             # Komponen player utama (controls, progress, cover)
│   │   ├── Playlist.jsx           # Daftar lagu / queue
│   │   └── NotificationHandler.jsx# Notifikasi background play & media session
│   ├── hooks/
│   │   ├── useAudioPlayer.js      # Custom hook: logic audio, loop, background
│   │   └── useJamendo.js          # Custom hook: fetch lagu dari Jamendo API
│   ├── services/
│   │   └── jamendoApi.js          # Service: semua request ke Jamendo API
│   ├── App.jsx                    # Root komponen, state global
│   ├── main.jsx                   # Entry point React
│   └── index.css                  # Global styles (Tailwind + custom)
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── capacitor.config.ts            # Konfigurasi Capacitor (appId, plugin, dll)
├── vite.config.js                 # Konfigurasi Vite bundler
├── postcss.config.js              # PostCSS untuk Tailwind
├── tailwind.config.js             # Konfigurasi Tailwind CSS
└── README.md                      # Dokumentasi ini
```

---

## 🚀 Cara Setup & Jalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Isi API Key Jamendo
Daftar gratis di https://devportal.jamendo.com lalu isi di `src/services/jamendoApi.js`:
```js
const CLIENT_ID = 'ISI_CLIENT_ID_KAMU_DISINI';
```

### 3. Jalankan di browser (dev mode)
```bash
npm run dev
```

### 4. Build & sync ke Android
```bash
npm run build
npx cap sync android
npx cap open android
```
Lalu di Android Studio → **Build > Generate Signed APK**

---

## 🔑 Jamendo API

- Daftar: https://devportal.jamendo.com
- Docs: https://developer.jamendo.com/v3.0
- **Gratis** untuk penggunaan non-komersial
- Support: search lagu, album, artis, streaming penuh, cover art

---

## ✨ Fitur

- 🎵 Streaming penuh via Jamendo API
- 🔁 Loop / Repeat lagu
- 🔀 Shuffle mode
- 📱 Background play (layar mati tetap putar)
- 🔔 Media notification (kontrol dari notifikasi)
- 📋 Queue / playlist management
- 🔍 Search lagu & artis

---

## 👥 Team

NalaNeoMusic Team — 2026

