// src/components/SignUp.js
import React, { useState } from "react";
import "./styles/SignUp.css";

const SignUp = ({ toggleSignIn }) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h4>Create Account</h4>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <span className="signin-link" onClick={toggleSignIn}>
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
