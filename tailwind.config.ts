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
        // Light Steel Palette - Industrial Minimal Futuristic Theme
        steel: {
          50: '#F8FAFC',   // Lightest - almost white
          100: '#E4E7EB',  // Very light gray-blue
          200: '#CBD5E1',  // Light steel
          300: '#9CA3AF',  // Medium steel
          400: '#6B7280',  // Steel gray
          500: '#4B5563',  // Dark steel
          600: '#374151',  // Darker steel
          700: '#1F2937',  // Very dark
          800: '#111827',  // Almost black
        },
        accent: {
          blue: '#3B82F6', // Neon blue accent
        },
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
