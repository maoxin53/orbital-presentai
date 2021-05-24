import React, { Component } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/dashboard";
import SignupPage from "./pages/signup";

class App extends Component {
  render() {
    return (
      <Router>
        {/* future routes here*/}
        <span>
          <Route exact path="/" component={MainPage} />
        </span>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/dashboard" component={DashboardPage}></Route>
        <Route exact path="/signup" component={SignupPage}></Route>
      </Router>
    );
  }
}

export default App;

/* original app

      */
