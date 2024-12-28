/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
  theme: {
    extend: {
      colors: {
        charCoalBlack: "#333333",
      },
    },
  },
  plugins: [],
};
