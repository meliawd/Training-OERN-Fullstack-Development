const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),
  check("email")
    .notEmpty()
    .withMessage("Email tidak boleh kosong")
    .isEmail()
    .withMessage("Email tidak valid"),
  check("phone")
    .notEmpty()
    .withMessage("Nomor telepon tidak boleh kosong")
    .isMobilePhone("id-ID")
    .withMessage("Nomor telepon tidak valid"),
];
