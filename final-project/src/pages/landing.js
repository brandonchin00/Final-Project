import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <h1 id="logo">Roogle</h1>
      <div className="login-container">
        <div className="login-title-container">
          <h2 id="title-sign-in">Sign In</h2>
          <p id="subtitle-sign-in">
            Rate, Categorize, and Save Your Items Digitally
          </p>
        </div>
        <form className="form-container" method="post" autocomplete="off">
          <input type="text" placeholder="Username" required></input>
          <input type="password" placeholder="Password" required></input>
          <a href="www" id="forget-button">
            Forgot Password?
          </a>
          <button id="sign-in-button" type="submit">
            Sign In
          </button>
          <p id="or-block">or</p>
          <button id="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
