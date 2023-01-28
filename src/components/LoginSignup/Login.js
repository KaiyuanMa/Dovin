import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { login } from "../../state/actionCreators/sessionAC";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };
  return (
    <form onSubmit={handelLogin} className="user-form flow-400 | flex-h-center">
      <div className="ff-body border-bottom padding-block-400">
        <h2 className="ff-body fs-primary-heading fw-xLight">Welcome Back</h2>
        <p className="fw-light text-neutral-700">
          Sign in to check order status or view order history
        </p>
      </div>
      <label>Email *</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password *</label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="user-form-tools | flex-v-center fs-body">
        {/* TODO: Finish these two functions */}
        <div className="flex-v-center">
          <input type="checkbox" name="remember" />
          <label for="remember"> Remember me</label>
        </div>
        <Link>Forgot Password</Link>
      </div>
      <button>Login</button>
    </form>
  );
}

export default Login;
