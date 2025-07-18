/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        jember: ["JemberSketch", "cursive"],
        inter: ["Inter", "sans-serif"],
        cowboy: ["Madani-Bold", "serif"],
        retroactive: ["Retroactive", "sans-serif"],
        garamond: ["Cormorant Garamond", "serif"],
        georgia: ["Georgia", "serif"],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 4vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 6vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 8vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 10vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 12vw, 5rem)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, filter: "blur(10px)" },
          "100%": { opacity: 1, filter: "blur(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        fadeInDelayed: "fadeIn 1s forwards 0.3s",
        slideInUp: "slideInUp 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
      },
      boxShadow: {
        "inner-black": "inset 0px 4px 8px rgba(0, 0, 0, 0.5)",
        "responsive": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
