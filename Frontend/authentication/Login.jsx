import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="input-group">
        <input type="text" required />
        <label>Username</label>
      </div>
      <div className="input-group">
        <input type="password" required />
        <label>Password</label>
        <span className="eye-icon">👁️</span>
      </div>

      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <button>Log In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
