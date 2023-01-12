const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Quote } = require("../db");

//GET
router.get("/:quoteId", isLoggedIn, async (req, res, next) => {
  try {
    const quote = await Quote.findByPk(req.params.quoteId);
    if (quote.userId !== req.user.id)
      return res.status(403).json({ error: "No Access" });
    res.send(quote);
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
