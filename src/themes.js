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
    console: "24px",
  },
  logoSize: "100px",
  navbarIconsSize: "30px",
  navbarHeightOnMobile: "58px",
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
  boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 40%)",
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
  padding: {
    console: {
      top: "32px",
      bottom: "32px",
      right: "48px",
      left: "48px",
    },
  },
  footerFontWeight: "600",
  navbarFontWeight: "500",
  changeThemeIcon: "🌕",
  consoleBackground: "#27252F",
  consoleBarBackground: "#8c8c8c",
  consoleCloseButtonColor: "#ff6057",
  consoleMinimizeButtonColor: "#ffbd2e",
  consoleFullScreenButtonColor: "#27c93f",
  consolePathColor: "#00ffa4",
  consoleCommnadColor: "#f8f8f8",
};

module.exports = { base, light, dark };
