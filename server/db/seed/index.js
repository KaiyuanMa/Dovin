const { conn } = require("../index");
const seedUser = require("./seedUser");

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    const user = await seedUser();
  } catch (ex) {
    console.log(ex);
  }
};

syncAndSeed();
