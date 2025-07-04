/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cor1: "#000",
        cor2: "#fff",
        cor3: "#201229",
        cor4: "#7116E9",
        cor5: "#6F6AF8",
        cor6: "#0f0f3d",
        cor7: "#d4bcfa",
        cor8: "#14143a",
      },
      keyframes: {
        colorAnimation: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '400% 0%' },
        },
      },
      animation: {
        colorAnimation: 'colorAnimation 15s linear infinite',
      },
    },
  },
  plugins: [],
}

