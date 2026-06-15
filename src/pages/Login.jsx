import "./Login.css";
import logo from "../assets/logo.png";
import otpImg from "../assets/otp.png";

import { useState } from "react";

import PhoneInputModule from "react-phone-input-2";

const PhoneInput = PhoneInputModule.default;

import "react-phone-input-2/lib/style.css";

import {
  FaUser,
  FaBriefcase,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

function Login() {
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("user");
  
const handleOtp = async () => {
  
  console.log("PHONE SENT =>", phone);
console.log("ROLE SENT =>", userType);
  try {

    console.log("Sending phone:", phone);

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  phone,
  role: userType === "ca" ? "vendor" : "user",
}),
      }
    );

    const data = await response.json();
    

    console.log("STATUS:", response.status);
    console.log("FULL DATA:", data);

console.log("TOKEN:", data.token);

    if (data.success) {

      localStorage.setItem(
        "token",
        data.token
      );

  console.log(
    "TOKEN SAVED =>",
    localStorage.getItem("token")
  );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

    if (userType === "ca") {
  window.location.href = "/vendor-dashboard";
} else {
  window.location.href = "/";
}
    } else {

      alert(
        data.message || "Login Failed"
      );

    }

  } catch (error) {

    console.log(error);

    alert(
      "Something went wrong"
    );

  }
};
  return (
    <section className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <img src={logo} alt="CA Connect" />
        </div>

        {/* Header */}
        <div className="login-header">
          <h2>Welcome to CA Connect</h2>
          <p>Login or sign up to continue</p>
        </div>

        {/* User Types */}
        <div className="user-types">

          <div
            className={`user-type ${
              userType === "user" ? "active" : ""
            }`}
            onClick={() => setUserType("user")}
          >
            <FaUser className="user-icon" />

            <div>
              <h4>User</h4>
              <span>Looking for CA services</span>
            </div>
          </div>

          <div
            className={`user-type ${
              userType === "ca" ? "active" : ""
            }`}
            onClick={() => setUserType("ca")}
          >
            <FaBriefcase className="user-icon" />

            <div>
              <h4>CA Professional</h4>
              <span>Offering professional services</span>
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="login-form">

          <div className="form-title">
            Login / Sign Up
          </div>

          <div className="form-divider"></div>

          <div className="otp-image">
            <img
              src={otpImg}
              alt="OTP"
            />
          </div>

          <h3>
            Enter Your Mobile Number
          </h3>

          <p className="otp-desc">
            We will send you a One-Time Password (OTP)
            <br />
            to verify your number
          </p>

          {/* Phone Input */}

          <div className="phone-wrapper">
<PhoneInput
  country="in"
  enableSearch
  searchPlaceholder="Search country..."
  containerClass="phone-container"
  dropdownClass="phone-dropdown"
  value={phone}
  onChange={(value) => setPhone(value)}
/>

          </div>

         <button
  className="otp-btn"
  onClick={handleOtp}
>
Login
</button>

          <div className="secure-text">
            <FaShieldAlt />

            <span>
              Your data is safe and secure with us
            </span>
          </div>

        </div>

        {/* Footer */}

        <div className="login-features">

          <div className="feature">
            <FaShieldAlt />
            <span>
              Secure & Trusted
            </span>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <span>
              Verified Professionals
            </span>
          </div>

          <div className="feature">
            <FaHeadset />
            <span>
              24/7 Support
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Login;