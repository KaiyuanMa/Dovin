import React, { useState } from "react";
import { apiSignUp } from "../../api/session";
import { login } from "../../state/actionCreators/sessionAC";
import { useDispatch } from "react-redux";
import "./styles.css";

function SignUp() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handelSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else if (
      password.length > 16 ||
      password.length < 8 ||
      !/[A-Z]/.test(password)
    ) {
      setErrorMessage("password constraint");
    } else if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match.");
    } else {
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
    }
  };
  return (
    <form
      onSubmit={handelSignUp}
      className="user-form flow-200 | flex-h-center"
    >
      <div className="ff-body border-bottom padding-block-400">
        <h2 className="ff-body fs-primary-heading fw-xLight">New Customer?</h2>
        <p className="fw-light text-neutral-700">
          Sign up to track your orders, create wish lists and more
        </p>
      </div>
      <div className="flex-h-center name-input">
        <div className="flow-400">
          <label>First Name *</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="flow-400">
          <label>Last Name *</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <label>Email *</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {errorMessage === "Please enter a valid email address." ? (
        <p className="user-form-error">{errorMessage}</p>
      ) : null}
      <label>Password *</label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <p
        className={`user-form-error ${
          errorMessage === "password constraint" ? "" : "password-constraint"
        }`}
      >
        Password must be between 8 to 16 characters and include one uppercase
        letter.
      </p>
      <label>Confirm Password *</label>
      <input
        value={passwordConfirm}
        type="password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      {errorMessage === "Passwords do not match." ? (
        <p className="user-form-error">{errorMessage}</p>
      ) : null}
      <button className="sign-up">Signup</button>
    </form>
  );
}

export default SignUp;
