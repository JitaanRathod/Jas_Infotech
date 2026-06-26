# 🚀 ANTIGRAVITY PROMPT — JAS Infotech Website
> Paste this entire prompt into Claude Code, GitHub Copilot Chat, or any AI coding assistant to scaffold the full website.

---

## 🎯 PROJECT OVERVIEW

Build a **complete, production-ready multi-page website** for **JAS Infotech** — a software and hardware solutions company based in Vapi, Gujarat. Use **Vite + React (JSX)** with **React Router v6**, **Lucide React** icons, and smooth CSS/JS animations. No external UI libraries (no MUI, no Chakra, no Ant Design). All styling in plain CSS modules or a single `styles.css`. Do NOT use Tailwind CSS.

---

## 🏢 COMPANY INFORMATION

```
Company Name  : JAS Infotech
Tagline       : "Your Technology Partner"
Mobile        : +91 98241 86968
Email         : jasit.vapi@gmail.com
Address       : Shop No. 9, Skylon Building, Char Rasta,
                Silvassa–Vapi Road, GIDC, Vapi – 396195, Gujarat
GST / Est     : Est. in Vapi Industrial Belt
Working Hours : Mon–Sat, 9:00 AM – 7:00 PM
```

---

## 🎨 DESIGN TOKENS & THEME

Derive every color from the uploaded logo — it uses a **bold crimson red** and **dark charcoal** over white.

```css
:root {
  /* Brand Colors */
  --red-primary   : #CC1F1A;   /* Main brand red (from logo) */
  --red-dark      : #A01515;   /* Hover / pressed state */
  --red-light     : #F5E4E4;   /* Light red tint for backgrounds */
  --charcoal      : #2D2D2D;   /* Primary text & dark surfaces */
  --charcoal-mid  : #4A4A4A;   /* Secondary text */
  --charcoal-light: #6B6B6B;   /* Muted / caption text */
  --surface-white : #FFFFFF;
  --surface-off   : #F8F8F8;   /* Alternating section BG */
  --surface-light : #F2F2F2;   /* Card backgrounds */
  --border-subtle : #E5E5E5;
  --shadow-sm     : 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md     : 0 6px 24px rgba(0,0,0,0.12);
  --shadow-lg     : 0 16px 48px rgba(0,0,0,0.16);

  /* Typography */
  --font-display  : 'Poppins', sans-serif;   /* Headings */
  --font-body     : 'Inter', sans-serif;     /* Body copy */
  --font-mono     : 'JetBrains Mono', monospace; /* Code/data labels */

  /* Spacing Scale */
  --sp-xs: 4px; --sp-sm: 8px; --sp-md: 16px;
  --sp-lg: 24px; --sp-xl: 40px; --sp-2xl: 64px; --sp-3xl: 96px;

  /* Border Radius */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 100px;

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 180ms; --duration-mid: 300ms; --duration-slow: 500ms;
}
```

**Signature element:** A bold diagonal red accent stripe / clip-path shape used on the hero and section breaks — inspired by the angular forms in the logo's "fi" lettermark.

**Typography pairings:**
- Display: `Poppins 700` — used for H1/H2 only, at large sizes with tight letter-spacing
- Body: `Inter 400/500` — clean and readable for all paragraphs
- Import both from Google Fonts in `index.html`

---

## 📁 PROJECT STRUCTURE

```
jas-infotech/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── logo.png          ← Company logo (provided)
│   │   ├── image1.jpg        ← Netgear Router
│   │   ├── image2.jpg        ← HP Printer
│   │   ├── image3.jpg        ← Western Digital SSD
│   │   ├── image4.jpg        ← D-Link Switch
│   │   ├── image5.jpg        ← Exo Router
│   │   ├── image6.jpg        ← HP Printer Ink
│   │   ├── image7.jpg        ← Safety & Security (for Industries)
│   │   ├── image8.jpg        ← Access Point
│   │   └── image9.jpg        ← Laptop
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── IndustryCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── ScrollReveal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Industries.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── products.css
│   │   ├── industries.css
│   │   └── contact.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 📦 DEPENDENCIES

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.1"
  }
}
```

---

## 🔧 SETUP FILES

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }
})
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JAS Infotech – Your Technology Partner | Vapi</title>
  <meta name="description" content="JAS Infotech – Tally Software, Cloud Solutions, Laptops, Printers, Routers, Switches and more in Vapi, Gujarat." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## 🧭 NAVBAR — `Navbar.jsx`

**Behavior:**
- Sticky top, transparent on hero → white + shadow on scroll (add `scrolled` class via `useEffect` + `window.addEventListener('scroll', ...)`)
- Logo (logo.png) on left, ~48px tall
- Nav links center-right: Home | About | Products | Industries | Contact
- CTA button "Get a Quote" (red, pill shape) on far right
- Mobile: hamburger icon (Lucide `Menu` / `X`) opens a full-screen slide-down overlay with stacked nav links
- Active route highlighted in red with a bottom underline
- Smooth transition: `transition: background 300ms ease, box-shadow 300ms ease`

```jsx
// Key structure:
<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
  <div className="navbar__inner">
    <Link to="/" className="navbar__logo">
      <img src={logo} alt="JAS Infotech" />
    </Link>
    <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
      {['/', '/about', '/products', '/industries', '/contact'].map(...)}
    </ul>
    <a href="tel:+919824186968" className="btn btn--red btn--pill">Get a Quote</a>
    <button className="navbar__hamburger" onClick={toggleMenu}>
      {menuOpen ? <X size={24}/> : <Menu size={24}/>}
    </button>
  </div>
</nav>
```

---

## 🦶 FOOTER — `Footer.jsx`

Four-column dark footer (`--charcoal` background, white text):

| Column 1 | Column 2 | Column 3 | Column 4 |
|---|---|---|---|
| Logo + tagline + social icons | Quick Links (nav routes) | Services list | Contact info |

- Social icons: use Lucide `Facebook`, `Instagram`, `Linkedin`, `Mail`, `Phone`
- Bottom bar: `© 2025 JAS Infotech. All rights reserved.`
- Red accent top border: `border-top: 3px solid var(--red-primary)`
- Hover on links: color shifts to `--red-primary`

---

## 🏠 PAGE 1 — HOME (`Home.jsx`)

### Section A: Hero
```
Layout: Full-viewport split — left text (60%), right image (40%)
Background: --charcoal with a diagonal red clip-path wedge on right
```
- **H1:** "Powering Your Business with Smart Technology"
- **Subtext:** "Tally solutions, cloud services, and enterprise hardware — all from one trusted partner in Vapi."
- **Two CTAs:** `[Explore Products]` (red filled) and `[Contact Us →]` (ghost/outline)
- **Right panel:** `image9.jpg` (laptop) in a slightly tilted card with red shadow glow
- **Animated:** Text lines fade-up on mount (CSS `@keyframes slideUp` + staggered `animation-delay`)
- **Floating badge:** small pill "Authorized Tally Partner" with Lucide `BadgeCheck` icon, red

### Section B: Stats Bar
Full-width red (`--red-primary`) band with 4 animated counters:
- `500+` Happy Clients
- `15+` Years Experience
- `1000+` Products Sold
- `24/7` Support

Use `AnimatedCounter.jsx` — counts up from 0 on scroll into view using `IntersectionObserver`.

### Section C: Software Services
**Heading:** "Tally Solutions & Cloud Services"
Three cards in a row (horizontal scroll on mobile):

| Card | Icon (Lucide) | Title | Description |
|---|---|---|---|
| 1 | `BarChart3` | Tally Prime | Complete accounting & business management software |
| 2 | `MessageCircle` | WhatsApp Integration | Send invoices, payment reminders via WhatsApp from Tally |
| 3 | `Cloud` | Tally on Cloud | Access your Tally data anywhere, anytime — hosted securely |

Card style: white card, red top-border accent, hover lifts with shadow.

### Section D: Featured Hardware (Product Grid)
**Heading:** "Hardware Built for Business"
Grid 2×2 or 3 across on desktop — pick 4 featured products:
- `image9.jpg` → Laptop
- `image2.jpg` → HP Printer
- `image1.jpg` → Netgear Router
- `image8.jpg` → Access Point

Each card: image, product name, category badge, `[View All Products →]` CTA.

### Section E: Why Choose JAS Infotech
Light gray (`--surface-off`) background. Left column: bold heading. Right column: 4 feature rows with Lucide icons:
- `ShieldCheck` — Authorized Partner for Tally & Top Hardware Brands
- `Headphones` — Dedicated After-Sales Support
- `Zap` — Fast Delivery & On-Site Installation
- `MapPin` — Serving Vapi, Silvassa, Daman & Surrounding Areas

### Section F: Call to Action Banner
Red background, centered:
- **H2:** "Ready to Upgrade Your Business Technology?"
- **Subtext:** "Talk to our experts today — no commitment required."
- **CTA Button:** `[Call Now: +91 98241 86968]` — white button, red text

### Section G: Trusted By / Industries Teaser
Show 4 industry icons as a horizontal strip (Manufacturing, Education, Retail, Healthcare) with short labels. Link to `/industries`.

---

## 📖 PAGE 2 — ABOUT (`About.jsx`)

### Section A: Page Hero
- Half-height hero, charcoal background, white text
- Breadcrumb: `Home / About Us`
- **H1:** "About JAS Infotech"
- Diagonal red stripe on right (matching home hero aesthetic)

### Section B: Our Story (Two-column)
**Left:** Large display quote — `"Empowering businesses with technology since day one."`
**Right:** Body copy —
> JAS Infotech was founded with a simple mission: make enterprise-grade technology accessible to every business in the Vapi–Silvassa corridor. From Tally accounting solutions to network infrastructure, we've been the trusted technology partner for hundreds of businesses across manufacturing, retail, education, and healthcare.

### Section C: Mission & Vision (Cards)
Two side-by-side cards:
- **Mission** (Lucide `Target` icon, red): "To deliver reliable, affordable technology solutions that help businesses grow."
- **Vision** (Lucide `Eye` icon, charcoal): "To be the most trusted IT partner in South Gujarat."

### Section D: Core Values
Four animated tiles (CSS flip or slide-in on scroll):
- `Users` → Customer First
- `Award` → Quality Assured
- `Clock` → Timely Support
- `TrendingUp` → Innovation Driven

### Section E: What We Offer Summary
Two panels side by side:
- **Software Services Panel** (red left border): Tally Prime, WhatsApp Integration, Tally on Cloud, Annual Maintenance Contracts
- **Hardware Products Panel** (charcoal left border): Laptops, Monitors, Printers, SSDs, HDDs, Routers, Switches, Access Points

### Section F: Location & Reach
Use `image7.jpg` (safety/security) as a background image with a dark overlay. Overlay text:
> "Serving the Vapi–Silvassa–Daman industrial belt with on-site support and next-day delivery."

---

## 🛍️ PAGE 3 — PRODUCTS (`Products.jsx`)

### Section A: Page Hero
- Same half-height hero style
- **H1:** "Our Products & Solutions"
- **Subheading:** "Hardware. Software. Everything your business needs."
- Tab filter bar below hero: `[All]  [Software]  [Networking]  [Computing]  [Printing]  [Storage]`

### Section B: Software Products
Heading with red left-bar accent: "Software Solutions"

Three horizontal cards (wide layout):

```
┌────────────────────────────────────────────────────┐
│  [ICON]  Tally Prime                               │
│          Complete ERP & accounting for SMEs        │
│          ✓ Inventory  ✓ GST  ✓ Payroll  ✓ Reports │
│                              [Enquire Now →]       │
└────────────────────────────────────────────────────┘
```

Repeat for: WhatsApp Integration with Tally, Tally on Cloud

### Section C: Hardware Products Grid
**Heading:** "Hardware Products"
Responsive grid (4 columns desktop / 2 tablet / 1 mobile). One card per product:

| Image | Name | Category | Description |
|---|---|---|---|
| `image9.jpg` | Business Laptops | Computing | HP, Dell, Lenovo — for offices & field use |
| `image2.jpg` | HP Printers | Printing | LaserJet & InkJet for offices |
| `image6.jpg` | Printer Ink & Toner | Consumables | Genuine cartridges for all major brands |
| `image1.jpg` | Netgear Routers | Networking | High-speed wired & wireless routers |
| `image5.jpg` | Exo Routers | Networking | Budget-friendly reliable routers |
| `image4.jpg` | D-Link Switches | Networking | Managed & unmanaged network switches |
| `image8.jpg` | Access Points | Networking | Ceiling & wall-mount enterprise WiFi |
| `image3.jpg` | WD SSDs & HDDs | Storage | Fast NVMe SSDs and high-capacity HDDs |

**ProductCard component props:**
```jsx
<ProductCard
  image={img}
  name="HP Printer"
  category="Printing"
  badge="Best Seller"  // optional
  description="..."
  onEnquire={() => navigate('/contact')}
/>
```

Card style:
- White background, 12px radius
- Image top (aspect-ratio: 4/3, object-fit: cover)
- Category badge (red pill, top-right overlay on image)
- Product name in Poppins 600
- Description in Inter 400, muted
- "Enquire" button — red outlined, fills on hover
- Hover: card lifts `translateY(-4px)` + shadow deepens

### Section D: Add-On Services Strip
Red background band:
"We also offer: Annual Maintenance Contracts · On-site Installation · Network Setup · Data Backup Solutions"

---

## 🏭 PAGE 4 — INDUSTRIES (`Industries.jsx`)

### Section A: Page Hero
- **H1:** "Industries We Serve"
- Subheading: "From factory floors to classrooms — we've got the tech covered."

### Section B: Industries Grid
Six industry cards in 3×2 grid:

| Image / Icon | Industry | Description |
|---|---|---|
| `image7.jpg` | Safety & Security | Surveillance, access control, alarm systems supported by our networking hardware |
| Lucide `Factory` | Manufacturing | ERP with Tally, barcode printers, LAN/WAN setup for factory floors |
| Lucide `ShoppingBag` | Retail & Trading | POS systems, GST billing with Tally, receipt printers |
| Lucide `GraduationCap` | Education | Laptops, projectors, networking for schools & coaching centres |
| Lucide `Building2` | Real Estate & Construction | Cloud Tally for remote project management and payroll |
| Lucide `HeartPulse` | Healthcare & Clinics | Reliable printers, data backup, patient billing integration |

IndustryCard style:
- Image or icon fills top half
- Dark gradient overlay on image cards
- Title in bold white on top of image
- Description below in charcoal
- Red hover left-border slide animation

### Section C: Why Industry Partners Trust Us
Three columns, icon + stat + label:
- `Shield` → 100% Genuine Products
- `Truck` → Same-Day Delivery (Vapi)
- `Wrench` → On-site Service Support

---

## 📞 PAGE 5 — CONTACT (`Contact.jsx`)

### Section A: Page Hero
- **H1:** "Get in Touch"
- Subheading: "We're here to help. Reach out for quotes, support, or general queries."

### Section B: Three Info Cards (horizontal row)
```
[Phone Icon]          [Mail Icon]           [MapPin Icon]
+91 98241 86968      jasit.vapi@gmail.com   Shop 9, Skylon Bldg
Call anytime          Quick email response   GIDC Vapi – 396195
Mon–Sat 9AM–7PM
```
Cards: white, red icon, subtle shadow, hover lifts.

### Section C: Contact Split (Form + Map)
**Left (55%):** Contact Form
```jsx
<form onSubmit={handleSubmit}>
  <input  name="name"    placeholder="Your Full Name"     required />
  <input  name="phone"   placeholder="Phone Number"       type="tel" />
  <input  name="email"   placeholder="Email Address"      type="email" />
  <select name="service">
    <option>Tally Prime</option>
    <option>WhatsApp Integration</option>
    <option>Tally on Cloud</option>
    <option>Laptop / Desktop</option>
    <option>Printer</option>
    <option>Networking Equipment</option>
    <option>Other</option>
  </select>
  <textarea name="message" placeholder="Tell us about your requirement..." rows={5} />
  <button type="submit" className="btn btn--red">Send Enquiry →</button>
</form>
```
On submit: show success state with Lucide `CheckCircle2` and message "We'll reach out within 24 hours!"

**Right (45%):** Embedded Google Map
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8!2d72.9!3d20.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGIDC+Vapi!5e0!3m2!1sen!2sin!4v1"
  width="100%" height="420"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen loading="lazy"
  title="JAS Infotech Location"
/>
```
**Note:** Replace the `src` URL with the actual Google Maps embed for "Shop No. 9, Skylon Building, GIDC Vapi" — go to maps.google.com → share → embed a map → copy iframe src.

### Section D: WhatsApp CTA Strip
Green (`#25D366`) background strip:
- Lucide `MessageCircle` icon
- "Prefer WhatsApp? Chat with us directly!"
- Button: `[Open WhatsApp Chat]` → `href="https://wa.me/919824186968?text=Hello%20JAS%20Infotech%2C%20I%20need%20help%20with..."`

---

## ✨ ANIMATIONS SPECIFICATION

### 1. ScrollReveal Component
```jsx
// src/components/ScrollReveal.jsx
// Uses IntersectionObserver to add 'visible' class when element enters viewport
// CSS: opacity: 0, transform: translateY(32px) → opacity: 1, translateY(0)
// Stagger children via CSS animation-delay increments (100ms per child)

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`}
         style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
```

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 600ms var(--ease-out), transform 600ms var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 2. AnimatedCounter Component
```jsx
// Counts from 0 to target value over 2s when in view
// Uses useEffect + IntersectionObserver + requestAnimationFrame
// Props: target (number), suffix (string e.g. "+", "%")
```

### 3. Navbar scroll effect
```js
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 60);
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### 4. ProductCard hover
```css
.product-card {
  transition: transform 250ms var(--ease-out), box-shadow 250ms var(--ease-out);
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
```

### 5. Button micro-interaction
```css
.btn--red {
  position: relative; overflow: hidden;
}
.btn--red::after {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.15);
  transform: scaleX(0); transform-origin: left;
  transition: transform 300ms var(--ease-out);
}
.btn--red:hover::after { transform: scaleX(1); }
```

### 6. Hero diagonal clip (signature element)
```css
.hero__visual {
  clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: var(--red-primary);
}
```

### 7. Page transitions
Wrap all `<Routes>` in a fade wrapper:
```css
.page-enter { opacity: 0; transform: translateY(12px); }
.page-enter-active { opacity: 1; transform: translateY(0); transition: 400ms var(--ease-out); }
```

---

## 🔁 APP ROUTER — `App.jsx`

```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function AppInner() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/about"       element={<About />} />
          <Route path="/products"    element={<Products />} />
          <Route path="/industries"  element={<Industries />} />
          <Route path="/contact"     element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <BrowserRouter><AppInner /></BrowserRouter>;
}
```

---

## 🎨 GLOBAL CSS — `globals.css`

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  color: var(--charcoal);
  background: var(--surface-white);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; }
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; }
h3 { font-size: 1.25rem; font-weight: 600; }

p { line-height: 1.7; color: var(--charcoal-mid); }

a { text-decoration: none; color: inherit; }

img { max-width: 100%; display: block; }

section { padding: var(--sp-3xl) 0; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--sp-xl);
}

/* Buttons */
.btn {
  display: inline-flex; align-items: center; gap: var(--sp-sm);
  padding: 12px 28px; border-radius: var(--radius-pill);
  font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;
  cursor: pointer; border: 2px solid transparent;
  transition: all var(--duration-mid) var(--ease-out);
}
.btn--red {
  background: var(--red-primary); color: #fff;
  border-color: var(--red-primary);
}
.btn--red:hover { background: var(--red-dark); border-color: var(--red-dark); }
.btn--ghost {
  background: transparent; color: var(--surface-white);
  border-color: rgba(255,255,255,0.6);
}
.btn--ghost:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

/* Section heading style */
.section-label {
  display: inline-block;
  font-size: 0.8rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--red-primary); margin-bottom: var(--sp-sm);
}
.section-heading { margin-bottom: var(--sp-lg); }
.section-heading span { color: var(--red-primary); }
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Tablet */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .hero__content { flex-direction: column; }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar__links { display: none; }
  .navbar__links.open { display: flex; flex-direction: column; }
  .products-grid { grid-template-columns: 1fr; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; }
  section { padding: var(--sp-2xl) 0; }
}
```

---

## ♿ ACCESSIBILITY CHECKLIST

- All `<img>` tags must have descriptive `alt` attributes
- All interactive elements keyboard-focusable with visible `:focus-visible` ring in red
- ARIA labels on icon-only buttons (`<button aria-label="Open menu">`)
- `prefers-reduced-motion` media query: disable all animations when set
- Color contrast ratio ≥ 4.5:1 for all text (red on white ✓, charcoal on white ✓)
- `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` — proper landmark elements

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

---

## 🔗 QUICK REFERENCE — LUCIDE ICONS USED

| Location | Icon Name | Usage |
|---|---|---|
| Navbar CTA | `Phone` | Call now button |
| Hero badge | `BadgeCheck` | "Authorized Partner" |
| Stats | `Users`, `Clock`, `Package`, `Headphones` | Stat bar |
| Software cards | `BarChart3`, `MessageCircle`, `Cloud` | Service cards |
| Why Us | `ShieldCheck`, `Zap`, `MapPin`, `Headphones` | Features |
| Industries | `Factory`, `ShoppingBag`, `GraduationCap`, `Building2`, `HeartPulse` | Industry cards |
| Contact | `Phone`, `Mail`, `MapPin`, `MessageCircle`, `CheckCircle2` | Contact page |
| Footer | `Facebook`, `Instagram`, `Linkedin` | Social links |
| Mobile nav | `Menu`, `X` | Hamburger toggle |
| Products | `Tag`, `ShoppingCart`, `ArrowRight` | Product cards |

---

## 🚀 IMPLEMENTATION ORDER

Build in this sequence for best results:

1. `vite.config.js` + `package.json` + `index.html` — scaffold
2. `globals.css` + CSS variables — foundation
3. `Navbar.jsx` + `navbar.css` — first component
4. `Footer.jsx` + `footer.css`
5. `App.jsx` with React Router
6. `ScrollReveal.jsx` + `AnimatedCounter.jsx` — utility components
7. `Home.jsx` (all sections) — flagship page
8. `Products.jsx` with `ProductCard.jsx`
9. `About.jsx`
10. `Industries.jsx` with `IndustryCard.jsx`
11. `Contact.jsx` with `ContactForm.jsx`
12. Final: responsive CSS pass + animation polish

---

## 📌 FINAL NOTES FOR THE AI

- **Do not hallucinate image paths.** Images live at `./src/assets/image1.jpg` etc. Use `import logo from '../assets/logo.png'` pattern.
- **All image filenames are lowercase** with `.jpg` extension (except logo.png).
- **The WhatsApp link format** is: `https://wa.me/919824186968`
- **Phone link format:** `tel:+919824186968`
- **Email link format:** `mailto:jasit.vapi@gmail.com`
- Build **each page as a single JSX file** that imports and composes smaller components.
- Every `section` must be wrapped in a `<ScrollReveal>` for entrance animation.
- Use **CSS custom properties** (var(--...)) for every color — never hardcode hex values in component CSS.
- Products tab filter on `/products` page should be implemented with a `useState` filter, not a library.
- The Contact form does **not** need a real backend — on submit, show a success UI state.

---

*End of Antigravity Prompt · JAS Infotech Website · Version 1.0*
*Generated for Vite + React | Lucide Icons | CSS Animations | React Router v6*
