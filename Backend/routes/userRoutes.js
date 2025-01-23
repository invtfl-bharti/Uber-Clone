const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');


// data to validate registered user

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must contain at least 3 character long"),
    body('password').isLength({ min: 6 }).withMessage("Password must contain at least 6 characters")
],
    userController.registerUser
)


module.exports = router;