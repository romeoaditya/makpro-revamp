/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E21D1D",
          50: "#fff0f0",
          100: "#ffd6d6",
          200: "#ffadad",
          300: "#ff8080",
          400: "#ff4d4d",
          500: "#E21D1D",
          600: "#cc0000",
          700: "#a30000",
          800: "#7a0000",
          900: "#520000",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-red": "linear-gradient(to left, #dc2626, #7f0000)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 18s linear infinite",
      },
    },
  },
  plugins: [],
};
