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
        // Redis-Inspired Dark Mode Color System
        redis: {
          50: '#FFF1F0',
          100: '#FFDFDD',
          200: '#FFC5C1',
          300: '#FF9D96',
          400: '#FF6B61',
          500: '#FF443A',  // Main Redis Red
          600: '#E63946',  // Hover state
          700: '#C92A2A',
          800: '#A61E1E',
          900: '#8B1818',
        },
        
        // Dark Mode Background System
        dark: {
          primary: '#121212',    // Deep background
          secondary: '#1E1E1E',  // Section backgrounds  
          surface: '#2A2A2A',    // Card backgrounds
          elevated: '#333333',   // Elevated elements
          code: '#222222',       // Code blocks
        },
        
        // High-Contrast Text System
        text: {
          primary: '#FFFFFF',    // Main text
          secondary: '#CCCCCC',  // Headings
          muted: '#999999',      // Descriptions  
          tertiary: '#666666',   // Labels
        },
        
        // Border System
        border: {
          subtle: '#3A3A3A',     // Subtle borders
          medium: '#4A4A4A',     // Visible borders
          accent: '#FF443A',     // Redis accent borders
        },

        // Legacy support - map to new system
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
        },
        
        green: {
          primary: '#FF443A',    // Map green to Redis Red
          dark: '#E63946',
          light: '#FFF1F0',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'Consolas', 'Monaco', 'monospace'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        'redis-xs': '0.5rem',
        'redis-sm': '1rem', 
        'redis-md': '1.5rem',
        'redis-lg': '2.5rem',
        'redis-xl': '4rem',
        'redis-2xl': '6rem',
      },
      borderRadius: {
        'redis-sm': '4px',
        'redis-md': '6px', 
        'redis-lg': '8px',
        'redis-xl': '12px',
      },
      boxShadow: {
        'redis-subtle': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'redis-medium': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'redis-large': '0 8px 24px rgba(0, 0, 0, 0.6)',
        'redis-glow': '0 0 20px rgba(255, 68, 58, 0.3)',
        'redis-glow-strong': '0 0 40px rgba(255, 68, 58, 0.5)',
      },
      animation: {
        'redis-fade-up': 'redisFadeUp 0.6s ease forwards',
        'redis-hover-lift': 'redisHoverLift 0.2s ease forwards',
        'redis-pulse': 'redisPulse 2s ease-in-out infinite',
      },
      keyframes: {
        redisFadeUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        redisHoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        redisPulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.02)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
