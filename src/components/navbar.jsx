import React, { Component } from "react";
import { Link } from "react-router-dom";

//functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to="/">Main{"  "}</Link>
          <Link to="/about">About us{"  "}</Link>
          <Link to="/dashboard">Dashboard{"  "}</Link>
          <Link to="/signup">Sign Up{"  "}</Link>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
