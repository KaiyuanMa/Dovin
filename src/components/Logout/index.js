import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../state/actionCreators/sessionAC";

function index() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default index;
