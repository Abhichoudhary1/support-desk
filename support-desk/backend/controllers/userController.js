
const asynchandler = require('express-async-handler')
const User = require("../models/usermodels")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registeruser = asynchandler (async(req,res)=>{
    const {name, email, password} = req.body

if(!name,!email,!password){
    res.status(400)
    throw new Error("please fill all the details")
}

const userExist = await User.findOne({email:email})

if(userExist){
    res.status(401)
    throw new Error("user already exist")
}
const salt = await bcrypt.genSalt(10)
const hashedpassword = await bcrypt.hash(password, salt)

const user = await User.create({
    name,
    email,
    password: hashedpassword,
   
})
  
 if(user){
    res.status(201).json({
        id : user._id,
        name: user.name,
        email:user.email,
        password:user.password,
        token: generatetoken(user._id)
    })

 }else{
     res.status(401)
     throw new Error("cannot registerd user")
     }
  
    
})

const loginuser = asynchandler(async(req,res)=>{
    const {email,password} = req.body

    if(!email,!password){
        res.status(400)
        throw new Error("please entry all information")
    }
    
    const user = await User.findOne({email:email})

    if(user && (await bcrypt.compare(password , user.password))){
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token:generatetoken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("invalid credentials")
    }
    
})

const generatetoken = (id)=>{
    return jwt.sign({id:id}, process.env.JWT_SECRET, {
       expiresIn:'30d'
    } )
} 
module.exports = {registeruser, loginuser}