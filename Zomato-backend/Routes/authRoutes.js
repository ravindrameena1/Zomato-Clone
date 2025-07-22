const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.post("/Signup", authController.Signup);
router.post("/Login", authController.Login);

module.exports = router;
