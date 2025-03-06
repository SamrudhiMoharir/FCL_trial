import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpVerificationProcess.css";

const OtpVerificationProcess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/set-new-password");
    }, 3000);
  }, [navigate]);

  return (
    <div className="otp-process-container">
      <div className="otp-process-box">
        <p>Verifying OTP...</p>
        <div className="otp-stars">
          <span>*</span>
          <span>*</span>
          <span>*</span>
          <span>*</span>
        </div>
        <p className="processing-text">Please wait...</p>
      </div>
    </div>
  );
};

export default OtpVerificationProcess;
