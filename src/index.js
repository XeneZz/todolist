import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Clock from "./Clock";
import Home from "./Home";
import Incrementer from "./Incrementer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Dorian" />
    <Clock />
    <Incrementer />
    <Home />
  </React.StrictMode>,
);
