const express = require("express");
const router = express.Router();
const { QuoteItem, Quote } = require("../db");

const checkAccess = async (quoteId, user) => {
  const quote = await Quote.findByPk(quoteId);
  if (quote.guestId !== user.id) return false;
  return true;
};

//GET
router.get("/:guestId/:quoteItemId", async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    if (checkAccess(quoteItem.quoteId, req.params.guestId)) res.send(quoteItem);
    else return res.status(403).json({ message: "No Access" });
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:guestId/:quoteItemId", async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    if (checkAccess(quoteItem.quoteId, req.params.guestId)) quoteItem.destroy();
    else return res.status(403).json({ message: "No Access" });
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/:guestId", async (req, res, next) => {
  try {
    if (checkAccess(req.body.quoteId, req.params.guestId)) {
      const quoteItem = await QuoteItem.create(req.body);
      res.send(quoteItem);
    } else return res.status(403).json({ message: "No Access" });
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
