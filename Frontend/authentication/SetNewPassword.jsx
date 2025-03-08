

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SetNewPassword.css";

const SetNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowError(true);
    } else {
      setShowError(false);
    //   alert("Password updated successfully!");
      navigate("/password-reset");
    }
  };

  return (
    <div className="set-password-container">
      <div className="set-password-box">
        <h2>Set New Password</h2>
        <p>Enter a new password that is different from your previous one.</p>

        {showError && (
          <div className="error-popup">
            <p>❗ Your password and confirm password don't match. Please retype them.</p>
            <button onClick={() => setShowError(false)} className="retry-btn">
              Try Again
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="set-password-form">
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="update-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
