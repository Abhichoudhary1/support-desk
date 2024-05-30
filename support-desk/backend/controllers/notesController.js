const asyncHandler = require('express-async-handler')
const User = require('../models/usermodels')
const ticket = require('../models/ticketModels')
const notes = require('../models/notesModels')

const addnotes = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket = await ticket.findById(req.params.ticketId)

    if(!Ticket){
        res.status(401)
        throw new Error("Ticket not found")
    }
    
    const note = await notes.create({
        text:req.body.text,
        isStaff:false,
        ticket:req.params.ticketId,
        user:req.user.id

    })
   if(!note){
      res.status(400)
      throw new Error("note not created")
   }

   res.status(200).json(note)
})

const getnotes = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket = await ticket.findById(req.params.ticketId)

    if(!Ticket){
        res.status(401)
        throw new Error("Ticket not found")
    }

    const note = await notes.find({ticket : req.params.ticketId})

    if(!note){
        res.status(404)
        throw new Error('note not found')
    }
    res.status(200).json(note)
})


module.exports = { getnotes, addnotes}