const express = require('express')
const { loginController, registerController } = require('../controllers/techController')

// router object
const router = express.Router()

// routers
// POST || LOGIN USER
router.post('/logint', loginController)

// POST || REGISTER USER
router.post('/signupt', registerController)

module.exports = router