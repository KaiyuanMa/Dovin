import React, { useState } from "react";
import { apiSignUp } from "../../../api/session";
import { useDispatch } from "react-redux";

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
    <form
      onSubmit={handelSignUp}
      className="user-form flow-200 | flex-v-center"
    >
      <div className="flex-v-center name-input">
        <div className="flow-400">
          <label>First Name *</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flow-400">
          <label>Last Name *</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <label>Email *</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password *</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm Password *</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="sign-up">Signup</button>
    </form>
  );
}

export default SignUp;
