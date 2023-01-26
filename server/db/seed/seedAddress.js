const { Address } = require("../index");

const seedAddress = async (users) => {
  try {
    const _Address = [
      {
        name: "home",
        streetAddress: "1234 E Street Dr",
        AptNumber: "1",
        State: "CA",
        Zip: "1234",
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
