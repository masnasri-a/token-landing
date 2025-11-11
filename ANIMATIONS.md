# 🎬 Animation Documentation

## Overview

This project uses **Framer Motion** for all animations. Every section has carefully crafted animations that trigger on scroll, hover, or mount.

## Animation Philosophy

- **Smooth & Subtle**: No jarring movements
- **Performance First**: GPU-accelerated transforms
- **User Experience**: Animations enhance, not distract
- **Accessibility**: Respects `prefers-reduced-motion`

---

## 📚 Animation Library

### Global Variants (lib/animations.ts)

#### 1. fadeIn
```typescript
// Simple opacity fade
hidden: { opacity: 0 }
visible: { opacity: 1, duration: 0.6s }
```
**Use:** Text reveals, card appearances

#### 2. slideUp
```typescript
// Bottom to top with fade
hidden: { opacity: 0, y: 60 }
visible: { opacity: 1, y: 0, duration: 0.7s }
```
**Use:** Section headers, cards from below

#### 3. slideFromLeft / slideFromRight
```typescript
// Directional slide with fade
hidden: { opacity: 0, x: ±60 }
visible: { opacity: 1, x: 0, duration: 0.6s }
```
**Use:** Alternating content, tokenomics bars

#### 4. zoomIn
```typescript
// Scale up with fade
hidden: { opacity: 0, scale: 0.8 }
visible: { opacity: 1, scale: 1, duration: 0.5s }
```
**Use:** Modals, callout elements

#### 5. staggerContainer + staggerItem
```typescript
// Parent-child sequential animation
container: { staggerChildren: 0.15, delayChildren: 0.2 }
item: { opacity: 0→1, y: 20→0 }
```
**Use:** Feature cards, list items

---

## 🎯 Component Animations

### Hero Section

#### Floating Token Orb
```typescript
animate: {
  y: [0, -20, 0],
  rotate: [0, 5, -5, 0],
  transition: { duration: 6, repeat: Infinity }
}
```
- Continuous floating motion
- Gentle rotation
- Inner rotation: 360° in 20s

#### Parallax Background
```typescript
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
```
- Moves slower than scroll speed
- Creates depth illusion

#### Text Stagger
- Headlines fade-in-up with 0.15s delay between lines
- Smooth cascade effect

---

### About Section

#### Glassmorphism Cards
```typescript
whileHover: { scale: 1.03 }
transition: { duration: 0.3 }
```
- Slight scale on hover
- Background blur increases
- Glow border appears

#### Icon Glow
- Background blur pulsates on hover
- Smooth color transition

---

### Tokenomics Section

#### Progress Bars
```typescript
variants: {
  hidden: { width: "0%" },
  visible: { 
    width: "40%", 
    duration: 1.5s,
    delay: 0.3s
  }
}
```
- Expands from left to right
- Shimmer effect runs continuously
- Hover adds glow overlay

#### Alternating Slides
- Odd items: slide from left
- Even items: slide from right
- Creates dynamic zigzag pattern

---

### How to Buy Section

#### Step Cards
```typescript
slideUp with stagger
initial: { opacity: 0, y: 60 }
visible: { opacity: 1, y: 0 }
delay: index * 0.2
```
- Sequential reveal
- Connected by animated lines

#### CTA Button Glow
```typescript
animate: {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.5)",
    "0 0 40px rgba(59, 130, 246, 0.8)",
  ],
  transition: { duration: 2, repeat: Infinity }
}
```
- Continuous pulsing
- Draws attention to primary action

---

### Roadmap Section

#### Timeline Line
```typescript
initial: { scaleX: 0 }
whileInView: { scaleX: 1 }
transition: { duration: 1.5 }
```
- Grows from left to right
- Gradient color (blue → green)

#### Timeline Dots
```typescript
initial: { scale: 0, opacity: 0 }
visible: { scale: 1, opacity: 1 }
transition: { ease: "backOut" }
```
- Pop-in effect
- Glows if status is "in-progress"

#### Milestone Cards
- Sequential reveal with delays
- Checklist items fade in one by one
- Hover lifts card slightly

---

### Footer

#### Rotating Ethereum Icon
```typescript
animate: { rotate: 360 }
transition: { duration: 20, repeat: Infinity }
```
- Slow continuous rotation
- Never stops

#### Social Icons
```typescript
whileHover: { scale: 1.1, y: -2 }
```
- Lift and enlarge on hover
- Color shifts to accent blue

---

## 🎨 Custom Animations

### Shimmer Effect
```css
.shimmer::before {
  animation: shimmer 2s linear infinite;
  background: linear-gradient(90deg, transparent, white/20, transparent);
}
```
**Use:** Buttons, progress bars

### Pulse Glow
```typescript
keyframes: {
  '0%, 100%': { boxShadow: '0 0 20px blue' },
  '50%': { boxShadow: '0 0 40px blue' }
}
```
**Use:** CTA buttons, active elements

---

## 🔧 Animation Utilities

### whileInView
```typescript
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
```
- Triggers when element enters viewport
- `once: true` = plays only once
- `margin` = trigger offset

### Scroll-Based
```typescript
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [0, 100])
```
- Links animation to scroll position
- Used for parallax effects

---

## 📱 Performance Tips

### Do's ✅
- Animate `transform` and `opacity` (GPU accelerated)
- Use `whileInView` for off-screen elements
- Set `once: true` when appropriate
- Limit simultaneous animations

### Don'ts ❌
- Don't animate `width`, `height`, `top`, `left` (CPU intensive)
- Avoid long animation durations (>1s)
- Don't stack too many animations
- Don't animate on scroll continuously

---

## 🎭 Animation Checklist

- [x] Hero parallax background
- [x] Floating token orb
- [x] Text stagger effects
- [x] Glassmorphism card hover
- [x] Animated progress bars
- [x] Timeline line growth
- [x] Glowing timeline dots
- [x] Button pulse effects
- [x] Scroll-triggered reveals
- [x] Modal backdrop blur
- [x] Social icon hover
- [x] Rotating Ethereum logo
- [x] Shimmer effects
- [x] 3D tilt on hover
- [x] Smooth page transitions

---

## 🔮 Future Enhancements

Ideas for additional animations:

1. **Particle System** - Floating particles in background
2. **Number Counter** - Animated stat numbers
3. **Chart Animations** - Animated pie/donut charts
4. **Cursor Trail** - Custom cursor effect
5. **Loading States** - Skeleton loaders
6. **Page Transitions** - Route change animations
7. **Confetti** - Token purchase celebration
8. **Scroll Progress** - Top bar indicator

---

## 📖 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Easing Reference](https://easings.net/)
- [Web Animation Best Practices](https://web.dev/animations/)

---

**Pro Tip**: Use Chrome DevTools to inspect animation performance:
```
Performance Tab > Record > Look for frame drops
```

Aim for 60fps (16.67ms per frame) 🎯
