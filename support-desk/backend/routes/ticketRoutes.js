const express = require('express')
const { createticket, getTickets, getticket, deleteticket, updateticket } = require('../controllers/ticketController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()
 router.route("/").get(protect, getTickets).post(protect, createticket) 
 router.route("/:id").get(protect, getticket).delete(protect, deleteticket).put(protect,updateticket)

 router.use("/:ticketId/note", require("./notesRoutes"))

module.exports = router