import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiGetAddresses } from "../../api/address";

function Address() {
  const { session } = useSelector((state) => state.session);
  const [addresses, setAddresses] = useState([]);

  const fetchData = async () => {
    let response = await apiGetAddresses();
    setAddresses(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [session]);

  return (
    <div className="padding-block-700 user-control-sub-page">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Address
      </h2>
      {addresses.length > 0 ? (
        <ul role="list" className="address-list">
          {addresses.map((address) => (
            <Link to={`/UserControl/edit-address/${address.id}`}>
              <li className="address-item">
                <h1 className="fs-secondary-heading fw-semi-bold">
                  {address.NickName}
                </h1>
                <p>
                  {address.FirstName} {address.LastName}
                </p>
                <p>
                  {address.Address1} {address.Address2}
                </p>
                <p>
                  {address.City}, {address.State} {address.Zip}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="padding-block-300">
          Looks like you haven't add any addresses.
        </p>
      )}
      <Link to="/UserControl/address-form">
        <button>Add Address</button>
      </Link>
    </div>
  );
}

export default Address;
