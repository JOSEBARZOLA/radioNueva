/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rockFade: 'rockFade 0.5s ease-out forwards',
      },
      keyframes: {
        rockFade: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px) scale(0.95)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
