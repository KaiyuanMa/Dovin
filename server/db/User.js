const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, ENUM } = Sequelize;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = conn.define("user", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  email: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: ENUM,
    values: ["superAdmin", "admin", "customer"],
    defaultValue: "customer",
  },
});

//Hash Before Password
User.addHook("beforeSave", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

//TODO
// User.beforeCreate(async (user) => {
//   if (user.role === "superAdmin") {
//     throw new Error("SuperAdmin can only be assigned on existing admin");
//   }
// });

User.findByToken = async function findByToken(token) {
  try {
    const id = jwt.verify(token, process.env.JWT).id;
    const user = await User.findByPk(id, {
      attributes: { exclude: "password" },
    });
    if (!user) {
      throw "error";
    }
    return user;
  } catch (ex) {
    console.log(ex);
    const error = new Error("bad token");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async function (credentials) {
  const user = await this.findOne({
    where: {
      email: credentials.email,
    },
  });
  if (user && (await bcrypt.compare(credentials.password, user.password))) {
    return jwt.sign({ id: user.id }, process.env.JWT);
  }
  const error = new Error("Email and password does not match");
  error.status = 401;
  throw error;
};

module.exports = User;
