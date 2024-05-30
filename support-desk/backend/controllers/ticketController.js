const asyncHandler = require('express-async-handler')
const ticket = require('../models/ticketModels')
const User = require("../models/usermodels")

const createticket = asyncHandler(async (req, res) => {
    const { product, description } = req.body
    if (!product, !description) {
        res.status(400)
        throw new Error("please fill all details")
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket = await ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })
    res.send(Ticket)
})
const getTickets = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }
    const Ticket = await ticket.find({ user: req.user.id })
    if (!Ticket) {
        res.status(404)
        throw new Error("user not found")
    }

    res.status(200).json(Ticket)
})


const getticket = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket = await ticket.findById(req.params.id)
    if (!Ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }
    res.status(200).json(Ticket)
})

const deleteticket = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket =  await ticket.findById(req.params.id)
    if (!Ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    if(Ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('not authroized')
    }else{
        await ticket.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg:"Ticket Deleted"
        })
    }
    
})
 

const updateticket = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found")
    }

    const Ticket =  await ticket.findById(req.params.id)
    if (!Ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    if(Ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('not authroized')
    }

    const updatedticket = await  ticket.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json(updatedticket)
})


module.exports = { createticket, getTickets, getticket, deleteticket, updateticket}