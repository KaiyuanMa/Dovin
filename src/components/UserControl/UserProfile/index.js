import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../state/actionCreators/sessionAC";

import { Route, Routes, NavLink, Outlet } from "react-router-dom";

function index(params) {
  const session = params.session;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="user-profile | container flex-h-center">
      <div className="user-nav flow-400">
        <h2 className="ff-heading fw-light">{`Welcome ${session.firstName}`}</h2>
        <NavLink to="/UserControl/dashboard">Dashboard</NavLink>
        <NavLink to="/UserControl/order">Orders</NavLink>
        <NavLink to="/UserControl/appointment">Appointments</NavLink>
        <NavLink to="/UserControl/address">Address Book</NavLink>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <Outlet />
    </div>
  );
}

export default index;
