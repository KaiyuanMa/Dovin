import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Login />
      <Logout /> */}
      {/* <SignUp /> */}
      <Navigation />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/customization/:customizationId"
            element={<Customization />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
