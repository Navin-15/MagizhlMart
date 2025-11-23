import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      temp.email = "Enter a valid email address";

    if (!password) temp.password = "Password is required";
    else if (password.length < 6)
      temp.password = "Password must be at least 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!"); // Placeholder for frontend action
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-lg p-4 rounded">
        <h3 className="text-center mb-3 login-title">Staff Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your staff email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button className="btn btn-primary w-100 login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
