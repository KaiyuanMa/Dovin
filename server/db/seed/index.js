const { conn } = require("../index");
const seedUser = require("./seedUser");
const seedStepSet = require("./seedStepSet");
const seedStep = require("./seedStep");
const seedOptions = require("./seedOption");

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    const users = await seedUser();
    const stepSets = await seedStepSet();
    const steps = await seedStep(stepSets);
    const options = await seedOptions(steps);
  } catch (ex) {
    console.log(ex);
  }
};

syncAndSeed();
