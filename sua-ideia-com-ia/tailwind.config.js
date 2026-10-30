export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { navy: "#080D24", brand: "#2563EB", violet: "#7C3AED", mist: "#A9B4D0" },
      fontFamily: { sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"] },
      boxShadow: { glow: "0 10px 40px -8px rgba(124,58,237,.55)", soft: "0 20px 50px -20px rgba(0,0,0,.6)" },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } } },
      animation: { float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
