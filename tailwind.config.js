/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#ffffff",  // white background
        main: "#111111",  // primary text
        accent: "#800000", // maroon highlight
        border: "#eaeaea", // light gray divider
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
