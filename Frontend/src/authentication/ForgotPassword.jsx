import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { forgotPassword, error } = useAuthStore();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await forgotPassword(email);
      toast.success("Password reset link sent to your email");
      console.log("Password reset link sent to", email);
      // navigate("/otp-verification");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <form onSubmit={handleReset}>
          <p>Please enter your email to reset the password:</p>
          <div className="input-group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <label>Email ID</label>
          </div>

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
