import React, { useState } from "react";
import "../Users/CreateUser.css";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    password: "",
    confirmPassword: "",
    permissions: [],
  });

  const [errors, setErrors] = useState({});
  const roles = ["Admin 1", "Admin 2", "Admin 3", "Admin 4", "Admin 5", "Admin 6"];
  const permissionsList = ["Inventory", "Sales", "Report", "Users"];

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        newErrors.email = "Invalid email format.";
    }

    if (!formData.role) newErrors.role = "Select a role.";

    // Password Validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Permissions
    if (formData.permissions.length === 0) {
      newErrors.permissions = "Select at least one permission.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  // Checkbox handler
  const handleCheckbox = (permission) => {
    let updatedPermissions = [...formData.permissions];

    if (updatedPermissions.includes(permission)) {
      updatedPermissions = updatedPermissions.filter((p) => p !== permission);
    } else {
      updatedPermissions.push(permission);
    }

    setFormData({ ...formData, permissions: updatedPermissions });
  };

  // Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     alert("Staff member details are valid!"); // Placeholder for further action
  //     setFormData({
  //       name: "",
  //       email: "",
  //       role: "",
  //       phone: "",
  //       password: "",
  //       confirmPassword: "",
  //       permissions: [],
  //     });
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const res = await axios.post("http://localhost:5000/api/users/create", formData);

    alert(res.data.message);

    setFormData({
      name: "",
      email: "",
      role: "",
      phone: "",
      password: "",
      confirmPassword: "",
      permissions: [],
    });
  } catch (error) {
    alert(error.response?.data?.message || "Error occurred!");
  }
};



  return (
    <div className="staff-form-container">
      <h2>Create User</h2>
      <form className="staff-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter staff name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>
            Confirm Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Role <span className="required">*</span>
          </label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        <div className="form-group">
          <label>
            Permissions <span className="required">*</span>
          </label>

          <div className="checkbox-group">
            {permissionsList.map((perm) => (
              <label key={perm} className="checkbox-item permission-item">
                <input
                  type="checkbox"
                  checked={formData.permissions.includes(perm)}
                  onChange={() => handleCheckbox(perm)}
                />
                {perm}
              </label>
            ))}
          </div>

          {errors.permissions && (
            <span className="error">{errors.permissions}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="text"
            name="phone"
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Add Staff Member
        </button>
      </form>
    </div>
  );
};

export default CreateUser;


