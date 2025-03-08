import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordReset.css";

const PasswordReset = () => {
  const navigate = useNavigate();

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        <p>Your password has been successfully reset.</p>
        <button onClick={() => navigate("/")}>Confirm</button>
      </div>
    </div>
  );
};

export default PasswordReset;
