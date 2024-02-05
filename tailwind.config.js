/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['Spectral', 'serif'],

    },
    colors:{
      primary:'#222224',
      white:"#fff",
      black:"#000",
      grey:'#5f5f5f',
      green:"#338573 "
    }
  },
  plugins: [],
}

