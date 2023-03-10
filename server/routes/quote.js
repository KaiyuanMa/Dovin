const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middleware");
const {
  Quote,
  QuoteItem,
  Step,
  Option,
  StepSet,
  User,
  OrderStatus,
} = require("../db");

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
      include: [
        QuoteItem,
        { model: OrderStatus, as: "orderState", attributes: ["name"] },
      ],
    });
    console.log(quotes);
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
    const quote = await Quote.findByPk(req.params.quoteId, {
      include: QuoteItem,
    });
    if (quote.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    const _quotes = await getAllInfo([quote]);
    res.send(_quotes);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:quoteId", isLoggedIn, async (req, res, next) => {
  try {
    const quote = await Quote.findByPk(req.params.quoteId);
    if (quote.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    else {
      await quote.destroy();
      res.sendStatus(202);
    }
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    if (req.body.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    const quote = await Quote.create(req.body);
    res.send(quote);
  } catch (ex) {
    next(ex);
  }
});

//PUT
//TODO: what can be changed what can not?
// router.put("/:quoteId", isLoggedIn, async (req, res, next) => {
//   try {
//     const quote = await Quote.update(req.body, {
//       where: { id: req.params.quoteId },
//     });
//     res.send(quote);
//   } catch (ex) {
//     next(ex);
//   }
// });

router.put("/syncGuest/:guestId", isLoggedIn, async (req, res, next) => {
  try {
    if (await User.findByPk(req.params.guestId)) {
      res.status(409).send({ message: "User exist." });
    }
    const quote = await Quote.update(
      { userId: req.user.id },
      { where: { guestId: req.params.guestId } }
    );
    res.send(quote);
  } catch (ex) {
    next(ex);
  }
});

router.put(
  "/changeQuantity/:quoteId/:quantity",
  isLoggedIn,
  async (req, res, next) => {
    try {
      const quote = await Quote.findByPk(req.params.quoteId);
      if (quote.userId !== req.user.id)
        return res.status(403).json({ message: "No Access" });
      res.send(await quote.update({ quantity: req.params.quantity }));
    } catch (ex) {
      next(ex);
    }
  }
);

router.put("/cart-to-order/:quoteId", isLoggedIn, async (req, res, next) => {
  try {
    const quote = await Quote.findByPk(req.params.quoteId);
    if (quote.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    res.send(await quote.update({ isCart: false, orderStateId: 1 }));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
