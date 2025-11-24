// import React, { useState } from "react";
// import "../Sales/Billing.css";

// const Billing = () => {
//   const [formData, setFormData] = useState({
//     customer: "",
//     branch: "Head Office",
//     invoiceNo: "INV-001",
//     orderNumber: "",
//     invoiceDate: "2022-12-15",
//     terms: "Due on Receipt",
//     dueDate: "2022-12-15",
//     subject: ""
//   });

//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     // Check if the "Add New Customer" option was selected
//     if (name === "customer" && value === "NEW_CUSTOMER") {
//       // TODO: Implement logic to open a modal/form for adding a new customer
//       console.log("User wants to add a New Customer!");
//       
//       // Optionally, keep the current customer selection or reset it
//       // For now, we'll keep the value as it was before they clicked "New Customer"
//       // OR you can set it to the default empty string: 
//       // setFormData({ ...formData, [name]: "" });
//       return; // Stop the standard state update for this special value
//     }

//     // setFormData({ ...formData, [e.target.name]: e.target.value });
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="invoice-container">
//       <h2 className="title">New Invoice</h2>

//       {/* CUSTOMER NAME */}
//       <div className="form-group">
//         <label>Customer Name <span className="required">*</span></label>
//         <div className="customer-input-wrapper">
//           <select
//             name="customer"
//             value={formData.customer}
//             onChange={handleChange}
//           >
//             <option value="">Select Customer</option>
//             <option value="Customer A">Customer A</option>
//             <option value="Customer B">Customer B</option>
//             <option value="NEW_CUSTOMER" className="new-customer-option">+ New Customer</option>
//           </select>
//           <button className="search-btn">🔍</button>
//         </div>
//       </div>

//       {/* BRANCH */}
//       <div className="form-group">
//         <label>Branch</label>
//         <select
//           name="branch"
//           value={formData.branch}
//           onChange={handleChange}
//         >
//           <option value="Head Office">Head Office</option>
//           <option value="Branch 1">Branch 1</option>
//         </select>
//         <div className="subtext">Source of Supply: Tamil Nadu</div>
//       </div>

//       {/* INVOICE INFO */}
//       <div className="row">
//         <div className="col">
//           <label>Invoice #</label>
//           <input
//             type="text"
//             name="invoiceNo"
//             value={formData.invoiceNo}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="col">
//           <label>Order Number</label>
//           <input
//             type="text"
//             name="orderNumber"
//             value={formData.orderNumber}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* DATE + TERMS */}
//       <div className="row">
//         <div className="col">
//           <label>Invoice Date</label>
//           <input
//             type="date"
//             name="invoiceDate"
//             value={formData.invoiceDate}
//             onChange={handleChange}
//           />
//           <div className="small-link">
//             To create transaction dated before 01/07/2017, <a href="#!">click here</a>
//           </div>
//         </div>

//         <div className="col">
//           <label>Terms</label>
//           <select
//             name="terms"
//             value={formData.terms}
//             onChange={handleChange}
//           >
//             <option value="Due on Receipt">Due on Receipt</option>
//             <option value="Net 15">Net 15</option>
//             <option value="Net 30">Net 30</option>
//           </select>
//         </div>

//         <div className="col">
//           <label>Due Date</label>
//           <input
//             type="date"
//             name="dueDate"
//             value={formData.dueDate}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* SUBJECT */}
//       <div className="form-group">
//         <label>Subject</label>
//         <input
//           type="text"
//           name="subject"
//           placeholder="Let your customer know what this invoice is for"
//           value={formData.subject}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Billing;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../Sales/Billing.css";

const Billing = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    customer: "",
    branch: "Head Office",
    invoiceNo: "INV-001",
    orderNumber: "",
    invoiceDate: "2022-12-15",
    terms: "Due on Receipt",
    dueDate: "2022-12-15",
    subject: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the "Add New Customer" option was selected
    if (name === "customer" && value === "NEW_CUSTOMER") {
      // Redirect to Customer component/form
      navigate("/new-customers"); // Assuming your route for Customer component is "/customer"
      return; // Stop updating state
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="invoice-container">
      <h2 className="title">New Invoice</h2>

      {/* CUSTOMER NAME */}
      <div className="form-group">
        <label>Customer Name <span className="required">*</span></label>
        <div className="customer-input-wrapper">
          <select
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          >
            <option value="">Select Customer</option>
            <option value="Customer A">Customer A</option>
            <option value="Customer B">Customer B</option>
            <option value="NEW_CUSTOMER" className="new-customer-option">+ New Customer</option>
          </select>
          <button className="search-btn">🔍</button>
        </div>
      </div>

      {/* BRANCH */}
      <div className="form-group">
        <label>Branch</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          <option value="Head Office">Head Office</option>
          <option value="Branch 1">Branch 1</option>
        </select>
        <div className="subtext">Source of Supply: Tamil Nadu</div>
      </div>

      {/* INVOICE INFO */}
      <div className="row">
        <div className="col">
          <label>Invoice #</label>
          <input
            type="text"
            name="invoiceNo"
            value={formData.invoiceNo}
            onChange={handleChange}
          />
        </div>

        <div className="col">
          <label>Order Number</label>
          <input
            type="text"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* DATE + TERMS */}
      <div className="row">
        <div className="col">
          <label>Invoice Date</label>
          <input
            type="date"
            name="invoiceDate"
            value={formData.invoiceDate}
            onChange={handleChange}
          />
          <div className="small-link">
            To create transaction dated before 01/07/2017, <a href="#!">click here</a>
          </div>
        </div>

        <div className="col">
          <label>Terms</label>
          <select
            name="terms"
            value={formData.terms}
            onChange={handleChange}
          >
            <option value="Due on Receipt">Due on Receipt</option>
            <option value="Net 15">Net 15</option>
            <option value="Net 30">Net 30</option>
          </select>
        </div>

        <div className="col">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* SUBJECT */}
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Let your customer know what this invoice is for"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Billing;
