import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import { useAuthStore } from "../store/useAuthStore";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { signup, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, username, password });
    // Add authentication logic here
    try {
      await signup(email, password, username);
      console.log("Signup successful");
      navigate("/verify-email")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <label>Email ID</label>
          </div>

          <div className="input-group">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required />
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
