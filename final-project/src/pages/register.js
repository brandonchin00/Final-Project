import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1 id="logo">Roogle</h1>
      <div className="register-container">
        <div className="register-title-container">
          <h2 id="title-sign-in">Register</h2>
          <p id="subtitle-sign-in">
            Build Your Own Digital Collection of Ratings Today
          </p>
        </div>
        <form
          className="form-container"
          //   onSubmit={handleSignIn}
          autoComplete="off"
        >
          <input type="text" name="name" placeholder="First Name"></input>
          <input type="text" name="name" placeholder="Last Name"></input>
          <input type="text" name="email" placeholder="Email" required></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <button id="sign-in-button" type="submit">
            Register
          </button>
          <div className="sign-in-block">
            <p id="account-p">Have an account?</p>
            <Link to="/">
              <a id="account-a">Sign In</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
