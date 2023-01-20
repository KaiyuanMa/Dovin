import React, { useEffect, useState } from "react";
import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";

function index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="user-form-container | flow-400 ff-body fs-body">
      <div className="user-form-control | flex-h-center">
        <div onClick={() => setIsLogin(true)}>Login</div>
        <div onClick={() => setIsLogin(false)}>New User</div>
      </div>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default index;
