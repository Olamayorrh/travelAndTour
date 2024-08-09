
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      diplomata:["Diplomata", "serif"],
      OpenSans:["Open Sans", "sans-serif"],
      poppins:["poppins","sans-serif"]
    }
  },
  plugins: [],
}
