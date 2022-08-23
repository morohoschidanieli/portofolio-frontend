const base = {
  breakpoints: { lg: "899.5px", md: "768.5px", sm: "480.5px", xs: "319.5px" },
  fonts: { Roboto: "Roboto,Helvetica,sans-serif" },
  fontSizes: {
    main: "1rem",
    footer: "0.8rem",
    h1: { lg: "3rem", md: "2rem" },
    h2: { lg: "2rem", md: "1.25rem" },
    homeEmoji: "1.7rem",
    contact: "2.5rem",
  },
  logoSize: "100px",
  backgroundColorTransition: "background-color .3s",
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
  changeThemeIcon: "🌑",
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
  changeThemeIcon: "🌕",
};

module.exports = { base, light, dark };
