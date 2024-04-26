import React from "react";
import "./landing.css";
import { createClient } from "@supabase/supabase-js";

// Load environment variables
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_ANNON_KEY;
console.log("Supabase URL:", SUPABASE_URL);
console.log("Supabase Anon Key:", SUPABASE_ANON_KEY);

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
    // Redirect or update UI accordingly
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
          <button id="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
