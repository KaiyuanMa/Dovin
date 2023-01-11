const conn = require("./conn");
const User = require("./User");
const Step = require("./Step");
const Quote = require("./Quote");
const QuoteItem = require("./QuoteItem");
const Option = require("./Option");

User.hasMany(Quote);
Quote.hasMany(QuoteItem);
Step.hasMany(Option);
Option.hasMany(QuoteItem);

module.exports = {
  conn,
  User,
  Quote,
  Step,
  Option,
};
