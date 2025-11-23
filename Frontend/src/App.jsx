// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import TopBar from "./Topbar/TopBar";
import CreateUser from './Modules/Users/CreateUser'
import ManageUser from './Modules/Users/ManageUser';
// import CreateTransaction from './Modules/Transactions/CreateTransaction';
// import CreateStaff from './Modules/Staffs/CreateStaff';
// import ManageBooks from './Modules/Books/ManageBooks';
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
        {/* <Route path="/create-transaction" element={<CreateTransaction />} /> */}
        {/* <Route path="/create-staff" element={<CreateStaff />} /> */}

        {/* <Route path="/manage-book" element={<ManageBooks />} /> */}
        {/* <Route path="/manage-member" element={<ManageMembers />} /> */}
        {/* <Route path="/manage-transaction" element={<ManageTransactions />} /> */}
        {/* <Route path="/manage-staff" element={<ManageStaffs />} /> */}
        {/* Add more routes here */}
      </Routes>
  </>    
  );
};

export default App;
