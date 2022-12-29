/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'sky-white': '#eaebec',
        'navy-blue': '#19212f',
      },
    },
  },
  plugins: [],
}
