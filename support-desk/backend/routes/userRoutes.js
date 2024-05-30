const express = require('express')
const { registeruser, loginuser } = require('../controllers/userController')

const router = express.Router()

router.post("/" ,registeruser)
router.post("/login", loginuser)

module.exports = router