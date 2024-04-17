const express = require('express')
const { loginController, registerController } = require('../controllers/clientController')

// router object
const router = express.Router()

// routers
// POST || LOGIN USER
router.post('/login', loginController)

// POST || REGISTER USER
router.post('/signup', registerController)

module.exports = router