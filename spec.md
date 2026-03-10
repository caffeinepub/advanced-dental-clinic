# Advanced Dental Clinic

## Current State
Fully built 7-page dental clinic website with Framer Motion animations, glassmorphism, deep navy (#0A2540) + teal (#14B8A6) palette, Playfair Display serif headings + Plus Jakarta Sans body. ScrollReveal component handles scroll animations. Pages: Home, About, Treatments, Gallery, Testimonials, Book, Contact.

## Requested Changes (Diff)

### Add
- Animated floating shapes in hero background (soft blobs, subtle, opacity ~0.04-0.08)
- Gentle scroll parallax on hero section (transform: translateY with scroll, lightweight, no library)
- Animated number counters (already exist via AnimatedCounter component — ensure they're wired correctly)
- Button hover glow/ripple micro-interactions
- Navbar active section indicator (pill under active link)
- Inter font loaded alongside Plus Jakarta Sans for body text refinement

### Modify
- **Fonts**: Replace Playfair Display serif headings with Plus Jakarta Sans at weight 700-800. This is the most impactful change. Heading font-family should shift to Plus Jakarta Sans for a modern premium feel like Apple/Stripe. Keep Plus Jakarta Sans for body. Add Inter as fallback or secondary option for body text via Google Fonts import at top of CSS.
- **Color palette shift**: Move from deep navy/teal toward more refined, softer palette:
  - `--dblue`: soften from `0.18 0.06 245` to `0.20 0.045 248` (slightly lighter slate-blue)
  - `--dteal`: shift from `0.70 0.13 188` to `0.64 0.11 195` (softer sage-teal, less saturated)
  - `--dmint`: from `0.96 0.04 185` to `0.97 0.025 200` (cooler, softer)
  - Background: shift to `0.995 0.003 240` (very clean near-white)
  - Hero gradient: soften the heavy navy to a slightly warmer deep slate
- **ScrollReveal**: Reduce y distance from 40px to 20px, keep duration 0.5s, use more refined ease curve `[0.22, 1, 0.36, 1]` (Apple-style spring feel)
- **Card hover**: Change treatment-card hover to subtle lift (translateY -6px) with soft shadow increase, scale 1.02, no dramatic color flip to navy. Instead use a very soft gradient shift — keep white bg, add subtle teal tint. More restrained.
- **Navbar**: Enhance glass effect — backdrop-blur-xl, add border-bottom on scroll. Active link gets a small underline indicator dot/pill.
- **Buttons**: Add subtle scale(1.02) + box-shadow glow on hover. Smooth 200ms transitions.
- **Hero section**: Reduce animation y from 28px/16px to 16px/10px for more refined feel. Add 2-3 animated soft blob shapes behind content.
- **Treatment card images**: hover scale 1.04 (already has 1.05 — keep or reduce to 1.03)
- **Gallery images**: Ensure hover zoom effect is smooth
- **mesh-bg**: Slightly adjust radial gradients to use new softer palette

### Remove
- Playfair Display as the heading font-family (keep the @font-face for backward compat but no longer use it as default heading)
- The dark full-color flip on treatment card hover (too dramatic for "subtle" direction)

## Implementation Plan
1. Update `frontend/index.css`: Add Google Fonts import for Inter + update all design tokens for new palette + update font-family declarations + refine card hover to be subtle + adjust ScrollReveal animation distances
2. Update `frontend/tailwind.config.js`: Change heading font-family to Plus Jakarta Sans
3. Update `frontend/src/components/ScrollReveal.tsx`: Reduce y offsets, update easing
4. Update `frontend/src/pages/HomePage.tsx`: Add floating animated blobs to hero, add scroll parallax (useScroll + useTransform from motion), reduce hero animation y values
5. Update `frontend/src/components/Navbar.tsx`: Enhanced glass blur, active indicator pill
6. Minor polish across other pages for consistency with new palette/fonts
