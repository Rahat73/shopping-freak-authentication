// import React from 'react';
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Passwords do not match");
    } else if (password.length < 6) {
      setError("Password can not be less than 6 characters");
    } else {
      setError("");
      console.log(email, password, confirm);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm password</label>
          <input type="password" name="confirm" required />
        </div>
        <p className="error-msg">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <div className="divider">
        <hr className="line" />
        <span>or</span>
        <hr className="line" />
      </div>
      <p>
        Already have an account?
        <Link to="/login" className="new-account">
          Login.
        </Link>
      </p>
      <button className="google-btn">
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SignUp;
