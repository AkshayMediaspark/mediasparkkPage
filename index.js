require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const port = process.env.PORT || 8080




const server = express()

server.use(cors())

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

const mongoconnect = require('./database/database');
mongoconnect().catch(err => console.log(err)).then(()=>console.log("server conected"))

server.use(require('./routes/createUser'))



server.get('/',(req,res)=>{
    res.send('hello')
})

server.listen(port,()=>{
    console.log(port)
})