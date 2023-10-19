require('dotenv').config()
const mongoose = require('mongoose');


const url = process.env.URL






const mongoconnect = async ()=>{
    await mongoose.connect(url)

    console.log(" data base connected")
}


module.exports = mongoconnect