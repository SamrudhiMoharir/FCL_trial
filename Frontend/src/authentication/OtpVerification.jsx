import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpVerification.css";

import { useAuthStore } from "../store/useAuthStore";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const { verifyMail, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const verificationCode = otp.join("");    
    console.log("code submitted is", verificationCode)

    try {
      await verifyMail(verificationCode);
      navigate("/otp-verification-process");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <p>We sent a reset link to example@gmail.com</p>
        <p>Enter the 6-digit code mentioned in the email</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <button type="submit">Verify OTP</button>
        </form>
        <p>
          Haven't got the email yet? <a href="/">Resend email</a>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
