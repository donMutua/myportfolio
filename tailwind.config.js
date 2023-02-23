/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "2xl": "1.5rem",
      },

      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
