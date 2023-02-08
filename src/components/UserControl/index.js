import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/actionCreators/sessionAC";
import { emptyCartAC } from "../../state/actionCreators/cartAC";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { session } = useSelector((state) => state.session);
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(emptyCartAC());
  };
  useEffect(() => {
    if (!session.id) navigate("/loginSignup");
  }, [session]);
  return (
    <div className="user-profile | container flex-h-center ff-body">
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
