import React, { useState } from "react";
import { apiSignUp } from "../api/session";
import { useDispatch } from "react-redux";
import { login } from "../state/actionCreators/sessionAC";

function SignUp() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiSignUp({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      const credentials = response.data;
      dispatch(login(credentials));
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div>
      <form onSubmit={handelSignUp}>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>signup</button>
      </form>
    </div>
  );
}

export default SignUp;
