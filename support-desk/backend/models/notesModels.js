const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    ticket:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ticket',
        required:true,
    },
    text:{
        type:String,
        required:[true, "please type something"]
    },
    isStaff:{
        type:Boolean,
        default: false
    },
    staffID:{
        type:String,
    
    }
},{
    timestamps:true
})

module.exports= mongoose.model("notes", notesSchema)