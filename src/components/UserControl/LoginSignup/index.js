import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../state/actionCreators/sessionAC";

function index() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };

  return (
    <div className="user-form-container | flow-400 ff-body fs-body">
      <div className="user-form-control | flex-h-center">
        <div onClick={() => setIsLogin(true)}>Login</div>
        <div onClick={() => setIsLogin(false)}>New User</div>
      </div>
      {isLogin ? (
        <form
          onSubmit={handelLogin}
          className="user-form flow-400 | flex-v-center"
        >
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      ) : (
        <form></form>
      )}
    </div>
  );
}

export default index;
