/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0f14",
        slate: "#3c4559",
        sapphire: "#2a5cff",
        skyglow: "#a8c7ff",
        warm: "#f7f4ef",
        glass: "rgba(255, 255, 255, 0.12)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.15)",
        glow: "0 0 40px rgba(42, 92, 255, 0.35)"
      },
      backgroundImage: {
        "hero-particles": "radial-gradient(circle at 20% 20%, rgba(42,92,255,0.18), transparent 45%), radial-gradient(circle at 80% 10%, rgba(168,199,255,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(42,92,255,0.15), transparent 45%), linear-gradient(135deg, rgba(255,255,255,0.75), rgba(247,244,239,0.95))"
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        fadein: "fadein 1s ease-out forwards"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadein: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" }
        }
      }
    }
  },
  plugins: []
};
