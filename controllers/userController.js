const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const User = require("../models/userModel")

// register user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if(!username || !email || !password ) {
    res.status(400);
      throw new Error("All fields are mandatory")
  }

  const userAvailable = await User.findOne({ email})

  if(userAvailable) {
    res.status(400);
    throw new Error("User already registered")
  }

  //Hash Password
  const hasedPassword = await bcrypt.hash(password , 10)
  console.log("Hashed password", hasedPassword);

  const user = await User.create({
    username,
    email,
    password : hasedPassword ,
  })

  console.log(`user created ${user}`);

  if(user) {
    res.status(201).json({ _id : user.id , email : user.email})
  }else {
    res.status(400)
    throw new Error("Invalid user data")
  }

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
