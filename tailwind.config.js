/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": "#121212",
        "custom-blue": "#0037C1",
        "hover-blue": "#002da1",
        "cell": "#1C1C1C",
      },
    },
  },
  plugins: [],
};
