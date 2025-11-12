import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Base Colors
        background: {
          primary: '#000000',    // Pure Black
          secondary: '#1A1A1A',  // Very Dark Gray
        },
        
        // Text Colors
        text: {
          primary: '#FFFFFF',    // White
          secondary: '#E5E5E5',  // Light Gray
          muted: '#A1A1A1',     // Medium Gray
        },
        
        // Green Accent (Primary Action Color)
        green: {
          electric: '#00FF00',   // Electric Green
          bright: '#00E600',     // Slightly Toned Down
          dark: '#00B300',       // Darker Green
          glow: 'rgba(0, 255, 0, 0.5)', // Green with transparency
        },
        
        // Warning/Error (Red - Muted)
        red: {
          muted: '#CC4444',      // Muted Red
          dark: '#B33333',       // Dark Red
        },
        
        // Legacy Steel Colors (for gradual migration)
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        // Accent colors for backwards compatibility (now using green)
        primary: {
          50: '#e6ffe6',
          100: '#ccffcc',
          200: '#99ff99',
          300: '#66ff66',
          400: '#33ff33',
          500: '#00ff00',  // Electric Green
          600: '#00e600',
          700: '#00cc00',
          800: '#00b300',
          900: '#009900',
        },
        
        'accent-blue': '#00FF00',  // Override blue with green
        'accent-green': '#00FF00', // New green accent
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
            transform: 'scale(1.02)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-steel': 'linear-gradient(to bottom, #1F2937, #3B82F6)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
