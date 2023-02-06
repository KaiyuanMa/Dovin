import React, { useEffect, useState } from "react";
import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import img from "../../../public/img/550x600.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function index() {
  const navigate = useNavigate();
  const { session } = useSelector((state) => state.session);
  const [isLogin, setIsLogin] = useState(true);
  const switchForm = (toLogin) => {
    const loginBtn = document.querySelector("#form-login-btn");
    const signUpBtn = document.querySelector("#form-signup-btn");
    if (toLogin) {
      setIsLogin(true);
      loginBtn.classList.add("form-switch-active");
      signUpBtn.classList.remove("form-switch-active");
    } else {
      setIsLogin(false);
      loginBtn.classList.remove("form-switch-active");
      signUpBtn.classList.add("form-switch-active");
    }
  };

  useEffect(() => {
    if (session.id) navigate("/UserControl/dashboard");
  }, [session]);

  return (
    <div className="user-form-container | padding-block-400 fw-semi-bold">
      <div className="user-form-form | bg-neutral-400">
        <div className="user-form-control | flex-h-center">
          <div
            className="padding-block-300 form-switch-active"
            id="form-login-btn"
            onClick={() => switchForm(true)}
          >
            Sign In
          </div>
          <div
            className="padding-block-300"
            id="form-signup-btn"
            onClick={() => switchForm(false)}
          >
            New User
          </div>
        </div>
        {isLogin ? <Login /> : <Signup />}
      </div>
      <img src={img}></img>
    </div>
  );
}

export default index;
