const conn = require("./conn");
const User = require("./User");
const StepSet = require("./StepSet");
const Step = require("./Step");
const Quote = require("./Quote");
const QuoteItem = require("./QuoteItem");
const Option = require("./Option");

User.hasMany(Quote);
Quote.hasMany(QuoteItem);
StepSet.hasOne(Step);
Step.hasMany(Option);
Step.hasOne(Step);
Option.hasMany(QuoteItem);

module.exports = {
  conn,
  User,
  Quote,
  Step,
  StepSet,
  Option,
};
