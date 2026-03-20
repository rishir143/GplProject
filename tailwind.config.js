/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      space: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        hacker: {
          green: "#00FF41",
          cyan: "#00c2ff",
          dark: "#08141f",
          "dark-lighter": "#0d2434",
          "dark-accent": "#0F283B",
        },
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 194, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 194, 255, 0.4)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(0, 194, 255, 0.3)",
            border: "1px solid rgba(0, 194, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 194, 255, 0.6)",
            border: "1px solid rgba(0, 194, 255, 0.6)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "deep-gradient":
          "linear-gradient(to bottom, #0d2434, #0F283B, #08141f)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
