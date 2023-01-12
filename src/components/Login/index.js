import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/actionCreators/sessionAC";

function index() {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.session);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };

  return (
    <div>
      <form onSubmit={handelLogin}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
      <button onClick={() => console.log(session)}>Show User</button>
    </div>
  );
}

export default index;
