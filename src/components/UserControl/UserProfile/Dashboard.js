import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { session } = useSelector((state) => state.session);
  return (
    <div>
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Dashboard
      </h2>
      <div className="user-dashboard">
        <div className="user-order user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Orders</h2>
        </div>
        <div className="user-address user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Address Book</h2>
        </div>
        <div className="user-appointment user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Appointments</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
