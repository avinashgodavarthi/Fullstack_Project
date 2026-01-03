const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { registerUser, loginuser } = require("../controllers/authController");

router.post("/register", upload.single("profilePic"), registerUser);

router.post("/login",loginuser)

module.exports = router;