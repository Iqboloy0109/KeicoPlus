# Product Requirements Document (PRD)
## Keico Plus - AI-Based IoT Energy Saving Platform

---

## 1. Overview

### 1.1 Product Name
**Keico Plus**

### 1.2 Product Description
Keico Plus is a web-based AI-powered IoT energy management platform designed to help businesses and organizations monitor, analyze, and optimize their energy consumption in real-time. The platform provides intelligent insights and automated controls to reduce energy waste and costs.

### 1.3 Target Audience
- Commercial buildings and offices
- Industrial facilities and factories
- Smart home developers
- Energy management companies
- Sustainability-focused organizations

---

## 2. Project Scope

### 2.1 Current Phase
**Phase 1: Frontend Home Page Development**

### 2.2 In Scope
- Home page with full design implementation (Samsung SDS style)
- Responsive design (desktop, tablet, mobile)
- Navigation component
- Footer component
- Blank placeholder pages (About, Services, Solutions, Contact)

### 2.3 Out of Scope (Future Phases)
- Backend development
- User authentication
- Dashboard functionality
- IoT device integration
- Database implementation
- API development

---

## 3. Home Page Requirements

### 3.1 Design Style
Reference: Samsung SDS (https://www.samsungsds.com/kr/index.html)

**Key Design Characteristics:**
- Premium enterprise aesthetic
- Full-width sections with alternating dark/light backgrounds
- Scroll-triggered animations (fade-in, slide-up)
- Autoplay carousels with navigation controls
- Parallax effects on hero section
- Minimalist typography with strong hierarchy
- Clean, modern sans-serif fonts

### 3.2 Page Sections

#### Section 1: Navigation
- Fixed/sticky header
- Logo on the left
- Menu links on the right: Home, About, Services, Solutions, Contact
- Transparent on hero, solid on scroll
- Hamburger menu for mobile

#### Section 2: Hero Section
- Full-screen height (100vh)
- Video or image background (IoT/energy theme)
- Overlay gradient for text readability
- Main headline: "Smart Energy. Smarter Future."
- Subheadline: Brief platform description
- Primary CTA button: "Get Started" or "Learn More"
- Scroll indicator animation at bottom

#### Section 3: About/Introduction
- Light background
- Left: Text content (company intro, mission)
- Right: Image or illustration
- Fade-in animation on scroll

#### Section 4: Services Carousel
- Dark background section
- Auto-playing carousel (Swiper style)
- 4-5 service cards:
  - AI-Powered Analytics
  - Real-Time Monitoring
  - Smart Device Control
  - Energy Optimization
  - Predictive Maintenance
- Each card: Icon, title, short description
- Navigation arrows + pagination dots

#### Section 5: How It Works
- Light background
- 3-4 step process with icons
- Steps:
  1. Connect Devices
  2. Monitor Usage
  3. AI Analysis
  4. Save Energy
- Horizontal layout on desktop, vertical on mobile
- Animated connector lines between steps

#### Section 6: Statistics/Impact
- Dark or gradient background
- Animated counter numbers
- Metrics:
  - Energy Saved: "40%+"
  - Devices Connected: "10,000+"
  - Active Users: "500+"
  - CO2 Reduced: "1,000+ tons"
- Icons accompanying each stat

#### Section 7: Case Studies
- Light background
- Grid of 3-4 cards
- Each card:
  - Thumbnail image
  - Category label/badge
  - Title
  - Brief description
  - "Read More" link
- Hover effect with subtle animation

#### Section 8: Partners/Clients
- Logo carousel (auto-scroll)
- 6-8 partner/client logos
- Grayscale logos, color on hover
- Continuous smooth scrolling

#### Section 9: Call-to-Action Section
- Dark background with gradient or pattern
- Compelling headline: "Ready to Save Energy?"
- Subtext: Brief value proposition
- CTA button: "Contact Us" or "Request Demo"

#### Section 10: Footer
- Dark background
- 4 columns:
  - Logo + brief description
  - Quick Links
  - Services
  - Contact Info
- Social media icons
- Copyright text
- Back to top button

### 3.3 Responsive Breakpoints
| Device | Width |
|--------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

### 3.4 Animations
- Scroll-triggered fade-in and slide-up
- Parallax on hero background
- Smooth scroll navigation
- Counter animation on statistics section
- Hover effects on buttons and cards
- Carousel auto-play with pause on hover

---

## 4. Other Pages (Placeholder)

### 4.1 Pages Required
- `/about` - About page (blank)
- `/services` - Services page (blank)
- `/solutions` - Solutions page (blank)
- `/contact` - Contact page (blank)

### 4.2 Placeholder Content
- Shared navigation (same as home)
- Shared footer (same as home)
- Main content area: "Coming Soon" message or empty

---

## 5. Assets

### 5.1 Images
**Sources (Free):**
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Freepik (freepik.com)

**Required Images:**
- Hero background (smart city/solar/tech)
- About section illustration
- Service icons/illustrations
- Case study thumbnails (3-4)
- Partner logos (6-8 placeholder)

### 5.2 Videos
**Sources (Free):**
- Pexels Videos (pexels.com/videos)
- Pixabay Videos (pixabay.com/videos)
- Coverr (coverr.co)

**Required Videos:**
- Hero background video (10-20 seconds, looped)
- Theme: Smart home, solar energy, smart city, technology

### 5.3 Icons
**Sources:**
- Lucide React (lucide.dev)
- Heroicons (heroicons.com)

---

## 6. Brand Guidelines

### 6.1 Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Teal) | #00BFA6 | Buttons, accents, highlights |
| Secondary (Deep Blue) | #1A237E | Headers, dark sections |
| Dark Background | #121212 | Dark sections, footer |
| Light Background | #F5F5F5 | Light sections |
| Accent (Green) | #4CAF50 | Success states, eco theme |
| Text Dark | #212121 | Body text on light |
| Text Light | #FFFFFF | Text on dark backgrounds |

### 6.2 Typography
| Element | Font | Weight | Size (Desktop) |
|---------|------|--------|----------------|
| H1 | Inter/Poppins | 700 | 48-64px |
| H2 | Inter/Poppins | 600 | 36-48px |
| H3 | Inter/Poppins | 600 | 24-32px |
| Body | Inter | 400 | 16-18px |
| Button | Inter | 600 | 14-16px |
| Caption | Inter | 400 | 12-14px |

---

## 7. Success Metrics

### 7.1 Phase 1 Deliverables
- [ ] Fully functional home page
- [ ] Responsive across all devices
- [ ] All animations working smoothly
- [ ] Fast load time (< 3 seconds)
- [ ] Blank placeholder pages with navigation

### 7.2 Performance Targets
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

---

## 8. Timeline

| Milestone | Description |
|-----------|-------------|
| Phase 1 | Home page + placeholder pages |
| Phase 2 | Inner pages development |
| Phase 3 | Backend integration |
| Phase 4 | Dashboard development |
| Phase 5 | IoT device integration |

---

## 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-06 | - | Initial PRD creation |
