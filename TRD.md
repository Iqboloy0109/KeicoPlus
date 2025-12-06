# Technical Requirements Document (TRD)
## Keico Plus - Frontend Implementation

---

## 1. Technology Stack

### 1.1 Core Technologies

| Category | Technology | Version |
|----------|------------|---------|
| Language | TypeScript | 5.x |
| Framework | React | 18.x |
| Build Tool | Vite | 5.x |
| Package Manager | npm / yarn / pnpm | Latest |

### 1.2 Styling

| Category | Technology | Purpose |
|----------|------------|---------|
| CSS Framework | Tailwind CSS | Utility-first styling |
| Component Library | shadcn/ui | Pre-built UI components |
| CSS-in-JS | Tailwind (built-in) | Component styling |

### 1.3 Animation Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Framer Motion | 10.x | Scroll animations, page transitions |
| GSAP (optional) | 3.x | Advanced animations |
| react-scroll-parallax | 3.x | Parallax effects |

### 1.4 UI Components

| Library | Purpose |
|---------|---------|
| Swiper.js | Carousels and sliders |
| Lucide React | Icon library |
| react-countup | Animated counters |
| react-intersection-observer | Scroll detection |

### 1.5 Routing

| Library | Version | Purpose |
|---------|---------|---------|
| React Router DOM | 6.x | Client-side routing |

### 1.6 State Management

| Library | Purpose |
|---------|---------|
| Zustand | Global state (minimal for Phase 1) |

### 1.7 Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| TypeScript | Type checking |

---

## 2. Project Structure

```
keico-plus/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── case-studies/
│   │   └── partners/
│   ├── videos/
│   │   └── hero-bg.mp4
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── fonts/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesCarousel.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── PartnersCarousel.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   └── common/
│   │       ├── ScrollToTop.tsx
│   │       └── SectionWrapper.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useMediaQuery.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   ├── services.ts
│   │   ├── caseStudies.ts
│   │   └── partners.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .prettierrc
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
├── PRD.md
├── TRD.md
└── README.md
```

---

## 3. Component Specifications

### 3.1 Layout Components

#### Navbar
- **Behavior:** Fixed position, transparent on hero, solid background on scroll
- **Responsive:** Hamburger menu on mobile (< 768px)
- **Animation:** Smooth background transition on scroll
- **Props:** None (uses router for active state)

#### Footer
- **Layout:** 4-column grid on desktop, stacked on mobile
- **Content:** Logo, quick links, services, contact info, social icons
- **Feature:** Back to top button with smooth scroll

#### Layout
- **Purpose:** Wrapper component with Navbar + Footer
- **Children:** Page content

### 3.2 Home Page Sections

#### HeroSection
- **Height:** 100vh
- **Background:** Video (preferred) or image with overlay
- **Content:** Headline, subheadline, CTA button
- **Animation:** Fade-in on load, scroll indicator pulse
- **Video:** Autoplay, muted, loop

#### AboutSection
- **Layout:** 2-column (text left, image right)
- **Animation:** Fade-in on scroll (using Intersection Observer)
- **Responsive:** Stack vertically on mobile

#### ServicesCarousel
- **Component:** Swiper.js carousel
- **Cards:** 4-5 service items
- **Features:** Autoplay, navigation arrows, pagination
- **Animation:** Slide transition, pause on hover

#### HowItWorks
- **Layout:** 4-step horizontal process
- **Content:** Icon, step number, title, description
- **Animation:** Sequential fade-in on scroll
- **Responsive:** Vertical stack on mobile

#### StatsSection
- **Layout:** 4-column grid
- **Content:** Animated counters with icons
- **Animation:** Count up animation triggered on scroll
- **Library:** react-countup + react-intersection-observer

#### CaseStudies
- **Layout:** 3-column grid
- **Cards:** Thumbnail, category badge, title, excerpt
- **Animation:** Fade-in stagger on scroll
- **Hover:** Scale transform, shadow increase

#### PartnersCarousel
- **Type:** Continuous auto-scroll carousel
- **Logos:** 6-8 partner logos
- **Effect:** Grayscale default, color on hover
- **Library:** Swiper.js with autoplay

#### CTASection
- **Background:** Dark with gradient or pattern
- **Content:** Headline, description, CTA button
- **Animation:** Fade-in on scroll

### 3.3 UI Components

#### Button
- **Variants:** Primary, secondary, outline, ghost
- **Sizes:** sm, md, lg
- **States:** Default, hover, active, disabled

#### Card
- **Variants:** Service card, case study card
- **Props:** Image, title, description, link

#### Container
- **Purpose:** Max-width wrapper with padding
- **Max-width:** 1280px

#### AnimatedCounter
- **Props:** End value, duration, prefix, suffix
- **Trigger:** Viewport intersection

---

## 4. Styling Specifications

### 4.1 Tailwind Configuration

```javascript
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BFA6',
          dark: '#00A08A',
          light: '#33CCBB'
        },
        secondary: {
          DEFAULT: '#1A237E',
          dark: '#0D1442',
          light: '#2E3B9E'
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          lighter: '#2D2D2D'
        },
        accent: {
          green: '#4CAF50',
          blue: '#2196F3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite'
      }
    }
  }
}
```

### 4.2 Responsive Breakpoints

| Breakpoint | Width | Tailwind Class |
|------------|-------|----------------|
| Mobile | < 640px | `sm:` |
| Tablet | 640px - 1024px | `md:`, `lg:` |
| Desktop | > 1024px | `xl:`, `2xl:` |

### 4.3 Typography Scale

| Element | Mobile | Desktop | Tailwind Class |
|---------|--------|---------|----------------|
| H1 | 36px | 64px | `text-4xl md:text-6xl` |
| H2 | 28px | 48px | `text-3xl md:text-5xl` |
| H3 | 22px | 32px | `text-2xl md:text-4xl` |
| Body | 16px | 18px | `text-base md:text-lg` |
| Small | 14px | 14px | `text-sm` |

---

## 5. Animation Specifications

### 5.1 Scroll Animations (Framer Motion)

```typescript
// Fade in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### 5.2 Animation Triggers
- Use `react-intersection-observer` with threshold 0.2
- Animate once (no repeat on scroll up)
- Delay: Stagger 100-200ms between elements

### 5.3 Carousel Settings (Swiper)

```typescript
// Services Carousel
{
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: { delay: 4000, pauseOnMouseEnter: true },
  pagination: { clickable: true },
  navigation: true,
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
}

// Partners Carousel
{
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  autoplay: { delay: 0, disableOnInteraction: false },
  speed: 3000,
  breakpoints: {
    640: { slidesPerView: 4 },
    1024: { slidesPerView: 6 }
  }
}
```

---

## 6. Routing Configuration

### 6.1 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Main landing page (fully developed) |
| `/about` | About | Placeholder page |
| `/services` | Services | Placeholder page |
| `/solutions` | Solutions | Placeholder page |
| `/contact` | Contact | Placeholder page |

### 6.2 Router Setup

```typescript
// React Router v6 configuration
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="solutions" element={<Solutions />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

## 7. Performance Requirements

### 7.1 Optimization Strategies

| Strategy | Implementation |
|----------|----------------|
| Image Optimization | WebP format, lazy loading, responsive srcset |
| Video Optimization | Compressed MP4, poster image, lazy load |
| Code Splitting | React.lazy for route components |
| Bundle Size | Tree shaking, minimal dependencies |
| Font Loading | `font-display: swap`, preload critical fonts |

### 7.2 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size | < 500KB (gzipped) |

### 7.3 Image Specifications

| Usage | Format | Max Width | Quality |
|-------|--------|-----------|---------|
| Hero Background | WebP/JPG | 1920px | 80% |
| Service Cards | WebP | 400px | 80% |
| Case Study Thumbs | WebP | 600px | 80% |
| Partner Logos | SVG/PNG | 200px | - |

---

## 8. Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Android | 90+ |

---

## 9. Development Setup

### 9.1 Prerequisites
- Node.js 18.x or higher
- npm 9.x / yarn 1.22.x / pnpm 8.x

### 9.2 Installation Commands

```bash
# Create Vite project
npm create vite@latest keico-plus -- --template react-ts

# Install dependencies
npm install react-router-dom framer-motion swiper lucide-react react-countup react-intersection-observer zustand

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install shadcn/ui
npx shadcn-ui@latest init

# Install dev dependencies
npm install -D eslint prettier eslint-plugin-react @typescript-eslint/parser
```

### 9.3 Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx}\""
  }
}
```

---

## 10. Deployment

### 10.1 Build Output
- Output directory: `dist/`
- Static files ready for any hosting platform

### 10.2 Recommended Hosting
- Vercel (recommended for React/Vite)
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

### 10.3 Environment Variables
None required for Phase 1 (static frontend only)

---

## 11. Dependencies Summary

### 11.1 Production Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x",
  "framer-motion": "^10.x",
  "swiper": "^11.x",
  "lucide-react": "^0.x",
  "react-countup": "^6.x",
  "react-intersection-observer": "^9.x",
  "zustand": "^4.x"
}
```

### 11.2 Dev Dependencies

```json
{
  "typescript": "^5.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x",
  "eslint": "^8.x",
  "prettier": "^3.x",
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x"
}
```

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-06 | - | Initial TRD creation |
