const { conn } = require("../index");
const seedUser = require("./seedUser");
const seedStep = require("./seedStep");
const seedOptions = require("./seedOption");

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    const users = await seedUser();
    const steps = await seedStep();
    const options = await seedOptions(steps);
  } catch (ex) {
    console.log(ex);
  }
};

syncAndSeed();
