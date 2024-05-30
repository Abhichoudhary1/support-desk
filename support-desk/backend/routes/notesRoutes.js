const express = require('express')
const router = express.Router({ mergeParams: true })
const { protect } = require('../middleware/authMiddleware')
const { getnotes, addnotes } = require('../controllers/notesController')



router.route("/").get(protect, getnotes).post(protect, addnotes)


module.exports = router