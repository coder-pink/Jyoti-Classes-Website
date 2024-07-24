const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth-controller')
const signupSchema = require('../validators/auth-validators')
const validate = require('../middlewares/validate-middleware')
const signinSchema = require('../validators/authlogin-validators')

// Define the /about route
router.route('/about').get(authControllers.about)

// Use the home controller for the root route
router.route('/').get(authControllers.home)

// Define the /register route
router.route('/register')
.post(validate(signupSchema), authControllers.register)

// Login route
router.route('/login')
.post(validate(signinSchema), authControllers.login)

module.exports = router
