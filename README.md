# 🍷 Uéloce - Premium Aperitif Experience

<div align="center">

**🌐 [View Live Demo](https://ueloce.onrender.com) | 💻 [GitHub Repository](https://github.com/JakubStankiewicz1/Ueloce)**

</div>

![Véloce](https://img.shields.io/badge/Véloce-Premium%20Aperitif-CD9D65?style=for-the-badge)  
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)  
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

**Uéloce** is an elegant website showcasing the new era of aperitif - where taste and functionality meet in a beautifully crafted, alcohol-free beverage.

## ✨ About the Project

Uéloce is more than just a website - it's a digital experience for a premium aperitif brand. The project combines modern design with functionality, offering users an immersive journey into the Véloce brand.

### 🎯 Key Features
- **🎨 Elegant Design** - Minimalist, luxury interface
- **📱 Fully Responsive** - Perfect performance on all devices  
- **⚡ Lightning Fast** - Optimized for maximum performance
- **🎭 Smooth Animations** - Fluid transitions and hover effects
- **🍸 Brand Experience** - Immersive product presentation

---

## 🏗️ Project Architecture

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

## 🛠️ Technology Stack

| Category | Technology | Version | Application |
|-----------|-------------|---------|--------------|
| **🔧 Framework** | React | 19.1.0 | UI Library |
| **⚡ Build Tool** | Vite | 6.3.5 | Development & Build |
| **🧭 Routing** | React Router DOM | 7.6.0 | Client-side routing |
| **🎨 Styling** | CSS Modules | - | Component-scoped styles |
| **🔤 Typography** | Google Fonts | - | Jaro, Geist, Staatliches |
| **🖼️ Assets** | WebP/AVIF | - | Optimized images |
| **📱 Responsiveness** | Custom CSS | - | Mobile-first approach |

---

## 🚀 Quick Start

### Requirements
- **Node.js** 18+ (recommended 20+)
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/JakubStankiewicz1/Ueloce
cd Ueloce

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# 🎉 Application available at http://localhost:4011
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (port 4011)

# Production  
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint check
```

---

## 📂 Project Structure

```
veloce/
├── 📄 README.md                    # Project documentation
├── 📄 LICENSE                      # MIT License
├── 📄 DEPLOYMENT.md               # Deployment instructions
├── 📄 CONTRIBUTING.md             # Contributor guidelines
│
└── 🌐 frontend/                   # React Application
    ├── 🐳 Dockerfile              # Docker for production
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

### 🎨 Color Palette
```css
/* Primary Colors */
--primary-black: #000000     /* Main text, navbar */
--primary-white: #FFFFFF     /* Background, contrast text */
--accent-gold: #CD9D65       /* Accents, hover states */

/* Additional */
--light-gray: #f5f5f5        /* Subtle backgrounds */
--dark-gray: #4c4c4c         /* Secondary text */
```

### 🔤 Typography
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

## 🎭 Components & Features

### 🏠 **Homepage**
- **Hero Section** - Immersive main banner with CTA
- **Product Showcase** - Elegant beverage presentation
- **About Preview** - Brand introduction
- **Contact Section** - Contact information

### ℹ️ **About Page**  
- **Brand Story** - Véloce history and mission
- **Recognition Section** - Awards and achievements
- **Interactive Elements** - Chessboard pattern, animations

### 📧 **Contact Page**
- **Contact Form** - Advanced form with validation
- **Business Info** - Hours, location, social media
- **Responsive Layout** - Perfect on all devices

### 📍 **Find Us Page**
- **Location Finder** - Where to find Véloce
- **Stocklist** - List of retail locations
- **Interactive Map** - (planned)

### 🧭 **Navigation**
- **Desktop Menu** - Elegant menu with hover effects
- **Mobile Menu** - Full-screen overlay with animations
- **Smooth Scrolling** - Auto scroll-to-top on each page

---

## 🚀 Deployment

### 🌐 Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy  
cd frontend
vercel

# Production URL ready in 30 seconds! 🎉
```

### 🐳 Docker
```bash
# Build image
docker build -t veloce-frontend ./frontend

# Run container
docker run -p 4011:4011 veloce-frontend
```

### 📦 Static Hosting
```bash
# Build for production
cd frontend
npm run build

# Deploy 'dist' folder to:
# - Netlify, Vercel, GitHub Pages
# - AWS S3, Azure Static Web Apps
# - Render, Railway, etc.
```

Detailed instructions in [`DEPLOYMENT.md`](DEPLOYMENT.md)

<!-- ---

## ⚡ Performance

### 🎯 Optimizations
- **⚡ Vite HMR** - Instant development feedback
- **🖼️ Image Optimization** - WebP/AVIF formats
- **📦 Code Splitting** - Automatic route-based splitting  
- **🗜️ Compression** - Gzip/Brotli ready
- **🚀 Lazy Loading** - Images and components
- **♻️ Tree Shaking** - Unused code elimination

### 📊 Metrics (Target)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 95+ -->

---

## 🔧 Development

### 🛠️ Local Environment
```bash
# Hot reload development
npm run dev

# Production preview
npm run build && npm run preview

# Linting
npm run lint
```

<!-- ### 📋 Code Conventions
- **ESLint** - Automatic quality checking
- **Prettier** - Code formatting (planned)
- **Naming**: camelCase for JS, kebab-case for CSS
- **Components**: PascalCase folders and files -->

<!-- ### 🎯 Roadmap

#### v1.1 (Planned)
- [ ] **🌐 Internationalization** (i18n) - Multi-language support
- [ ] **🗺️ Interactive Map** - Retail location map
- [ ] **📧 Email Integration** - Functional contact form
- [ ] **🎭 Advanced Animations** - Framer Motion
- [ ] **🔍 SEO Optimization** - Meta tags, structured data

#### v1.2 (Future)  
- [ ] **🛒 E-commerce Integration** - Online store
- [ ] **👤 User Accounts** - Personalization
- [ ] **📱 PWA** - Progressive Web App
- [ ] **🤖 Chatbot** - Customer support
- [ ] **📊 Analytics** - User behavior tracking

--- -->

### 🐛 Bug Reports
- **GitHub Issues** - Detailed problem description
- **Screenshots** - If UI related
- **Browser info** - Version, device
- **Steps to reproduce** - How to recreate the issue

---

## 📞 Support & Contact

### 💬 Communication Channels
- **🐛 Issues**: [GitHub Issues](https://github.com/JakubStankiewicz1/Ueloce/issues)
- **💡 Discussions**: [GitHub Discussions](https://github.com/JakubStankiewicz1/Ueloce/discussions)
- **📧 Email**: stankiewicz.kuba152@gmail.com

<!-- ### 📚 Documentation
- **📖 User Guide**: User documentation (planned)
- **🔧 API Docs**: Technical documentation (when backend added)
- **🎨 Style Guide**: Design guidelines (planned) -->

---

## 📄 License

This project is available under the **MIT License** - see the [`LICENSE`](LICENSE) file for details.

```
MIT License - you can freely use, modify and distribute
```

---

<!-- --- -->

<div align="center">

## 🍷 Uéloce - A New Era of Aperitif

**Where taste meets design**


---

<!-- *"Véloce represents a new era of the aperitif, where flavor and functionality converge in a beautifully crafted, alcohol-free beverage."* -->

**⭐ If you like this project, leave a star!**

</div>
