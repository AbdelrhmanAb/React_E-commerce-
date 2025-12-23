import { createTheme } from "@mui/material/styles";

const amazonTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#FF9900", // Amazon Orange
    },
    secondary: {
      main: "#232F3E",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F1111",
      secondary: "#565959",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});

export default amazonTheme;
