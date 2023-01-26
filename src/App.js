import React from "react";
import UserControl from "./components/UserControl";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import { Route, Routes, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { exchangeToken } from "./state/actionCreators/sessionAC";

function App() {
  const dispatch = useDispatch();
  dispatch(exchangeToken());
  return (
    <div className="page">
      <Navigation />
      <main className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/customization/:customizationId"
            element={<Customization />}
          />
          <Route path="/UserControl" element={<UserControl />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
