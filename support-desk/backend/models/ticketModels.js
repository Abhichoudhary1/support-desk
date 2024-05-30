const mongoose = require('mongoose')


const ticketSchmea =  new mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId,
       ref : "User",
       required:true,
   },
   product:{
      type: String,
      required: [true, "please enter product"],
      emun : ['iphone', 'iwatch', 'macbook', 'ipod', 'imac']
   },
   description:{
    type:String,
    required: [true, "please enter description"]
   },
   status:{
    type:String,
    required:true,
    emun:['open', 'closed', 'new'],
    default: 'new',
  
   }
},{
    timestamps:true
})

module.exports = mongoose.model("ticket", ticketSchmea)