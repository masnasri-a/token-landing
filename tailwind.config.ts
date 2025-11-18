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
        // WEALTH Token Brand Colors - Light Mode
        wealth: {
          bg: '#FFFFFF',           // Clean White Background
          mint: '#A7F3D0',         // Mint Pastel (Primary)
          coral: '#fe3452ff',        // Coral Pastel (Secondary)
          navy: '#1E293B',         // Navy Ink (Text) - Lighter navy
          'green-wealth': '#157258', // WEALTH Green
          'mint-wash': 'rgba(167, 243, 208, 0.1)', // Subtle mint background wash
          'mint-soft': 'rgba(167, 243, 208, 0.3)',  // Soft mint for hovers
          'coral-soft': 'rgba(251, 113, 133, 0.3)', // Soft coral for accents
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6', 
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        },
        
        // Legacy colors for backwards compatibility
        background: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
        },
        
        text: {
          primary: '#1E293B',      // Navy Ink
          secondary: '#374151',    // Darker Gray
          muted: '#6B7280',       // Medium Gray
        },
        
        primary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',         // Main Mint
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        
        secondary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#FB7185',         // Main Coral
          600: '#E11D48',
          700: '#BE185D',
          800: '#9F1239',
          900: '#881337',
        },
      },
      fontFamily: {
        heading: ['var(--font-concert-one)', 'cursive'],
        body: ['var(--font-dosis)', 'sans-serif'],
        accent: ['var(--font-delius)', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      borderRadius: {
        'wealth': '16px',
        'wealth-lg': '20px',
      },
      boxShadow: {
        'wealth': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'wealth-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'wealth-mint': '0 4px 14px 0 rgba(167, 243, 208, 0.4)',
        'wealth-coral': '0 4px 14px 0 rgba(251, 113, 133, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
