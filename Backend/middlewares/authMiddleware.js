const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.authUser = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await userModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // verify the token using the secret key stored in environment variable
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // find the user in the database using the decoded id from the token
    const user = await userModel.findById(decoded._id);
    // attach the user object to the request object so other routes can access it
    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
