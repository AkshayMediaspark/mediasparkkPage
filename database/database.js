require('dotenv').config()
const mongoose = require('mongoose');


const passward = process.env.mongodb_passward






const mongoconnect = async ()=>{
    await mongoose.connect(`mongodb+srv://akshaymediaspark:${passward}@cluster0.jsxnsvm.mongodb.net/?retryWrites=true&w=majority`)

    console.log(" data base connected")
}


module.exports = mongoconnect