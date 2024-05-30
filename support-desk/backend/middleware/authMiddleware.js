const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const User = require('../models/usermodels')
const protect = asyncHandler(async(req,res,next)=>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
       token = req.headers.authorization.split(" ")[1]
       
       

       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       const user = await User.findById(decoded.id).select("-password")

       if(!user){
        res.status(401)
        throw new Error("you are unAuthroized")
       }

       req.user = user
       next()
    }else{
        res.status(401)
        throw new Error("you are not authorized")
    }

    
})

module.exports = {protect}