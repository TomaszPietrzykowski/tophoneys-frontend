import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    common: {
      white: `rgba(255, 255, 255, 1)`,
      // orange1: "rgb(253,155,2)",
      // orange2: "rgb(255, 153, 0)",
      // orange3: "rgb(222,114,0)",
      // brown1: "rgb(179, 107, 0)",
      brown2: "rgb(77, 46, 0)",
      lightYellow: "rgb(77, 46, 0)",
      success: "rgb(0, 150, 30)",
      error: "rgb(150, 0, 0)",
    },
    primary: {
      main: `rgba(215, 170, 14, 1)`,
    },
    secondary: {
      // main: `rgba(215, 170, 14, 1)`,
      main: `rgb(253,153,0)`,
    },
    shadows: {
      primary: "1px 1px 1px rgba(0,0,0,.3)",
    },
    text: {
      primary: "rgb(26, 26, 26)",
      secondary: "rgba(85, 89, 92, .6)",
    },
  },
  typography: {
    prosto: {
      fontFamily: "Prosto One, cursive",
      letterSpacing: 1,
    },
    mont: {
      fontFamily: "Montserrat, sans-serif",
    },
    merienda: {
      fontFamily: "Merienda One, cursive",
    },
  },
  flex: {
    col: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    colStart: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    rowStart: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  },
  utils: {
    container: {
      maxWidth: 1400,
      margin: "auto",
    },
    paragraph: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      lineHeight: 1.7,
      letterSpacing: 0.3,
      maxWidth: 560,
    },
  },
  buttons: {
    primary: {
      width: "auto",
      minWidth: 200,
      fontFamily: "Montserrat, sans-serif",
      margin: "2rem auto 2rem 0",
      padding: ".5rem 3rem",
      cursor: "pointer",
      letterSpacing: 1,
      fontSize: "1rem",
      fontWeight: 500,
      borderRadius: 4,
      color: "white",
    },
    secondary: {
      width: "auto",
      minWidth: 200,
      fontFamily: "Montserrat, sans-serif",
      borderWidth: 2,
      margin: "0 auto 2rem 0",
      padding: ".5rem 3rem",
      cursor: "pointer",
      letterSpacing: 1,
      fontSize: "1rem",
      fontWeight: 400,
      borderRadius: 4,
      transition: "all .3s ease",
      "&:hover": {
        borderWidth: 2,
      },
    },
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
    values: {
      xxs: 0,
      xs: 360,
      sm: 600,
      md: 860,
      lg: 1050,
      xl: 1200,
    },
  },
})
