const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middleware");
const { QuoteItem, Quote } = require("../db");

//TODO: What kind of data from Option do we want to get?

const checkAccess = async (quoteId, user) => {
  const quote = await Quote.findByPk(quoteId);
  if (quote.userId !== user.id) return false;
  return true;
};

//GET
//TODO: check for access
router.get("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    if (checkAccess(quoteItem.quoteId, req.user)) res.send(quoteItem);
    else return res.status(403).json({ error: "No Access" });
  } catch (ex) {
    next(ex);
  }
});

//DELETE
//TODO: check for access
router.delete("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    if (checkAccess(quoteItem.quoteId, req.user)) quoteItem.destroy();
    else return res.status(403).json({ error: "No Access" });
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
//TODO: check for access
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    if (checkAccess(req.body.quoteId, req.user)) {
      const quoteItem = await QuoteItem.create(req.body);
      res.send(quoteItem);
    } else return res.status(403).json({ error: "No Access" });
  } catch (ex) {
    next(ex);
  }
});

//PUT
//TODO: check for access
router.put("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    if (checkAccess(req.params.quoteId, req.user)) {
      const quoteItem = await QuoteItem.update(req.body, {
        where: { id: req.params.quoteItemId },
      });
      res.send(quoteItem);
    } else return res.status(403).json({ error: "No Access" });
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
