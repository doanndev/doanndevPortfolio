/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06f957',
        'background-light': '#f5f8f6',
        'background-dark': '#0f2316',
        'syntax-key': '#bd93f9',
        'syntax-string': '#f1fa8c',
        'terminal-header': '#1a3a25',
        'terminal-card': '#142d1d',
        'terminal-border': '#214a2f',
      },
      fontFamily: {
        display: ['Space Grotesk', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
