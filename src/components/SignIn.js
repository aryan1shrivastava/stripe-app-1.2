// src/components/SignIn.js
import React, { useState } from "react";
import "./styles/SignIn.css";

const SignIn = ({ toggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h4>Login to your Account</h4>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span>Remember me</span>
        </label> */}
        <button type="submit">Login</button>
        <p>
          New to MyApp?{" "}
          <span className="signup-link" onClick={toggleSignUp}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
