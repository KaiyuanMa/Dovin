const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Address } = require("../db");

//GET
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const user = req.user;
    const addresses = await Address.findAll({
      where: { userId: user.id },
      order: [["createdAt", "DESC"]],
    });
    res.send(addresses);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:addressId", isLoggedIn, async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    res.send(address);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:addressId", isLoggedIn, async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    address.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const address = await Address.create(req.body);
    res.send(address);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:addressId", isLoggedIn, async (req, res, next) => {
  try {
    let address = await Address.findByPk(req.params.addressId);
    if (address.userId !== req.user.id)
      return res.status(403).json({ message: "No Access" });
    address = await Address.update(req.body, {
      where: { id: req.params.addressId },
    });
    res.send(address);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
