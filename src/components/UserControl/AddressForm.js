import React, { useState } from "react";
import { apiAddAddress } from "../../api/address";

function AddressForm() {
  const [nickName, setNickName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

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
      await apiAddAddress(address);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="container padding-block-700">
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
    </div>
  );
}

export default AddressForm;
