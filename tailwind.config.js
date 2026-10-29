/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // User's custom oceanic palette: #0A1931, #B3CFE5, #4A7FA7, #1A3D63, #F6FAFD
        palette: {
          midnight: '#0A1931',
          ice: '#B3CFE5',
          steel: '#4A7FA7',
          navy: '#1A3D63',
          snow: '#F6FAFD',
        },
        canvas: {
          light: '#F6FAFD',
          DEFAULT: '#F6FAFD',
          subtle: '#EDF4F9',
          card: '#FFFFFF',
          'ice-soft': '#EBF3F9',
          dark: '#0A1931',
          'dark-surface': '#10243E',
          'dark-subtle': '#162F4F',
          'dark-card': '#1A3D63',
        },
        ink: {
          primary: '#0A1931',
          secondary: '#36536F',
          muted: '#63809C',
          border: '#D8E5EF',
          'dark-primary': '#F6FAFD',
          'dark-secondary': '#B3CFE5',
          'dark-muted': '#809FB9',
          'dark-border': '#1A3D63',
        },
        accent: {
          DEFAULT: '#4A7FA7',
          hover: '#1A3D63',
          light: '#B3CFE5',
          subtle: '#EBF3F9',
          deep: '#1A3D63',
          midnight: '#0A1931',
        },
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(10, 25, 49, 0.04), 0 1px 2px 0 rgba(10, 25, 49, 0.02)',
        'elevated': '0 12px 28px -6px rgba(10, 25, 49, 0.08), 0 8px 10px -6px rgba(10, 25, 49, 0.03)',
        'editorial': '0 20px 40px -15px rgba(10, 25, 49, 0.07)',
        'glow-ocean': '0 0 30px rgba(74, 127, 167, 0.25), 0 0 60px rgba(179, 207, 229, 0.2)',
        'glow-ocean-sm': '0 0 15px rgba(74, 127, 167, 0.2)',
        'card-3d': '0 20px 45px -12px rgba(10, 25, 49, 0.08), 0 1px 2px rgba(10, 25, 49, 0.03)',
      },
      letterSpacing: {
        'tighter-editorial': '-0.035em',
        'tight-editorial': '-0.02em',
        'wide-editorial': '0.08em'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
