import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

import App from "./components/App";
import "./assets/css/base.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
