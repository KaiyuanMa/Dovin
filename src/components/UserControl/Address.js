import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div className="padding-block-700">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Address
      </h2>
      <Link to="/UserControl/address-form">
        <button>Add Address</button>
      </Link>
    </div>
  );
}

export default Address;
