module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat, sans-serif",
        mono: "'Fira Code', monospace"
      },
      fontSize: {
        xs: "1rem",
        sm: "1.1rem",
        base: "1.2rem",
        xl: "1.3rem",
        lg: "1.4rem",
        "2xl": "1.6rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      colors: {
        background: "#fafaff",
        primary: "#582c4d",
        secondary: "#a26769",
      },
      container: {
        padding: {
          default: '0.2rem',
          sm: '5rem',
          lg: '10rem',
          xl: '15rem',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
