/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'sky-white': '#e5e6e8',
        'navy-blue': '#19212f',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark"],
  },

}
