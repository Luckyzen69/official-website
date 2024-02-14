/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['Spectral', 'serif'],
      'mono':[  'monospace'],
      'indie':["Indie Flower"]
    },
    colors:{
      primary:'#222224',
      white:"#fff",
      black:"#000",
      grey:'#5f5f5f',
      green:"#338573 ",
      pink:"#e7decd",
      red:"#fe0101",
      green:"#36d7b7",
      orange:"#f25826  "
    }
  },
  plugins: [],
}

