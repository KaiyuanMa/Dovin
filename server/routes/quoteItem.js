const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middleware");
const { QuoteItem } = require("../db");

//TODO: What kind of data from Option do we want to get?

//GET
//TODO: check for access
router.get("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    res.send(quoteItem);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
//TODO: check for access
router.delete("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.findByPk(req.params.quoteItemId);
    quoteItem.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
//TODO: check for access
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.create(req.body);
    res.send(quoteItem);
  } catch (ex) {
    next(ex);
  }
});

//PUT
//TODO: check for access
router.put("/:quoteItemId", isLoggedIn, async (req, res, next) => {
  try {
    const quoteItem = await QuoteItem.update(req.body, {
      where: { id: req.params.quoteItemId },
    });
    res.send(quoteItem);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
