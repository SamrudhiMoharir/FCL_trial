import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <div className="signup-box">
        <form>
          <div className="input-group">
            <input type="email" required />
            <label>Email ID</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? "👁️" : "🚫"}
            </span>
          </div>

          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <Link to="/">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
