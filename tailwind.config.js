module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'] 
    },
    extend: {
      colors: {
        'green':'#36ff4e',
        'blue': '#192a56',
        'white': '#ffffff',
        'black': '#000000',
        'grey': '#dcdcdc',
        'dark': '#2F2F2F'
      }
    },
  },
  plugins: [],
}
