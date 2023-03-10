const conn = require("./conn");
const User = require("./User");
const Address = require("./Address");
const StepSet = require("./StepSet");
const Step = require("./Step");
const Quote = require("./Quote");
const QuoteItem = require("./QuoteItem");
const Option = require("./Option");
const OrderStatus = require("./OrderStatus");

User.hasMany(Quote);
User.hasMany(Address);
Quote.hasMany(QuoteItem, { onDelete: "CASCADE" });
Quote.belongsTo(OrderStatus, { foreignKey: "orderStateId", as: "orderState" });
StepSet.hasMany(Quote);
StepSet.hasOne(Step);
Step.hasMany(Option);
Step.hasOne(Step);
Step.hasMany(QuoteItem);
Option.hasMany(QuoteItem);

module.exports = {
  conn,
  User,
  Address,
  Quote,
  Step,
  StepSet,
  Option,
  QuoteItem,
  OrderStatus,
};
