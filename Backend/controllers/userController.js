const userModel = require("../models/userModel");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    // Check if the user already exists
    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    // Create the user
    const user = await userService.createUser({
      firstname: fullname.firstname, 
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    // Example response for debugging
    console.log({
      token,
      user: {
        _id: user._id,
        fullname: {
          firstname: user.firstname,
          lastname: user.lastname
        },
        email: user.email
      }
    });

    res.status(201).json({ token, user });
    
  } catch (error) {
    next(error); 
  }
};
