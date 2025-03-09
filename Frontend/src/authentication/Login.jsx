import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { useAuthStore } from "../store/useAuthStore.js";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    // Add authentication logic here
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Failed to log in");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <label>Password</label>
          <span className="eye-icon">👁️</span>
        </div>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
