const { Address } = require("../index");

const seedAddress = async (users) => {
  try {
    const _Address = [
      {
        NickName: "home",
        FirstName: "John",
        LastName: "Smith",
        Address1: "1234 E Street Dr",
        Address2: "Apt 1",
        State: "CA",
        City: "St Anna",
        Zip: "1234",
        Phone: "1231231234",
        userId: users[0].id,
      },
    ];
    const addresses = await Promise.all(
      _Address.map((address) => Address.create(address))
    );
    return addresses;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedAddress;
