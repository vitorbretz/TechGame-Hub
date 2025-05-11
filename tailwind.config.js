/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
        colors:{
            'cor1': '#000',
            'cor2': '#fff',
            'cor5': '#de5'  
        }
    },
  },
  plugins: [],
}
