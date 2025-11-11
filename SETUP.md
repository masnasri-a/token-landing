# 🚀 Quick Start Guide

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- `next` (v15) - React framework
- `react` & `react-dom` (v18.3) - React libraries
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - CSS framework
- `clsx` & `tailwind-merge` - Utility functions
- TypeScript and related types

### 2. Setup Environment (Optional)

```bash
cp .env.example .env.local
```

Edit `.env.local` if you need to configure Web3 integration or analytics.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Change Color Palette

Edit `tailwind.config.ts`:

```typescript
colors: {
  steel: {
    50: '#YOUR_COLOR',
    // ... customize all shades
  },
  accent: {
    blue: '#YOUR_ACCENT_COLOR',
  },
}
```

### Modify Animations

Edit `lib/animations.ts` to create custom animation variants:

```typescript
export const myCustomAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};
```

### Update Content

Edit component files in `components/` folder:
- `HeroSection.tsx` - Hero headline and CTA buttons
- `AboutSection.tsx` - Feature descriptions
- `TokenomicsSection.tsx` - Distribution percentages
- `RoadmapSection.tsx` - Milestone details
- `Footer.tsx` - Social links and company info

## 📱 Mobile Testing

Test responsive design:

```bash
# Open in mobile viewport
# Chrome DevTools > Toggle device toolbar (Cmd+Shift+M)
```

## 🔧 Troubleshooting

### Port already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
# Regenerate types
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build static export:
```bash
npm run build
# Upload 'out' folder to your hosting
```

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. 🔄 Customize content
4. 🔄 Adjust colors
5. 🔄 Test responsiveness
6. 🚀 Deploy to production

## 💡 Tips

- Use `whileInView` for scroll-triggered animations
- Keep animation durations between 0.3s - 0.8s
- Test on real mobile devices for best results
- Optimize images before adding them

---

**Need help?** Check the main README.md for detailed documentation.
