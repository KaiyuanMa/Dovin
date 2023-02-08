const express = require("express");
const router = express.Router();
const { Quote, QuoteItem, Step, Option, StepSet, User } = require("../db");

const getAllInfo = async (quotes) => {
  const newQuotes = [];
  for (let quote of quotes) {
    const stepSet = await StepSet.findByPk(quote.stepSetId);
    quote.dataValues.name = stepSet.name;
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

const checkId = async (guestId) => {
  if (await User.findByPk(guestId)) {
    res.status(409).send({ message: "User exist." });
  } else return true;
};

//GET
router.get("/:guestId", async (req, res, next) => {
  try {
    if (checkId(req.params.guestId)) {
      const quotes = await Quote.findAll({
        where: { guestId: req.params.guestId },
        include: QuoteItem,
      });
      const _quotes = await getAllInfo(quotes);
      res.send(_quotes);
    }
  } catch (ex) {
    next(ex);
  }
});

router.get("/:guestId/:quoteId", async (req, res, next) => {
  try {
    if (checkId(req.params.guestId)) {
      const quotes = await Quote.findAll({
        where: { guestId: req.params.guestId, id: req.params.quoteId },
        include: QuoteItem,
      });
      const _quotes = await getAllInfo(quotes);
      res.send(_quotes);
    }
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:guestId/:quoteId", async (req, res, next) => {
  try {
    if (await checkId(req.params.guestId)) {
      console.log(1);
      const quote = await Quote.findByPk(req.params.quoteId);
      if (quote.guestId !== req.params.guestId)
        res.status(403).json({ message: "No Access" });
      else {
        await quote.destroy();
        res.sendStatus(202);
      }
    }
  } catch (ex) {
    next(ex);
  }
});

//POST
//TODO: Some kind of protection is needed, limit request number? frequency?
router.post("/:guestId", async (req, res, next) => {
  try {
    if (req.body.guestId !== req.params.guestId)
      return res.status(403).json({ message: "No Access" });
    const quote = await Quote.create(req.body);
    res.send(quote);
  } catch (ex) {
    next(ex);
  }
});

router.put(
  "/changeQuantity/:quoteId/:quantity/:guestId",
  async (req, res, next) => {
    try {
      if (await checkId(req.params.guestId)) {
        const quote = await Quote.findByPk(req.params.quoteId);
        if (quote.guestId !== req.params.guestId)
          return res.status(403).json({ message: "No Access" });
        res.send(await quote.update({ quantity: req.params.quantity }));
      }
    } catch (ex) {
      next(ex);
    }
  }
);

module.exports = router;
