import React, { useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { exchangeToken } from "./state/actionCreators/sessionAC";

import UserControl from "./components/UserControl";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import Dashboard from "./components/UserControl/Dashboard";
import Appointment from "./components/UserControl/Appointment";
import Address from "./components/UserControl/Address";
import Order from "./components/UserControl/Order";
import LoginSignup from "./components/LoginSignup";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exchangeToken());
  }, []);
  return (
    <div className="page">
      <Navigation />
      <main className="content | bg-neutral-200 ff-body fs-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/customization/:customizationId"
            element={<Customization />}
          />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/UserControl" element={<UserControl />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
