// import React, { useState } from "react";
// import "../Inventory/Customers.css";

// const Customers = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
//     tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
//     tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//       ? ""
//       : "Email is invalid.";
//     tempErrors.phone = /^\d{10}$/.test(formData.phone)
//       ? ""
//       : "Phone number should be 10 digits.";
//     tempErrors.address = formData.address ? "" : "Address is required.";
//     setErrors(tempErrors);

//     return Object.values(tempErrors).every((x) => x === "");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Customer Created Successfully!");
//       console.log(formData);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//       });
//     }
//   };

//   return (
//     <div className="customer-form-container">
//       <h2>Create Customer</h2>
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && <span className="error">{errors.firstName}</span>}
//         </div>

//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           {errors.lastName && <span className="error">{errors.lastName}</span>}
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>

//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}
//         </div>

//         <div className="form-group">
//           <label>Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//           {errors.address && <span className="error">{errors.address}</span>}
//         </div>

//         <button type="submit">Create Customer</button>
//       </form>
//     </div>
//   );
// };

// export default Customers;


import React, { useState } from "react";
import "../Inventory/Customers.css";
import axios from "axios";

const Customers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shippingAddress: "",
    billingAddress: "",
    sameAsShipping: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Email is invalid.";
    tempErrors.phone = /^\d{10}$/.test(formData.phone)
      ? ""
      : "Phone number should be 10 digits.";
    tempErrors.shippingAddress = formData.shippingAddress
      ? ""
      : "Shipping Address is required.";
    tempErrors.billingAddress = formData.billingAddress
      ? ""
      : "Billing Address is required.";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "sameAsShipping") {
      setFormData({
        ...formData,
        sameAsShipping: checked,
        billingAddress: checked ? formData.shippingAddress : "",
      });
    } else if (name === "shippingAddress" && formData.sameAsShipping) {
      // Update billing address if "same as shipping" is checked
      setFormData({
        ...formData,
        shippingAddress: value,
        billingAddress: value,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Customer Created Successfully!");
//       console.log(formData);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         shippingAddress: "",
//         billingAddress: "",
//         sameAsShipping: false,
//       });
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:5000/api/customers", formData);
        alert("Customer Created Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          shippingAddress: "",
          billingAddress: "",
          sameAsShipping: false,
        });
      } catch (err) {
        console.error(err);
        alert("Failed to create customer");
      }
    }
  };

  return (
    <div className="customer-form-container">
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Shipping Address</label>
          <textarea
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
          />
          {errors.shippingAddress && (
            <span className="error">{errors.shippingAddress}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
            />{" "}
            Billing Address same as Shipping
          </label>
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <textarea
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            disabled={formData.sameAsShipping} // Disable if same as shipping
          />
          {errors.billingAddress && (
            <span className="error">{errors.billingAddress}</span>
          )}
        </div>

        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default Customers;
