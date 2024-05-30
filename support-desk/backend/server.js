const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const dbconnect = require('./config/db_config')
const {errorHandler } = require('./middleware/errorhandler')
const PORT = 7000
dbconnect()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.json({
        msg:"welcome"
    })
})


app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/ticket", require("./routes/ticketRoutes"))

app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`server is runing : ${PORT}`)
})
