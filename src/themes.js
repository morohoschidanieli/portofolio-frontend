const base = {
  breakpoints: { lg: "900px", md: "769px", sm: "481px", xs: "320px" },
  fonts: { Roboto: "Roboto,Helvetica,sans-serif" },
  fontSizes: {
    main: "1rem",
    footer: "0.8rem",
    h1: "2em",
    h2: "1.5em",
    homeEmoji: "1.7rem",
    contact: "2.5rem",
  },
  logoSize: "100px",
};

const light = {
  background: "#F8F8F8",
  fontColor: "#202020",
  fontHoverColor: "#C9C9C9",
  footerFontColor: "#6A6A6A",
  gradientColor: `-webkit-linear-gradient(
    135deg,
    rgb(0, 255, 164),
    rgb(166, 104, 255)
  )`,
  footerFontWeight: "600",
  navbarFontWeight: "500",
};

const dark = {
  background: "#202020",
  fontColor: "#f8f8f8",
  fontHoverColor: "#C9C9C9",
  footerFontColor: "#BDBDBD",
  gradientColor: `-webkit-linear-gradient(
    135deg,
    rgb(0, 255, 164),
    rgb(166, 104, 255)
  )`,
  footerFontWeight: "600",
  navbarFontWeight: "500",
};

module.exports = { base, light, dark };
