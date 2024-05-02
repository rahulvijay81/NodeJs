const express = require("express");

const router = express.Router();

const {
  registerUser,
  LoginUser,
  currentUser,
} = require("../controllers/userController");

const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
