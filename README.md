# WEALTH TOKEN ($WEALTH) - Web3 Token Sale Landing Page

🎨 **Light Steel Industrial Minimal Futuristic Theme**  
� **WEALTH TOKEN ($WEALTH) - Premium Cryptocurrency Investment**

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)

## ✨ Features

- 🚀 **Hero Section** - Parallax scrolling background with floating 3D WEALTH TOKEN ($WEALTH) orb with custom logo
- 💎 **About WEALTH TOKEN** - Glassmorphism cards with staggered fade-in animations showcasing $WEALTH features
- 📊 **Tokenomics** - Animated progress bars with scroll reveal
- 🛒 **How to Buy** - Interactive 3-step guide for purchasing $WEALTH with pulsing glow effects
- 🗺️ **Roadmap** - Horizontal timeline showing WEALTH TOKEN development milestones with sequential reveals and glowing dots
- 🦶 **Footer** - Social links with continuously rotating WEALTH TOKEN custom logo

## 🎨 Color Palette - Light Steel

```css
/* Main palette gradient */
#F8FAFC → #E4E7EB → #CBD5E1 → #9CA3AF → 
#6B7280 → #4B5563 → #374151 → #1F2937 → #111827

/* Accent */
#3B82F6 (Neon Blue)
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS with custom steel palette
- **Animations:** Framer Motion (comprehensive animation suite)
- **Icons:** Lucide React
- **Type Safety:** TypeScript

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
token-fe/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── HeroSection.tsx     # Hero with floating orb
│   ├── AboutSection.tsx    # Feature cards
│   ├── TokenomicsSection.tsx # Distribution charts
│   ├── HowToBuySection.tsx # Purchase guide
│   ├── RoadmapSection.tsx  # Timeline
│   └── Footer.tsx          # Footer with socials
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   └── utils.ts            # Utility functions
└── tailwind.config.ts      # Tailwind configuration
```

## 🎬 Animation Features

### Global Animations
- **fadeIn** - Classic opacity transition
- **slideUp** - Bottom-to-top with fade
- **slideFromLeft/Right** - Directional reveals
- **zoomIn** - Scale with fade
- **staggerContainer** - Sequential child reveals

### Component-Specific
- **floatAnimation** - Continuous floating motion
- **glowPulse** - Pulsing glow effect
- **scaleOnHover** - Card hover scale
- **tilt3D** - 3D tilt on hover
- **progressBar** - Dynamic width expansion
- **rotateContinuous** - Infinite rotation
- **timelineDot/Line** - Timeline animations

## 🎨 Custom Utilities

### Glassmorphism
```tsx
<div className="glass">
  {/* bg-white/10 backdrop-blur-xl border border-white/10 */}
</div>
```

### Text Gradient
```tsx
<span className="text-gradient">
  {/* bg-gradient-to-r from-steel-100 to-accent-blue bg-clip-text */}
</span>
```

### Glow Border
```tsx
<div className="glow-border">
  {/* Gradient border effect */}
</div>
```

## 🎯 Key Components

### Hero Section
- Parallax background using `useScroll` and `useTransform`
- Floating token orb with rotation animation
- Fade-in-up text with stagger effect
- Animated stats bar

### Tokenomics Section
- Animated progress bars expanding on scroll
- Alternating slide-in animations
- Hover tooltips with additional info
- Token info cards with hover effects

### Roadmap Section
- Horizontal timeline with growing line animation
- Sequential milestone reveals
- Glowing status dots (completed/in-progress/upcoming)
- Interactive hover states

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to modify the steel palette:

```typescript
colors: {
  steel: {
    50: '#F8FAFC',
    // ... customize here
  },
  accent: {
    blue: '#3B82F6',
  },
}
```

### Animations
Modify animation variants in `lib/animations.ts`:

```typescript
export const customAnimation: Variants = {
  hidden: { /* initial state */ },
  visible: { /* animated state */ }
};
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm:640px` `md:768px` `lg:1024px` `xl:1280px`
- Grid layouts adapt from 1 column (mobile) to 4 columns (desktop)
- Touch-friendly button sizes

## ⚡ Performance

- Server-side rendering with Next.js 15
- Optimized animations with `whileInView` to reduce initial load
- Image optimization (ready for next/image integration)
- Code splitting by component

## 🔒 Web3 Integration (Ready)

The structure is ready for Web3 integration:

```typescript
// Add wallet connection
import { useWeb3 } from '@web3-react/core';

// Connect MetaMask
const connectWallet = async () => {
  // Implementation here
};
```

## 📝 License

MIT License - feel free to use for your token sale projects!

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and animation patterns.

---

**Built with ❤️ for the Web3 community**

🌟 Star this repo if you find it useful!
