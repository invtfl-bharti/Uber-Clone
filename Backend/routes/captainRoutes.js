const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captainController');

router.post('/register', [
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters or long'),
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be atleast 5 character or long'),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters or long'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Vehicle plate must be atleast 5 character or long'),
  body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be atleast 1 character or long'),
  body('vehicle.vehicleType').isIn('car','motorcycle', 'auto').withMessage('Invalid vehicle Type')
],
  captainController.registerCaptain
)

module.exports = router;