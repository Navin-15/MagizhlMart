import React from "react";
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import "../Components/Dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="dashboard-container">
        <Sidebar/> <Header/>
      <div className="dashboard-header shadow">
        <h2>📊 Dashboard</h2>
        <div className="staff-info">
          <span>Welcome, {user?.name}</span>
          <span className="role">{user?.role}</span>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="card-box">
          <h4>Module 1</h4>
          <p>1,240</p>
        </div>

        <div className="card-box">
          <h4>Module 2</h4>
          <p>980</p>
        </div>

        <div className="card-box">
          <h4>Module 3</h4>
          <p>320</p>
        </div>

        <div className="card-box">
          <h4>Module 4</h4>
          <p>24</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;