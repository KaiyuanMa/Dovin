const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Quote, QuoteItem, Step, Option } = require("../db");

const getAllInfo = async (quotes) => {
  const newQuotes = [];
  for (let quote of quotes) {
    for (let quoteItem of quote.quoteItems) {
      if (quoteItem.measurement !== null) {
        const step = await Step.findByPk(quoteItem.stepId);
        const option = await Option.findByPk(quoteItem.optionId);
        quoteItem.dataValues.step = step;
        quoteItem.dataValues.option = option;
        delete quoteItem.dataValues.stepId;
        delete quoteItem.dataValues.optionId;
      }
    }
    newQuotes.push(quote);
  }
  return newQuotes;
};

//GET
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const quotes = await Quote.findAll({
      where: { userId: req.user.id },
      include: QuoteItem,
    });
    const _quotes = await getAllInfo(quotes);
    res.send(_quotes);
  } catch (ex) {
    next(ex);
  }
});

router.get("/order", isLoggedIn, async (req, res, next) => {
  try {
    const quotes = await Quote.findAll({
      where: { userId: req.user.id, isCart: false },
      include: QuoteItem,
    });
    const _quotes = await getAllInfo(quotes);
    res.send(_quotes);
  } catch (ex) {
    next(ex);
  }
});

router.get("/cart", isLoggedIn, async (req, res, next) => {
  try {
    const quotes = await Quote.findAll({
      where: { userId: req.user.id, isCart: true },
      include: QuoteItem,
    });
    const _quotes = await getAllInfo(quotes);
    res.send(_quotes);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:quoteId", isLoggedIn, async (req, res, next) => {
  try {
    const quote = await Quote.findByPk(req.params.quoteId);
    if (quote.userId !== req.user.id)
      return res.status(403).json({ error: "No Access" });
    const _quotes = await getAllInfo([quote]);
    res.send(_quotes);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:quoteId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const quote = await Quote.findByPk(req.params.quoteId);
    quote.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    if (req.body.userId !== req.user.id)
      return res.status(403).json({ error: "No Access" });
    const quote = await Quote.create(req.body);
    res.send(quote);
  } catch (ex) {
    next(ex);
  }
});

//PUT
//TODO: what can be changed what can not?
router.put("/:quoteId", isLoggedIn, async (req, res, next) => {
  try {
    const quote = await Quote.update(req.body, {
      where: { id: req.params.quoteId },
    });
    res.send(quote);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
