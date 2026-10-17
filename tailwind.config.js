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
        paper: {
          50: '#fdfdfc',
          100: '#fbfbf9', // Main warm paper canvas
          200: '#f6f5f0',
          300: '#eeebe4',
          400: '#e5e2dc', // Hairline borders
          500: '#78716c',
          800: '#292524',
          900: '#1c1917', // Main charcoal ink text
        },
        obsidian: {
          50: '#f4f1ea', // Main dark ivory text
          100: '#e3dfd5', // Subtext
          200: '#a8a29e', // Muted text
          300: '#73706c', // Dim text
          400: '#4a4d55', // Border light
          500: '#2d2f36', // Dark hairline borders
          600: '#25272e', // Dark pill/badge border
          700: '#1d1f24', // Dark pill/badge background
          800: '#16171b', // Dark card
          900: '#111215', // Main dark canvas
          950: '#0b0c0e', // Deep inset canvas
        },
        sage: {
          50: '#f2f7f4',
          100: '#e1ede5',
          400: '#4ade80',
          500: '#22c55e',
          600: '#2e5a44', // Warm paper accent
          700: '#244836',
        },
        terracotta: {
          50: '#fff7ed',
          500: '#f97316',
          600: '#c2410c', // Warm paper focal
          700: '#9a3412',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace']
      }
    },
  },
  plugins: [],
}
