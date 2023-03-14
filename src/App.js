import React, { useEffect, useState, useLayoutEffect } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { exchangeToken } from "./state/actionCreators/sessionAC";
import { PopupWidget } from "react-calendly";
import gsap from "gsap";

import UserControl from "./components/UserControl";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import Dashboard from "./components/UserControl/Dashboard";
import ViewAppointment from "./components/UserControl/ViewAppointment";
import Address from "./components/UserControl/Address";
import AddressForm from "./components/UserControl/AddressForm";
import Order from "./components/UserControl/Order";
import LoginSignup from "./components/LoginSignup";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    dispatch(exchangeToken());
  }, []);

  useEffect(() => {
    let isScrolling;
    let yPrev = window.pageYOffset;
    let threshold = 200;

    const handleScroll = () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        yPrev = window.pageYOffset;
      }, 100);
      if (window.pageYOffset < 40) {
        setHideNav(false);
      }
      let yChanged = window.pageYOffset - yPrev;
      if (yChanged > 0 && yChanged > threshold) {
        setHideNav(true);
      } else if (yChanged < 0 && yChanged < -threshold) {
        setHideNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideNav]);

  return (
    <div className="page | bg-neutral-200">
      <Navigation hideNav={hideNav} />
      <main className="content | bg-neutral-200 ff-body fs-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
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
            {/* <Route path="appointment" element={<ViewAppointment />} /> */}
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
