const express = require('express')
const Router = require('./route/route')
const connect = require('./database/mongoose')

const app = express()
app.use(express.json())
app.use(Router)
app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(5400, async()=>{
    console.log("server running....")
    await connect()
})


