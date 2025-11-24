// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import TopBar from "./Topbar/TopBar";
import CreateUser from './Modules/Users/CreateUser'
import ManageUser from './Modules/Users/ManageUser'
import Billing from "./Modules/Sales/Billing";
import Customers from './Modules/Inventory/Customers';
import ManageCustomers from './Modules/Inventory/ManageCustomer';
// import ManageMembers from './Modules/Members/ManageMembers';
// import ManageTransactions from './Modules/Transactions/ManageTransactions';
// import ManageStaffs from './Modules/Staffs/ManageStaffs';
// import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';

const App = () => {
  return (
<>
    <TopBar/>

    <Routes>

        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/new-customers" element={<Customers />} />
        <Route path="/manage-customers" element={<ManageCustomers />} />
        {/* <Route path="/manage-member" element={<ManageMembers />} /> */}
        {/* <Route path="/manage-transaction" element={<ManageTransactions />} /> */}
        {/* <Route path="/manage-staff" element={<ManageStaffs />} /> */}
        {/* Add more routes here */}
      </Routes>
  </>    
  );
};

export default App;
