import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const Password = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const sendOtpEmail = (otp) => {
    const serviceID = "service_hu3qmes";
    const templateID = "template_cup6mir";
    const userID = "Hd9DIZYRHa3msVnLy";
    const templateParams = {
      to_email: email,
      from_name: "EmailJS OTP Service",
      otp: otp,
    };

    return emailjs.send(serviceID, templateID, templateParams, userID);
  };

  const handleSendOtp = async () => {
    if (!email) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setErrorMessage("");

    try {
      await sendOtpEmail(newOtp);
      alert("OTP sent successfully! Check your email.");
      setOtpSent(true);
    } catch (error) {
      setErrorMessage("Failed to send OTP. Please try again.");
      console.error("Failed to send OTP:", error);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert("OTP verified successfully!");
      navigate("/CreateNewPassword");
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="password-container">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      {errorMessage && <p>{errorMessage}</p>}

      {otpSent && (
        <div className="otp">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Password;
