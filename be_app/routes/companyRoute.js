const express = require("express");
const companyController = require("../controllers/companyController");
const router = express.Router();

router.get("/", companyController.index);
router.get("/about", companyController.getData);
router.get("/:id", companyController.getDataByID);
router.post("/", companyController.store);
router.put("/:id", companyController.update);
router.delete("/:id", companyController.delete);

module.exports = router;
