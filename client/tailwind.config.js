/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito"', '"sans-serif"']
      },
      colors: {
        mbaRed: '#6B293C',
        hoverRed: 'B85873',
        grey: 'F5F5F5'
      }
    }
  },
  plugins: [],
}
