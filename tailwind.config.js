import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F6F1EC',
          200: '#EDE4DA',
          300: '#E4D7C8',
        },
        champagne: {
          50: '#FBF9F5',
          100: '#F5EDE2',
          200: '#EBDDCF',
          300: '#DECBBA',
          400: '#CDB69E',
          500: '#B89F82',
        },
        espresso: {
          400: '#947F72',
          500: '#756155',
          600: '#57463B',
          700: '#403229',
          800: '#2C211A',
          900: '#1C140F',
          950: '#120C09',
        },
        gold: {
          100: '#F9F3E5',
          200: '#F1E4C3',
          300: '#E6D097',
          400: '#D5B76C',
          500: '#C5A059',
          600: '#AD873F',
          700: '#8A692B',
        },
        olive: {
          500: '#556B2F',
          600: '#435424',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px -2px rgba(44, 33, 26, 0.05)',
        'champagne': '0 8px 30px -4px rgba(197, 160, 89, 0.15)',
        'modal': '0 20px 40px -10px rgba(28, 20, 15, 0.25)',
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        zestia: {
          "primary": "#C5A059",
          "primary-content": "#FAF8F5",
          "secondary": "#2C211A",
          "secondary-content": "#FAF8F5",
          "accent": "#AD873F",
          "accent-content": "#FAF8F5",
          "neutral": "#EBDDCF",
          "neutral-content": "#2C211A",
          "base-100": "#FAF8F5",
          "base-200": "#F5EDE2",
          "base-300": "#EBDDCF",
          "base-content": "#2C211A",
          "info": "#60A5FA",
          "success": "#16A34A",
          "warning": "#D97706",
          "error": "#DC2626",
        },
      },
    ],
  },
}
