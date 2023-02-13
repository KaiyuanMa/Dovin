import React, { useEffect, useState } from "react";
import {
  apiAddAddress,
  apiGetAAddress,
  apiUpdateAddress,
  apiDeleteAddress,
} from "../../api/address";
import { useParams, useNavigate } from "react-router-dom";

function AddressForm() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const { addressId } = useParams();

  const fetchAddress = async () => {
    try {
      const { data } = await apiGetAAddress(addressId);
      setNickName(data.NickName);
      setFirstName(data.FirstName);
      setLastName(data.LastName);
      setAddress1(data.Address1);
      setAddress2(data.Address2);
      setProvince(data.State);
      setCity(data.City);
      setZip(data.Zip);
      setPhone(data.Phone);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    if (addressId) fetchAddress();
  }, [addressId]);

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      const address = {
        NickName: nickName,
        FirstName: firstName,
        LastName: lastName,
        Address1: Address1,
        Address2: Address2,
        State: province,
        City: city,
        Zip: zip,
        Phone: phone,
      };
      if (addressId) await apiUpdateAddress(addressId, address);
      else await apiAddAddress(address);
      navigate("/UserControl/address");
    } catch (ex) {
      console.log(ex);
    }
  };

  const handelDelete = async () => {
    try {
      await apiDeleteAddress(addressId);
      navigate("/UserControl/address");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="user-control-sub-page | container padding-block-700">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Address
      </h2>
      <form
        onSubmit={handelSubmit}
        className="address-form | flow-500 fw-semi-bold"
      >
        <label>Nick Name *</label>
        <input
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          required
        />
        <label>First Name *</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last Name *</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Address 1 *</label>
        <input
          value={Address1}
          onChange={(e) => setAddress1(e.target.value)}
          required
        />
        <label>Address 2</label>
        <input value={Address2} onChange={(e) => setAddress2(e.target.value)} />
        <label>State *</label>
        <input
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          required
        />
        <label>City *</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label>Zip Code *</label>
        <input value={zip} onChange={(e) => setZip(e.target.value)} required />
        <label>Phone Number *</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button>Save Address</button>
      </form>
      {addressId ? (
        <button className="button-delete" onClick={handelDelete}>
          Delete Address
        </button>
      ) : null}
    </div>
  );
}

export default AddressForm;
