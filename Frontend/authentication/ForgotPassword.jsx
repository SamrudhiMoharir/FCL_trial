import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    navigate("/otp-verification");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <form onSubmit={handleReset}>
          <p>Please enter your email to reset the password:</p>
          <div className="input-group">
            <input type="email" required />
            <label>Email ID</label>
          </div>

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
