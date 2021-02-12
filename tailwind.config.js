module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "vgb-primary": "#93D26E",
        // green

        "vgb-secondary": "#6367BF",
        // purple

        "vgb-bg": "#F1F1F1",
        //light grey

        "vgb-tertiary": "#DEE4ED",
        //white/grey

        "vgb-white": "#FDFCF9"
        //off white, for nav
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
