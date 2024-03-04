/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
    fontFamily: {
      'cursive': ['Pacifico', 'cursive'],
      'cute': ['Comfortaa', 'sans-serif'],
      'body': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

