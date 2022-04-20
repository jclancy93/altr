module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#141414",
        teal: "#2FDDCC",
        "teal-hover": "#21CDBC",
        "brand-text": "#898480;",
      },
    },
  },
  plugins: [],
};
