const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
   name:{
     type:String,
     required:[true,"please fill name"]
   },
   email:{
    type:String,
    unique:true,
    required:[true,"please fill email"]
  },
    password:{
    type:String,
    unique:true,
    required:[true,"please fill password"]
  },
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  }
},{
    timestamps:true
})

module.exports = mongoose.model('user', userschema)