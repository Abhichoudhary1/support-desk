const mongoose = require('mongoose')

const dbconnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connected : ${conn.connection.host}`.bgGreen.black)
    } catch (error) {
        console.log(`db connection failed:${error.message}`.bgRed.black)
    }
}

module.exports = dbconnect