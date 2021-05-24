import React, { Component } from "react";
import { Link } from "react-router-dom";

//functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h2 style={{ color: "whitesmoke" }}>
            Present<strong style={{ color: "GoldenRod" }}>AI</strong>ble
          </h2>
          <Link to="/">Main{"  "}</Link>
          <Link to="/about">About us{"  "}</Link>
          <Link to="/dashboard">Dashboard{"  "}</Link>
          <Link to="/signup">Sign Up{"  "}</Link>
          <span className="badge badge-pill bg-warning">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

/**/
