const { OrderStatus } = require("../index");

const seedOrderStatus = async () => {
  try {
    const _Status = [
      { name: "pending" },
      { name: "shipped" },
      { name: "delivered" },
      { name: "cancelled" },
    ];
    await Promise.all(_Status.map((status) => OrderStatus.create(status)));
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedOrderStatus;
