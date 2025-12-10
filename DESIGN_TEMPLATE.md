# 🏆 Award-Winning Premium Design Template
## 6:45 Suites - Billion Dollar Design System

---

## 📋 Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Animation System](#animation-system)
5. [Component Patterns](#component-patterns)
6. [Layout Techniques](#layout-techniques)
7. [Premium Effects](#premium-effects)
8. [Mobile-First Approach](#mobile-first-approach)
9. [PWA Implementation](#pwa-implementation)

---

## 🎨 Design Philosophy

### Core Concept: "The Living Prism"
- Website is a **digital twin** of architectural elements
- Everything **breathes** - constant subtle animations even when idle
- **Physics-based spring animations** (not linear transitions)
- **Mobile-native app feel** with 3D depth and parallax

### Aesthetic Direction
- **Apple-level minimalist luxury** with gold accents
- **Palantir-style premium positioning** - sophisticated, expensive
- Design conveys **restraint and sophistication**, not abundance
- Every element feels **intentional and expensive**

---

## 🎨 Color System

### Royal Blue + Champagne Gold Palette

```css
/* Primary - Champagne Gold */
--primary: 43 74% 64%;           /* Main accent */
--primary-foreground: 222 47% 11%;

/* Background - Deep Royal Blue */
--background: 222 47% 8%;
--foreground: 38 35% 90%;

/* Card/Surface */
--card: 223 39% 11%;
--card-foreground: 38 35% 90%;

/* Muted Surfaces */
--muted: 223 30% 15%;
--muted-foreground: 220 20% 55%;

/* Borders */
--border: 223 25% 18%;

/* Extended Palette */
--gold-50: 43 75% 95%;
--gold-100: 43 74% 85%;
--gold-200: 43 73% 75%;
--gold-300: 43 72% 64%;  /* Primary */
--gold-400: 43 65% 55%;
--gold-500: 43 60% 45%;

--champagne-light: 38 35% 90%;
--champagne-muted: 38 30% 80%;
```

### Gradient System
```css
--gradient-gold: linear-gradient(135deg, hsl(43, 74%, 64%), hsl(38, 65%, 55%));
--gradient-radial: radial-gradient(ellipse at center, hsl(43, 74%, 64%, 0.15), transparent 70%);
--gradient-glass: linear-gradient(135deg, hsl(0, 0%, 100%, 0.1), hsl(0, 0%, 100%, 0.05));
```

---

## ✒️ Typography

### Font Families
```css
--font-display: 'Playfair Display', serif;  /* Headings */
--font-body: 'Outfit', sans-serif;          /* Body text */
```

### Usage Guidelines
- **Headings**: Playfair Display - medium weight, tight tracking
- **Body**: Outfit - light to regular weight, relaxed leading
- **Accent text**: Uppercase, wide letter-spacing (0.2em - 0.4em)

### Scale (Mobile → Desktop)
```css
/* Hero titles */
.hero-title { font-size: clamp(3rem, 10vw, 8rem); }

/* Section titles */
.section-title { font-size: clamp(1.75rem, 4vw, 4rem); }

/* Accent labels */
.accent-label {
  font-size: 0.625rem; /* 10px on mobile */
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
```

---

## 🎭 Animation System

### Core Library: Framer Motion

### Spring Physics (NOT linear)
```tsx
// Standard spring
transition={{ type: "spring", stiffness: 300, damping: 30 }}

// Smooth easing
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

### Animation Patterns

#### 1. Scroll-Triggered Reveals
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

#### 2. Staggered Children
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

#### 3. Hover Interactions
```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  whileTap={{ scale: 0.98 }}
>
```

#### 4. Glow Effects
```tsx
animate={{
  boxShadow: isHovered 
    ? "0 0 30px hsl(var(--primary)/0.5)" 
    : "0 0 0px hsl(var(--primary)/0)"
}}
```

### CSS Keyframe Animations
```css
/* Pulse for attention */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Shimmer for loading/luxury */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Float for ambient motion */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

---

## 🧩 Component Patterns

### Glassmorphism Cards
```css
.glass {
  background: hsl(var(--card)/0.6);
  backdrop-filter: blur(20px);
  border: 1px solid hsl(var(--border)/0.5);
}

.glass-gold {
  background: hsl(var(--primary)/0.08);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--primary)/0.2);
}
```

### Premium Buttons
```tsx
// Luxury variant
<Button variant="luxury" className="glow-gold hover-lift">

// Gold gradient background
// Uppercase tracking
// Smooth hover transitions
```

### Contact Cards Pattern
```tsx
<a className="group flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
    <Icon className="w-4 h-4 text-primary" />
  </div>
  <div>
    <p className="text-xs text-foreground/40">Label</p>
    <p className="text-sm text-foreground/70 group-hover:text-foreground">Value</p>
  </div>
</a>
```

### Section Headers
```tsx
<motion.div className="text-center mb-12">
  {/* Accent label */}
  <div className="inline-flex items-center gap-2 mb-4">
    <Icon className="w-4 h-4 text-primary" />
    <span className="text-xs uppercase tracking-[0.3em] text-primary">
      Section Label
    </span>
  </div>
  
  {/* Title with gradient */}
  <h2 className="text-3xl md:text-5xl font-display font-medium">
    Regular Text <span className="text-gradient-gold">Accent Text</span>
  </h2>
</motion.div>
```

---

## 📐 Layout Techniques

### Container System
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* 16px mobile */
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; } /* 24px */
}
```

### Grid Patterns
```tsx
// 12-column flexible grid
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  <div className="lg:col-span-5">Brand</div>
  <div className="lg:col-span-3">Links</div>
  <div className="lg:col-span-4">Contact</div>
</div>

// Feature cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
```

### Spacing Scale
```css
/* Vertical rhythm */
section { padding: 4rem 0; }      /* py-16 */
@media (sm) { padding: 5rem 0; }  /* py-20 */
@media (md) { padding: 6rem 0; }  /* py-24 */
```

---

## ✨ Premium Effects

### Ambient Glow Backgrounds
```tsx
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
</div>
```

### Text Gradients
```css
.text-gradient-gold {
  background: linear-gradient(135deg, hsl(43, 74%, 64%), hsl(38, 65%, 55%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Diamond/Geometric Masks
```css
.diamond-mask {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

### Animated Border Gradient
```tsx
<motion.div
  className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-primary/50 via-primary to-primary/50"
  animate={{
    background: [
      "linear-gradient(0deg, ...)",
      "linear-gradient(90deg, ...)",
      "linear-gradient(180deg, ...)",
      "linear-gradient(270deg, ...)",
    ]
  }}
  transition={{ duration: 3, repeat: Infinity }}
/>
```

### Portal Transition Effect
```tsx
{isTransitioning && (
  <motion.div
    initial={{ clipPath: "circle(0% at 50% 50%)" }}
    animate={{ clipPath: "circle(150% at 50% 50%)" }}
    transition={{ duration: 0.6 }}
    className="fixed inset-0 bg-primary z-[200]"
  />
)}
```

---

## 📱 Mobile-First Approach

### Viewport Height Fix
```css
min-height: 100svh; /* Use svh for mobile */
```

### Touch-Friendly Sizes
```css
/* Minimum touch target */
.touch-target {
  min-width: 44px;
  min-height: 44px;
}
```

### Responsive Typography Pattern
```tsx
className="text-sm sm:text-base md:text-lg"
className="text-xs sm:text-sm"
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
```

### Bottom Navigation (Mobile App Feel)
```tsx
<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
  <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-border">
    {navItems.map(item => (
      <NavItem key={item.path} {...item} />
    ))}
  </div>
</nav>
```

### Footer Bottom Padding
```css
/* Account for bottom nav on mobile */
footer { padding-bottom: 7rem; } /* pb-28 */
@media (md) { padding-bottom: 0; }
```

---

## 📲 PWA Implementation

### Core Features
- Home screen installation
- Offline access via service worker
- Standalone display mode
- Custom app icons
- Splash screen animation

### vite-plugin-pwa Config
```ts
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'App Name',
    short_name: 'App',
    theme_color: '#0a1628',
    background_color: '#0a1628',
    display: 'standalone',
  }
})
```

### Install Prompt Banner
```tsx
// Premium styled banner with gold/royal blue
// Appears after 3 seconds
// Smooth slide-in animation
```

---

## 🔧 Key Libraries

| Library | Purpose |
|---------|---------|
| `framer-motion` | Animations & gestures |
| `lucide-react` | Premium icons |
| `lenis` | Smooth scroll |
| `tailwindcss` | Utility-first CSS |
| `shadcn/ui` | Component primitives |
| `vite-plugin-pwa` | PWA support |

---

## 📁 Project Structure

```
src/
├── assets/           # Images, logo
├── components/
│   ├── ui/          # shadcn primitives
│   ├── Navigation   # Header/nav
│   ├── Footer       # Footer
│   ├── Hero         # Hero sections
│   └── ...          # Feature components
├── data/            # Static data
├── hooks/           # Custom hooks
├── lib/             # Utilities
├── pages/           # Route pages
├── index.css        # Design tokens
└── App.tsx          # Root component

tailwind.config.ts   # Tailwind + tokens
```

---

## ✅ Design Checklist

- [ ] All colors use CSS variables (no hardcoded values)
- [ ] Typography uses design system fonts
- [ ] Animations use spring physics
- [ ] Mobile-first responsive design
- [ ] Touch targets are 44px minimum
- [ ] Glassmorphism effects on cards
- [ ] Ambient glow backgrounds
- [ ] Scroll-triggered reveals
- [ ] Consistent spacing scale
- [ ] PWA ready

---

**Created for billion-dollar design competitions. Use responsibly. 🏆**
