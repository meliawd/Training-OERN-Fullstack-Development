const express = require("express");
const contactController = require("../controllers/contactController");
const contactValidator = require("../middleware/contactValidator");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/test", contactController.index);
router.get("/", contactController.getAll);
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

module.exports = router;
