# 🍷 Uéloce - Premium Aperitif Experience

<div align="center">

**🌐 [Zobacz Live Demo](https://ueloce.onrender.com) | 💻 [GitHub Repository](https://github.com/JakubStankiewicz1/Ueloce)**

</div>

![Véloce](https://img.shields.io/badge/Véloce-Premium%20Aperitif-CD9D65?style=for-the-badge)  
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)  
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

**Uéloce** to elegancka strona internetowa prezentująca nową erę aperitifu - gdzie smak i funkcjonalność spotykają się w pięknie wykonanym, bezalkoholowym napoju.

## ✨ O Projekcie

Uéloce to więcej niż strona internetowa - to cyfrowe doświadczenie premium brand'u aperitif. Projekt łączy w sobie nowoczesny design z funkcjonalnością, oferując użytkownikom immersyjne poznanie marki Véloce.

### 🎯 Główne Cechy
- **🎨 Elegancki Design** - Minimalistyczny, luksusowy interfejs
- **📱 Fully Responsive** - Doskonałe działanie na wszystkich urządzeniach  
- **⚡ Lightning Fast** - Zoptymalizowane dla maksymalnej wydajności
- **🎭 Smooth Animations** - Płynne przejścia i hover efekty
- **🍸 Brand Experience** - Immersyjne prezentowanie produktu

---

## 🏗️ Architektura Projektu

```
┌─────────────────────────────────────────┐
│              Uéloce Frontend            │
│          React 19 + Vite 6 SPA          │
│             Port: 4011 (dev)            │
└─────────────────────────────────────────┘
                    │
            ┌───────────────┐
            │   Routing     │
            │ React Router  │
            └───────────────┘
                    │
    ┌──────────────────────────────────────┐
    │              Pages                   │
    ├──────────────────────────────────────┤
    │  🏠 Home     │  ℹ️ About            │
    │  📍 Find Us  │  📧 Contact          │
    └──────────────────────────────────────┘
```

---

## 🛠️ Stack Technologiczny

| Kategoria | Technologia | Wersja | Zastosowanie |
|-----------|-------------|---------|--------------|
| **🔧 Framework** | React | 19.1.0 | UI Library |
| **⚡ Build Tool** | Vite | 6.3.5 | Development & Build |
| **🧭 Routing** | React Router DOM | 7.6.0 | Client-side routing |
| **🎨 Styling** | CSS Modules | - | Component-scoped styles |
| **🔤 Typography** | Google Fonts | - | Jaro, Geist, Staatliches |
| **🖼️ Assets** | WebP/AVIF | - | Optimized images |
| **📱 Responsiveness** | Custom CSS | - | Mobile-first approach |

---

## 🚀 Szybki Start

### Wymagania
- **Node.js** 18+ (zalecane 20+)
- **npm** lub **yarn**
- **Git**

### Instalacja

```bash
# Sklonuj repozytorium
git clone https://github.com/JakubStankiewicz1/Ueloce
cd Ueloce

# Przejdź do katalogu frontend
cd frontend

# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# 🎉 Aplikacja dostępna na http://localhost:4011
```

### Dostępne Skrypty

```bash
# Rozwój
npm run dev          # Uruchom dev server (port 4011)

# Produkcja  
npm run build        # Zbuduj dla produkcji
npm run preview      # Podgląd build'a produkcyjnego

# Jakość kodu
npm run lint         # Sprawdź kod ESLint
```

---

## 📂 Struktura Projektu

```
veloce/
├── 📄 README.md                    # Dokumentacja projektu
├── 📄 LICENSE                      # Licencja MIT
├── 📄 DEPLOYMENT.md               # Instrukcje deployment
├── 📄 CONTRIBUTING.md             # Przewodnik dla kontrybutorów
│
└── 🌐 frontend/                   # React Application
    ├── 🐳 Dockerfile              # Docker dla produkcji
    ├── 📋 package.json            # Dependencies & scripts
    ├── ⚙️ vite.config.js          # Vite configuration
    ├── 📋 eslint.config.js        # ESLint rules
    │
    ├── 📁 public/                 # Static assets
    │   └── 🖼️ vite.svg
    │
    └── 📁 src/                    # Source code
        ├── 📄 main.jsx            # App entry point
        ├── 📄 App.jsx             # Main App component
        ├── 🎨 App.css             # Global styles
        ├── 🎨 index.css           # Root styles & fonts
        │
        ├── 🖼️ assets/             # Images & media
        │   ├── HomeHeroImg.avif
        │   ├── DrinkOne.webp
        │   ├── AboutRecognition*.webp
        │   └── assets.js
        │
        ├── 📱 components/          # Reusable components
        │   ├── 🧭 Navbar/         # Navigation
        │   ├── 🏠 HomeHero/       # Hero sections
        │   ├── 🍸 HomeDrinks/     # Product showcase
        │   ├── ℹ️ About*/         # About components
        │   ├── 📧 Contact*/       # Contact forms
        │   ├── 📍 FindUs*/        # Location components
        │   └── ⬆️ ScrollToTop/    # Navigation helper
        │
        ├── 🎣 hooks/              # Custom React hooks
        │   └── useScrollToTop.js
        │
        └── 📄 pages/              # Route components
            ├── 🏠 Home/           # Homepage
            ├── ℹ️ About/          # About page
            ├── 📧 Contact/        # Contact page
            └── 📍 FindUsPage/     # Location page
```

---

## 🎨 Design System

### 🎨 Paleta Kolorów
```css
/* Primary Colors */
--primary-black: #000000     /* Główny tekst, navbar */
--primary-white: #FFFFFF     /* Tło, teksty kontrastowe */
--accent-gold: #CD9D65       /* Akcenty, hover states */

/* Additional */
--light-gray: #f5f5f5        /* Subtle backgrounds */
--dark-gray: #4c4c4c         /* Secondary text */
```

### 🔤 Typografia
```css
/* Brand Fonts */
.jaro-regular     /* Logo, headings - Distinctive brand font */
.geist-regular    /* Body text, UI - Modern, readable */  
.staatliches      /* Accents, special text - Bold impact */
```

### 📱 Responsive Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 360px)  /* Extra small phones */
@media (max-width: 480px)  /* Small phones */ 
@media (max-width: 768px)  /* Tablets */
@media (max-width: 992px)  /* Small desktops */
@media (max-width: 1200px) /* Large desktops */
```

---

## 🎭 Komponenty & Funkcjonalności

### 🏠 **Homepage**
- **Hero Section** - Immersyjny główny baner z CTA
- **Product Showcase** - Elegancka prezentacja napojów
- **About Preview** - Wprowadzenie do marki
- **Contact Section** - Informacje kontaktowe

### ℹ️ **About Page**  
- **Brand Story** - Historia i misja Véloce
- **Recognition Section** - Nagrody i osiągnięcia
- **Interactive Elements** - Chessboard pattern, animacje

### 📧 **Contact Page**
- **Contact Form** - Zaawansowany formularz z walidacją
- **Business Info** - Godziny, lokalizacja, social media
- **Responsive Layout** - Idealne na wszystkich urządzeniach

### 📍 **Find Us Page**
- **Location Finder** - Gdzie znaleźć Véloce
- **Stocklist** - Lista punktów sprzedaży
- **Interactive Map** - (planowane)

### 🧭 **Navigation**
- **Desktop Menu** - Eleganckie menu z hover effects
- **Mobile Menu** - Full-screen overlay z animacjami
- **Smooth Scrolling** - Auto scroll-to-top na każdej stronie

---

## 🚀 Deployment

### 🌐 Vercel (Zalecane)
```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy  
cd frontend
vercel

# Production URL będzie gotowy w 30 sekund! 🎉
```

### 🐳 Docker
```bash
# Zbuduj obraz
docker build -t veloce-frontend ./frontend

# Uruchom kontener
docker run -p 4011:4011 veloce-frontend
```

### 📦 Static Hosting
```bash
# Zbuduj dla produkcji
cd frontend
npm run build

# Deploy folder 'dist' na:
# - Netlify, Vercel, GitHub Pages
# - AWS S3, Azure Static Web Apps
# - Render, Railway, itp.
```

Szczegółowe instrukcje w [`DEPLOYMENT.md`](DEPLOYMENT.md)

---

## ⚡ Performance

### 🎯 Optymalizacje
- **⚡ Vite HMR** - Instant development feedback
- **🖼️ Image Optimization** - WebP/AVIF formats
- **📦 Code Splitting** - Automatic route-based splitting  
- **🗜️ Compression** - Gzip/Brotli ready
- **🚀 Lazy Loading** - Images and components
- **♻️ Tree Shaking** - Unused code elimination

### 📊 Metryki (Target)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 95+ 

---

## 🔧 Rozwój

### 🛠️ Lokalne środowisko
```bash
# Hot reload development
npm run dev

# Production preview
npm run build && npm run preview

# Linting
npm run lint
```

### 📋 Konwencje Kodu
- **ESLint** - Automatyczne sprawdzanie jakości
- **Prettier** - Formatowanie kodu (planowane)
- **Naming**: camelCase dla JS, kebab-case dla CSS
- **Components**: PascalCase folders i pliki

### 🎯 Roadmap

#### v1.1 (Planowane)
- [ ] **🌐 Internationalization** (i18n) - Obsługa wielojęzyczności
- [ ] **🗺️ Interactive Map** - Mapa punktów sprzedaży
- [ ] **📧 Email Integration** - Funkcjonalny contact form
- [ ] **🎭 Advanced Animations** - Framer Motion
- [ ] **🔍 SEO Optimization** - Meta tags, structured data

#### v1.2 (Przyszłość)  
- [ ] **🛒 E-commerce Integration** - Online store
- [ ] **👤 User Accounts** - Personalization
- [ ] **📱 PWA** - Progressive Web App
- [ ] **🤖 Chatbot** - Customer support
- [ ] **📊 Analytics** - User behavior tracking

---

### 🐛 Zgłaszanie Bugów
- **GitHub Issues** - szczegółowy opis problemu
- **Screenshots** - jeśli dotyczy UI
- **Browser info** - wersja, urządzenie
- **Steps to reproduce** - jak odtworzyć problem

---

## 📞 Wsparcie & Kontakt

### 💬 Kanały Komunikacji
- **🐛 Issues**: [GitHub Issues](https://github.com/akubStankiewicz1/Ueloce/issues)
- **💡 Discussions**: [GitHub Discussions](https://github.com/akubStankiewicz1/Ueloce/discussions)
- **📧 Email**: stankiewicz.kuba152@gmail.com (example)

### 📚 Dokumentacja
- **📖 User Guide**: Dokumentacja użytkownika (planowana)
- **🔧 API Docs**: Dokumentacja techniczna (gdy będzie backend)
- **🎨 Style Guide**: Przewodnik designu (planowany)

---

## 📄 Licencja

Projekt dostępny na **licencji MIT** - zobacz plik [`LICENSE`](LICENSE) po szczegóły.

```
MIT License - możesz swobodnie używać, modyfikować i dystrybuować
```

---

---

<div align="center">

## 🍷 Uéloce - Nowa Era Aperitifu

**Gdzie smak spotyka się z designem**

[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/import/project?template=https://github.com/TWOJA_NAZWA/veloce)
[![Deploy to Netlify](https://img.shields.io/badge/Deploy%20to-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://app.netlify.com/start/deploy?repository=https://github.com/TWOJA_NAMA/veloce)

---

*"Véloce represents a new era of the aperitif, where flavor and functionality converge in a beautifully crafted, alcohol-free beverage."*

**⭐ Jeśli podoba Ci się projekt, zostaw gwiazdkę!**

</div>
