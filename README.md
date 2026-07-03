# Singh Engineering Works - Premium Industrial Website

A premium, fully responsive, and highly animated website built for **Singh Engineering Works**, a manufacturing and fabrication workshop based in Dharuhera, Haryana, India. Designed using a premium, heavy-duty industrial palette (Obsidian, Charcoal, and Brass Gold) and customized interactive client-side features.

---

## 🎨 Visual Identity & Typography

- **Branding Color Palette**:
  - Primary Dark Background: `#0B0C10` (Obsidian Black)
  - Cards & Panels: `#1F2833` (Slate Iron Gray)
  - Primary Accent Highlight: `#D4AF37` (Metallic Brass Gold)
  - Warnings & Highlights: `#FF9F0A` (Safety Amber)
  - Contact Brand Icon: `#25D366` (WhatsApp Green)
- **Typography**: 
  - Headings: `DM Serif Display` (high-contrast display serif)
  - Body: `Outfit` (clean geometric sans-serif)

---

## ⚙️ Key Engineered Features

1. **CAD-Style Vector Blueprint System**: 
   - Clean, detailed engineering schematics built as responsive vector SVGs (`src/components/BlueprintDrawings.jsx`), replacing generic AI-generated artwork. They render instantly and scale infinitely.
2. **Interactive Spec Estimator Calculator**:
   - Integrated inside the e-commerce product modal.
   - Dynamically calculates required motor horsepower, plate thickness, setup weights, and blade configurations based on customer target output specs.
3. **Seamless WhatsApp Integration**:
   - Floating CTA and modal "Buy Now" links that compile and encode formatted project requirements, automatically appending deep-linked product references.
4. **Auto-Scrolling Infinite Marquee**:
   - Horizontally scrolls 12 authentic Google Maps customer reviews in a continuous track.
   - Pauses auto-scroll on hover for easy readability.
5. **Dynamic Project Configurator**:
   - Multi-step configurator allowing custom dimensions, materials, and notes to be sent directly to WhatsApp.
6. **SEO Optimizations**:
   - Configured `robots.txt` and `sitemap.xml` listing parametric URLs for all machine items to maximize indexing.

---

## 📁 Directory Structure

```bash
├── public/
│   ├── images/
│   │   ├── shop_front.png     # Official shop-front image
│   │   └── machinery.jpg      # Real photograph of custom industrial filtration plant
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # Parametric sitemap urls
├── src/
│   ├── components/
│   │   ├── About.jsx          # Workshop facts & details
│   │   ├── BlueprintDrawings.jsx # CAD SVG schematics
│   │   ├── ContactForm.jsx    # WhatsApp Form & Google Map Location
│   │   ├── Customizer.jsx     # Project configurator modal
│   │   ├── Features.jsx       # Core Strengths & Slogans
│   │   ├── FloatingWhatsApp.jsx # Pulsing WhatsApp widget
│   │   ├── Hero.jsx           # Signboard image & stats panel
│   │   ├── Navbar.jsx         # Translucent fixed header with mobile drawer
│   │   ├── ProductDetail.jsx  # E-commerce modal specs & Estimator Calculator
│   │   └── Products.jsx       # Machine catalog grid
│   ├── App.jsx                # Layout rendering & routing
│   ├── index.css              # Custom HSL design tokens
│   └── main.jsx               # Entry-point initialization
├── package.json               # Dependencies (gsap, framer-motion, lucide-react)
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### Running Development Server
Run the local dev server at `http://localhost:5173`:
```bash
npm run dev
```

### Production Build
Compile and bundle optimal chunks inside the `dist/` directory:
```bash
npm run build
```
