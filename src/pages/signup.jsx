import React, { Component } from "react";
import NavBar from "../components/navbar";

const SignupPage = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <h4>Join us as a student or tutor</h4>
      <ul>
        <ol>Name</ol>
        <ol>School</ol>
        <ol>Email</ol>
        <ol>Password</ol>
        <ol>Confirm Password</ol>
      </ul>
    </React.Fragment>
  );
};

export default SignupPage;
