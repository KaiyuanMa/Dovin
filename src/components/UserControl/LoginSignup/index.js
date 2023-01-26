import React, { useEffect, useState } from "react";
import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import img from "../../../../public/img/550x600.png";

function index() {
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

  return (
    <div className="user-form-container | ff-body fs-body padding-block-400 fw-semi-bold">
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
