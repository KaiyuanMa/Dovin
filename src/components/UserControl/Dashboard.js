import React, { useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [appointments, setAppointments] = useState([]);

  return (
    <div className="padding-block-700">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Dashboard
      </h2>
      <div className="user-dashboard">
        <div className="user-order user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Orders</h2>
          {orders.length > 0 ? (
            <ul role="list">
              {orders.map((order) => {
                <li>order.id</li>;
              })}
            </ul>
          ) : (
            <p>Looks like you don't have any orders.</p>
          )}
        </div>
        <div className="user-address user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Address Book</h2>
          {addresses.length > 0 ? (
            <ul role="list">
              {addresses.map((order) => {
                <li>addresses.id</li>;
              })}
            </ul>
          ) : (
            <p>Looks like you don't have any addresses.</p>
          )}
        </div>
        <div className="user-appointment user-dashboard-item">
          <h2 className="ff-heading fw-light border-bottom">Appointments</h2>
          {appointments.length > 0 ? (
            <ul role="list">
              {appointments.map((order) => {
                <li>appointments.id</li>;
              })}
            </ul>
          ) : (
            <p>Looks like you don't have any appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
