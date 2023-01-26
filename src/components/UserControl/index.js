import React from "react";
import { useSelector } from "react-redux";
import LoginSignup from "./LoginSignup";
import UserProfile from "./UserProfile";

function index() {
  const { session } = useSelector((state) => state.session);
  return (
    <div className="bg-neutral-300 padding-block-900 fw-light ff-body">
      {session.id ? <UserProfile session={session} /> : <LoginSignup />}
    </div>
  );
}

export default index;
