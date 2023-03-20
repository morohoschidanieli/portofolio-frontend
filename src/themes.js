const base = {
  breakpoints: { lg: "899.5px", md: "768.5px", sm: "480.5px", xs: "319.5px" },
  fonts: {
    Roboto: "Roboto,Helvetica,sans-serif",
    Courier: "'Courier New', Courier, monospace",
  },
  fontSizes: {
    main: "1rem",
    footer: "0.8rem",
    h1: { lg: "3rem", md: "2rem" },
    h2: { lg: "2rem", md: "1.25rem" },
    homeEmoji: "1.7rem",
    contact: "2.5rem",
    console: "24px",
  },
  padding: {
    console: {
      top: "32px",
      bottom: "32px",
      right: "48px",
      left: "48px",
    },
  },
  boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 40%)",
  logoSize: "100px",
  navbarIconsSize: "30px",
  navbarHeightOnMobile: "58px",
  backgroundColorTransition: "background-color .3s",
  console: {
    window: {
      background: "#27252F",
      radius: "0.5rem",
      borderRadius: "0px 0px 0.5rem 0.5rem",
      fontPathColor: "#00ffa4",
      fontPathColorMain: "#27c93f",
      fontCommandColor: "#f8f8f8",
      padding: "2rem 3rem",
      iconSize: "24px",
    },
    navbar: {
      background: "#8c8c8c",
      borderRadius: "0.5rem 0.5rem 0px 0px",
      padding: "8px",
    },
    button: {
      height: "14px",
      marginLeft: "8px",
      closeButtonColor: "#ff6057",
      minimizeButtonColor: "#ffbd2e",
      fullScreenButtonColor: "#27c93f",
    },
    marginBottom: "64px",
  },
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
