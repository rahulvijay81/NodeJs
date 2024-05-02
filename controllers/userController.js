const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const { sendMail } = require("../nodemailer/nodemailerHelper");

// register user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //checking username,email and password are avaliable
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  //checking is user already existing
  const userAvailable = await User.findOne({ email });

  //if user is already exist show error
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  //Hash Password
  const hasedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hasedPassword,
  });

  console.log(`user created ${user}`); // loging user data

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// login user api
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //checking email and password are avaliable
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  //checking email is valid or not
  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Invalid email address");
  }

  //checking user is available or not
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error("Invalid email address or password");
  }

  //checking password is correct or not
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error("Password is incorrect");
  }

  try {
    //sending email 
    const emailInfo = await sendMail(email, user);

    //sent jwt token
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({
      accessToken,
      emailInfo: emailInfo,
      preview: nodemailer.getTestMessageUrl(emailInfo),
    });
  } catch (error) {
    res.status(500).json({ error, message: "Internal Server Error" });
  }
});

// current user
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, LoginUser, currentUser };
