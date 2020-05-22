import React from "react";
import ReactDOM from "react-dom";
import Radius from "./components/RadiusCalculator";
import Charts from "./components/Charts";

ReactDOM.render(
  <React.StrictMode>
    <Radius />
    <Charts />
  </React.StrictMode>,
  document.getElementById("root")
);
