import { createMuiTheme } from "@material-ui/core/styles";

import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import blueGrey from "@material-ui/core/colors/blueGrey";

function getTheme(theme) {
  const primary = theme.paletteType === "light" ? "#000" : orange[500];
  const secondary = theme.paletteType === "light" ? "#000" : green[500];
  const bgColor = theme.paletteType === "light" ? "#fff" : "#6c757d";
  const headerColor =
    theme.paletteType === "light" ? blueGrey[200] : orange[500];
  const centreContainercolor =
    theme.paletteType === "light" ? blueGrey[900] : blueGrey[100];

  return createMuiTheme({
    changeTheme: function() {
      this.paletteType = this.paletteType == "dark" ? "light" : "dark";
    },
    palette: {
      type: theme.paletteType,
      background: {
        default: primary
      },
      primary: { main: primary },
      secondary: { main: secondary }
    },
    centerContent: {
      backgroundColor: bgColor,
      color: centreContainercolor,
      margin: 10,
      padding: 20,
      textAlign: "center",
      flexGrow: 1
    },
    text: {
      primary: {
        color: primary,
        fontWeight: "bold"
      },
      headerText: {
        color: headerColor,
        fontWeight: "bold",
        textAlign: "center"
      },
      navTitle: {
        color: blueGrey[200],
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 5
      },
      secondary: secondary
    }
  });
}

const theme = getTheme({
  paletteType: "dark"
});

export default theme;
