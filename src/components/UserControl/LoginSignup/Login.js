import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { login } from "../../../state/actionCreators/sessionAC";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };
  return (
    <form onSubmit={handelLogin} className="user-form flow-400 | flex-v-center">
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}

export default Login;
