const { User } = require("../index");

const _Users = [
  {
    email: "foo@gmail.com",
    password: "foo",
    firstName: "foo",
    lastName: "fooLast",
  },
  {
    email: "bar@gmail.com",
    password: "bar",
    firstName: "bar",
    lastName: "barLast",
  },
  {
    email: "qwe@qwe.com",
    password: "qwe",
    firstName: "qwe",
    lastName: "qwe",
    role: "superAdmin",
  },
];

const seedUser = async () => {
  try {
    const Users = await Promise.all(_Users.map((user) => User.create(user)));
    return Users;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedUser;
