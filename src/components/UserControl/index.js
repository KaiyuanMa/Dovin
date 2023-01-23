import React from "react";
import { useSelector } from "react-redux";
import LoginSignup from "./LoginSignup";
import UserProfile from "./UserProfile";

function index() {
  const { session } = useSelector((state) => state.session);
  return (
    <div className="bg-neutral-300 padding-block-900 fw-semi-bold">
      {session.id ? <UserProfile /> : <LoginSignup />}
    </div>
  );
}

export default index;
