import React from "react";
import "./App.css";

import CenteredGrid from "./components/MainContainer";

import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/Theme";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <style>
          {"body { background-color: " +
            theme.centerContent.backgroundColor +
            "; }"}
        </style>
        <Router>
          <CenteredGrid theme={theme} />
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
