import React, { useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { exchangeToken } from "./state/actionCreators/sessionAC";
import "./styles.css";

import UserControl from "./components/UserControl";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import Dashboard from "./components/UserControl/Dashboard";
import ViewAppointment from "./components/UserControl/ViewAppointment";
import Address from "./components/UserControl/Address";
import AddressForm from "./components/UserControl/AddressForm";
import Order from "./components/UserControl/Order";
import LoginSignup from "./components/LoginSignup";
import Cart from "./components/Cart";
import { PopupWidget } from "react-calendly";

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
          <Route path="/editQuote/:quoteId" element={<Customization />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/UserControl" element={<UserControl />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />} />
            <Route path="appointment" element={<ViewAppointment />} />
            <Route path="address" element={<Address />} />
            <Route path="edit-address/:addressId" element={<AddressForm />} />
            <Route path="address-form" element={<AddressForm />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <PopupWidget
        url="https://calendly.com/kaiyuanma/just-some-chitchat"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Appointment"
        textColor="#ffffff"
        color="#242222"
        border="1px solid white"
      />
    </div>
  );
}

export default App;
