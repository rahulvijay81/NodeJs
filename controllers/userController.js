const asyncHandler = require("express-async-handler");

// register user
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Registration successful" });
});

// login user
const LoginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Registration successful" });
});

// current user
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Registration successful" });
});

module.exports = { registerUser, LoginUser, currentUser };
