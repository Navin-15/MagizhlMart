// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import "../Inventory/Customers.css";

// const ManageCustomers = () => {
//   const [customers, setCustomers] = useState([]);

//   const fetchCustomers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/customers");
//       setCustomers(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   return (
//     <div className="customer-list-container">
//       <h2>Manage Customers</h2>
//       {customers.length === 0 ? (
//         <p>No customers found.</p>
//       ) : (
//         <table className="customer-table">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Shipping Address</th>
//               <th>Billing Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer._id}>
//                 <td>{customer.firstName}</td>
//                 <td>{customer.lastName}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.phone}</td>
//                 <td>{customer.shippingAddress}</td>
//                 <td>{customer.billingAddress}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ManageCustomers;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Inventory/ManageCustomer.css";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/customers");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="manage-customer-container">
      <h2 className="text-light">Manage Customers</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="customer-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Shipping Address</th>
                <th>Billing Address</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.shippingAddress}</td>
                  <td>{customer.billingAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageCustomers;
