// // components/Sidebar.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const navigate = useNavigate();
//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <aside className="sidebar">
//       <ul className="nav flex-column">

//         {/* Inventory */}
//         <li className="nav-item">
//           <div className="nav-link" onClick={() => toggleMenu("inventory")}>
//             Inventory
//           </div>
//           {openMenu === "inventory" && (
//             <ul className="submenu">
//               <li onClick={() => navigate("/customers")} >Customers</li>
//             </ul>
//           )}
//         </li>

//         {/* Sales */}
//         <li className="nav-item">
//           <div className="nav-link" onClick={() => toggleMenu("sales")}>
//             Sales
//           </div>
//           {openMenu === "sales" && (
//             <ul className="submenu">
//               <li onClick={() => navigate("/billing")} >Billing</li>
//             </ul>
//           )}
//         </li>

//         {/* Reports */}
//         <li className="nav-item">
//           <div className="nav-link" onClick={() => toggleMenu("reports")}>
//             Reports
//           </div>
//           {openMenu === "reports" && (
//             <ul className="submenu">
//               <li onClick={() => navigate("/sales-report")} >Sales</li>
//               <li onClick={() => navigate("/product-report")} >Products</li>
//             </ul>
//           )}
//         </li>

//         {/* Users */}
//         <li className="nav-item">
//           <div className="nav-link" onClick={() => toggleMenu("users")}>
//             Users
//           </div>
//           {openMenu === "users" && (
//             <ul className="submenu">
//               <li onClick={() => navigate("/create-user")} >Create Users</li>
//               <li onClick={() => navigate("/manage-user")} >Manage Users</li>
//             </ul>
//           )}
//         </li>

//         {/* Updates */}
//         <li className="nav-item">
//           <div className="nav-link" onClick={() => toggleMenu("updates")}>
//             Updates
//           </div>
//           {openMenu === "updates" && (
//             <ul className="submenu">
//               <li onClick={() => navigate("/updates")} >Its for you</li>
//             </ul>
//           )}
//         </li>

//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();

  const toggleModule = (module) => {
    setActiveModule(activeModule === module ? null : module);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Magizhl Mart</h2>

      {/* Inventory */}
      <div className="module">
        <div className="module-title" onClick={() => toggleModule("inventory")}>
          📚 Inventory
        </div>
        {activeModule === "inventory" && (
          <ul className="submodules">
            <li onClick={() => navigate("/customers")}>Customers</li>
            {/* <li onClick={() => navigate("/manage-book")}>Manage Books</li> */}
          </ul>
        )}
      </div>

      {/* Sales Module */}
      <div className="module">
        <div className="module-title" onClick={() => toggleModule("sales")}>
          👥 Sales
        </div>
        {activeModule === "sales" && (
          <ul className="submodules">
            <li onClick={() => navigate("/billing")}>Billing</li>
            {/* <li onClick={() => navigate("/manage-member")}>Manage Members</li> */}
          </ul>
        )}
      </div>

      {/* Report Module */}
      <div className="module">
        <div
          className="module-title"
          onClick={() => toggleModule("report")}
        >
          💳 Report
        </div>
        {activeModule === "report" && (
          <ul className="submodules">
            {/* <li>Issue Book</li> */}
            <li onClick={() => navigate("/sales")}>Sales</li>
            <li onClick={() => navigate("/product")}>Product</li>
          </ul>
        )}
      </div>

      {/* User Members Module */}
      <div className="module">
        <div className="module-title" onClick={() => toggleModule("user")}>
          🧑‍💼 Users
        </div>
        {activeModule === "user" && (
          <ul className="submodules">
            <li onClick={() => navigate("/create-user")}>Add User</li>
            <li onClick={() => navigate("/manage-user")}>Manage User</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;