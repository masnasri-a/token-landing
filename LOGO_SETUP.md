# 🎨 WEALTH TOKEN Logo Setup Guide

## Quick Start

**Upload your logo to:** `/public/logo.png`

## Logo Specifications

### Required Format
- **Filename:** `logo.png` (must be exactly this name)
- **Location:** `/public/logo.png`
- **Format:** PNG (with transparent background recommended)
- **Size:** 512x512px or higher (square format preferred)
- **Max file size:** 500KB recommended

### Logo Usage Locations

#### 1. Hero Section - Floating Token Orb
- **Display size:** 128x128px (inside 3D rotating orb)
- **Effect:** Continuous 360° rotation (20 seconds per rotation)
- **Background:** Gradient blue sphere with glow effect
- **Content size:** 96x96px (logo scaled to fit)

#### 2. Footer - Brand Logo
- **Display size:** 48x48px (brand identity)
- **Effect:** Continuous rotation
- **Background:** Gradient blue rounded square
- **Content size:** 40x40px (logo scaled to fit)

## Fallback Behavior

If `logo.png` is not found or fails to load:
- The letter **"W"** will be displayed instead
- Maintains the same styling and animations
- No errors or broken images shown

## Step-by-Step Upload

### Option 1: Direct Upload
1. Navigate to `/Volumes/External/Web3/token-fe/public/`
2. Copy your logo file
3. Rename it to `logo.png`
4. Restart the development server

### Option 2: Using Terminal
```bash
# From project root
cp /path/to/your/logo.png public/logo.png

# Verify upload
ls -lh public/logo.png
```

### Option 3: Using VS Code
1. Open the project in VS Code
2. Right-click on the `public` folder
3. Select "Upload File"
4. Choose your logo.png file
5. Ensure it's named exactly `logo.png`

## Testing the Logo

### Development Mode
```bash
npm run dev
```

Then visit:
- **Hero section:** http://localhost:3000 (top center, floating orb)
- **Footer:** http://localhost:3000 (bottom, left side brand area)

### Production Build
```bash
npm run build
npm start
```

## Design Tips for Best Results

### Color Considerations
- The logo will be displayed on:
  - **Hero:** Blue gradient background (#3B82F6 tones)
  - **Footer:** Blue gradient background
- Ensure good contrast with blue backgrounds
- White or light-colored logos work best
- Transparent backgrounds recommended

### Resolution Tips
- Use vector-based logo (export as high-res PNG)
- Minimum 512x512px to avoid pixelation
- Test on retina displays (2x resolution)

## Troubleshooting

### Logo Not Showing?
1. Check filename is exactly `logo.png` (case-sensitive)
2. Verify file is in `/public/` directory
3. Clear browser cache (Cmd/Ctrl + Shift + R)
4. Restart development server
5. Check browser console for errors

### Logo Looks Blurry?
- Increase source resolution (min 1024x1024px)
- Use PNG format (not JPG)
- Avoid scaling up small images

### Logo Has Wrong Colors?
- Check if logo has transparent background
- Try inverting colors if visibility is poor
- Consider creating a light version specifically for blue backgrounds

## Current Token Branding

- **Token Name:** WEALTH TOKEN
- **Token Symbol:** $WEALTH
- **Primary Color:** #3B82F6 (Accent Blue)
- **Theme:** Light Steel Industrial Minimal Futuristic
- **Font:** Space Grotesk (headings) + Inter (body)

## Need Help?

If you encounter issues:
1. Check this guide again
2. Verify file path: `/public/logo.png`
3. Test with a simple square PNG first
4. Check browser developer tools for loading errors

---

**Status:** ⚠️ Waiting for logo.png upload

Once uploaded, the logo will automatically appear in both locations with animation effects.
