#!/bin/bash

# ═══════════════════════════════════════════════
# 🚀 Web3 Token Landing Page - Installation Script
# ═══════════════════════════════════════════════

echo "╔═══════════════════════════════════════════════╗"
echo "║  🎨 Web3 Token Sale Landing Page             ║"
echo "║  Theme: Light Steel Industrial Futuristic    ║"
echo "╚═══════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm detected: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "╔═══════════════════════════════════════════════╗"
    echo "║  ✅ Installation Complete!                    ║"
    echo "╚═══════════════════════════════════════════════╝"
    echo ""
    echo "🎯 Next Steps:"
    echo ""
    echo "1. Run development server:"
    echo "   npm run dev"
    echo ""
    echo "2. Open your browser:"
    echo "   http://localhost:3000"
    echo ""
    echo "3. Start customizing:"
    echo "   - Edit components in /components"
    echo "   - Change colors in tailwind.config.ts"
    echo "   - Modify animations in /lib/animations.ts"
    echo ""
    echo "📚 Documentation:"
    echo "   - README.md - Main documentation"
    echo "   - SETUP.md - Quick start guide"
    echo "   - ANIMATIONS.md - Animation reference"
    echo "   - PROJECT_SUMMARY.md - Complete overview"
    echo ""
    echo "🚀 Happy coding!"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above."
    exit 1
fi
