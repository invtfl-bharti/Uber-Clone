const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");
const { validationResult } = require("express-validator");
const blackListTokenModel = require('../models/blackListTokenModel');

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    
    if (isCaptainAlreadyExist) {
        return res.status(400).json({message: 'Captain already exist'})
    }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    vehicleType: vehicle.vehicleType,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
  });

    const token = captain.generateAuthToken();
    
  res.status(201).json({ token, captain });
};
