import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
