import { createMuiTheme } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

let theme = createMuiTheme({
  props: {
    // withWidth component ⚛️
    MuiWithWidth: {
      // Initial width property
      initialWidth: "xs" // Breakpoint being globally set 🌎!
    }
  },
  typography: {
    //Will define v2 Typography active
    useNextVariants: true
  },
  shape: {
    //Default system-wide border-radius
    borderRadius: 10
  },
  palette: {
    primary: {
      main: deepPurple[500],
      light: deepPurple[300],
      dark: deepPurple[800],
      contrastText: "#ffffff"
    },
    secondary: {
      main: "rgba(52, 47, 60, 1)",
      // main: 'rgba(204, 185, 238, 1)',
      light: "rgba(71, 61, 88, 1)",
      // light: 'rgba(221, 207, 246, 1)',
      //light: 'rgba(109, 109, 109, 1.0)',
      dark: "rgba(25, 24, 27, 1.0)",
      // dark: 'rgba(185, 161, 227, 1.0)',
      // dark: 'rgba(50, 50, 50, 1.0)',
      contrastText: "rgba(218, 215, 222, 1)"
      // contrastText: 'rgba(30, 28, 33, 1)'
      // contrastText: '#FFFFFF'
    },
    signalGreen: {
      main: "#1dc138",
      light: "#e4e65e",
      dark: "#7c8500",
      contrastText: "#000000"
    },
    signalYellow: {
      main: "#ffc107",
      light: "#fff350",
      dark: "#c79100",
      contrastText: "#000000"
    },
    signalRed: {
      main: "#d50000",
      light: "#ff5131",
      dark: "#9b0000",
      contrastText: "#ffffff"
    }
  }
});

export default theme;
