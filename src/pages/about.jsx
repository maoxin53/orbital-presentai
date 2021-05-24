import React, { Component } from "react";
import NavBar from "../components/navbar";

const AboutPage = () => {
  return (
    <React.Fragment>
      <h3>PresentAIble</h3>
      <NavBar></NavBar>
      <h3>A platform for your presentation needs</h3>
      <h4>Features</h4>
      <ul>
        <li>Easy to use</li>
        <li>Peer to peer feedback</li>
        <li>Join classes</li>
      </ul>
    </React.Fragment>
  );
};

export default AboutPage;
