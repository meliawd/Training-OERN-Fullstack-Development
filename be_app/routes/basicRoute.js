const express = require("express");
const basicController = require("../controllers/basicController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("domisili mana");
});
router.get("/basic", basicController.index);
router.get("/home", basicController.home);
router.get("/about", basicController.about);

module.exports = router;
