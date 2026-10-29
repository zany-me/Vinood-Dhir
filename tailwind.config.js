/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          50: '#FAF8F5',
          100: '#F6F3EC',
          200: '#EFEAE0',
          300: '#E4DDD0',
        },
        charcoal: {
          950: '#111210',
          900: '#181816',
          800: '#232521',
          700: '#343631',
        },
        industrial: {
          950: '#070D18',
          900: '#0A1120',
          850: '#0F1A30',
          800: '#162444',
          700: '#1E335E',
          600: '#2A467E',
          500: '#3B62AA',
          100: '#E7EEF8',
          50: '#F3F7FC',
        },
        brass: {
          400: '#D4B26F',
          500: '#C5A059',
          600: '#B08B44',
          700: '#967433',
        },
        amberGold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        cobalt: {
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
        },
        canvas: {
          50: '#FAF8F5',
          100: '#F6F3EC',
          200: '#EDE8DC',
        }
      },
      letterSpacing: {
        'tracked': '0.25em',
        'subtle-tracked': '0.15em',
        'loose-tracked': '0.3em',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(24, 24, 22, 0.06), 0 4px 6px -2px rgba(24, 24, 22, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(24, 24, 22, 0.1), 0 8px 10px -4px rgba(24, 24, 22, 0.04)',
      }
    },
  },
  plugins: [],
}
