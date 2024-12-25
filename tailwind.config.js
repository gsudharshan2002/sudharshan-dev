/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '30px',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' }, 
          '100%': { transform: 'scale(1)' }, 
        },
      },
      animation: {
        pop: 'pop 0.3s ease-in',
      },
    },
  },
  plugins: [],
}
