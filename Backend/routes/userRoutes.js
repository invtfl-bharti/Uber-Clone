const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')



router.post('/register', [
  body('email').isEmail(). withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters or long'),
  body('password').isLength({min:5}).withMessage('Password must be atleast 5 characters or long')
],
  userController.registerUser
)

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters or long')
],

  userController.loginUser
)



router.get('/profile', authMiddleware.authUser, userController.getUserProfile);


router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;
