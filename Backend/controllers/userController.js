const userModel = require("../models/userModel");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");
const blacklistToken = require("../models/blackListTokenModel");

const jwt = require("jsonwebtoken");

// Controller function to register a new user
module.exports.registerUser = async (req, res, next) => {
  try {
    // validate request body for any errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    // hash the user's password securely
    const hashedPassword = await userModel.hashPassword(password);

    // Create the user in the database using the userService
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate an authentication token from the newly created user
    const token = user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(201).json({ token, user });
  } catch (error) {
    next(error);
  }
};



// Controller function to get the profile of a user
module.exports.loginUser = async (req, res, next) => {
  // validate request body for any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.status(200).json({ token, user });
};


module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie('token');

  const token = req.cookies.token || req.headers.authorization.split('')[1];

  await blacklistToken.create({ token });

  res.status(200).json({ message: 'Logged out successfully' });
}