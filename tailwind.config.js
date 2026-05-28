/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        night: "#0C0C0C",
        mist: "#D7E2EA",
      },
      boxShadow: {
        glow: "0 0 80px rgba(187, 204, 215, 0.18)",
      },
    },
  },
  plugins: [],
};
