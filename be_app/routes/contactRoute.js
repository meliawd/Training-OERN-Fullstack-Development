const express = require("express");
const contactController = require("../controllers/contactController");
const contactValidator = require("../middleware/contactValidator");
const upload = require("../middleware/uploadMiddleware");
const { body } = require("express-validator");

const router = express.Router();

router.get("/test", contactController.index);
router.get("/", contactController.getAll);
router.get("/:id", contactController.getById);
router.post(
  "/",
  upload.single("image"),
  contactValidator,
  contactController.store
);
router.delete("/:id", contactController.destroy);
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    res.json({
      status: "Success",
      message: "File berhasil diupload",
      data: {
        name: req.file.filename,
        size: req.file.size,
        mimetype: req.file.mimetype,
        originalname: req.file.originalname,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "File gagal diupload",
      data: {
        error: error.message,
      },
    });
  }
});
router.put(
  "/:id",
  upload.single("image"),
  body("name").isLength({ min: 3 }).withMessage("nama minimal 3 karakter"),
  body("email").isEmail().withMessage("email tidak valid"),
  body("phone").isMobilePhone("id-ID").withMessage("nomor telepon tidak valid"),
  contactController.update
);

module.exports = router;
