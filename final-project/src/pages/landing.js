import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <h1>Roogle</h1>
      <div className="login-container">
        <div className="login-title-container">
          <h2 id="title-sign-in">Sign In</h2>
          <p id="subtitle-sign-in">
            Rate, Categorize, and Save Your Items Digitally
          </p>
        </div>
        <input type="text" placeholder="Username" required></input>
        <input type="password" placeholder="Password" required></input>
        <a href="www" id="forget-button">
          Forgot Password?
        </a>
        <button id="sign-in-button">Login</button>
        <p>or</p>
        <button>Register</button>s
      </div>
    </div>
  );
};

export default Landing;
