import React from "react";
import "./landing.css";
import { supabase } from "../components/client";
import { Link } from "react-router-dom";

const handleSignIn = async (event) => {
  event.preventDefault();
  const { user, error } = await supabase.auth.signInWithPassword({
    email: event.target.username.value,
    password: event.target.password.value,
  });

  if (error) {
    console.error("Error signing in:", error.message);
  } else {
    console.log("Signed in successfully:", user);
  }
};

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
        <form
          className="form-container"
          onSubmit={handleSignIn}
          autoComplete="off"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <a href="www" id="forget-button">
            Forgot Password?
          </a>
          <button id="sign-in-button" type="submit">
            Sign In
          </button>
          <p id="or-block">or</p>
        </form>
        <Link to="/register">
          <button id="register-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
