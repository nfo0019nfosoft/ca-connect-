import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaUserTag,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./Admin.css";
import adminImg from "../assets/admin.png";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "admin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.user.userType);

        if (data.user.userType === "admin") {
          navigate("/admin-dashboard");
        } else if (data.user.userType === "vendor") {
          navigate("/vendor-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
   <div className="login-page">
  <div className="login-container">

    <div className="login-left">
      <img
        src={adminImg}
        alt="Admin"
        className="admin-image"
      />
    </div>

    <div className="login-right">

      <div className="login-card">

        <div className="login-icon">
          <FaUserShield />
        </div>

        <h2 className="login-title">
          Sign In to Your Account
        </h2>

        <p className="login-subtitle">
          Access the CA Connect Admin Portal
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <label>Password</label>

          <div className="input-box">
            <FaLock />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />}
            </span>

          </div>

          <label>User Type</label>

          <div className="input-box">
            <FaUserTag />

            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="admin">
                Admin
              </option>

              <option value="vendor">
                Vendor
              </option>

              <option value="user">
                User
              </option>
            </select>
          </div>

          <div className="remember-box">
            <input type="checkbox" />
            <span>
              Remember Me
            </span>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Sign In
          </button>

        </form>

        <div className="secure-box">
          <FaLock />

          <div>
            <h4>
              Secure Access
            </h4>

            <p>
              Your information is protected
              with advanced encryption.
            </p>
          </div>
        </div>
<div className="login-footer">
  <div className="footer-bottom">
    <p>
      © 2026 CA Platform. All Rights Reserved.
    </p>

    <div className="footer-links">
      <a href="/privacy-policy">
        Privacy Policy
      </a>

      <a href="/terms">
        Terms & Conditions
      </a>
    </div>
  </div>
</div>

      </div>

    </div>

  </div>
</div>
  );
}

export default Login;