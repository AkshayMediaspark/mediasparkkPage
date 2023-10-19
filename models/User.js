const mongoose = require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema({
    name : {type:String , require:true},
    email_address :{type:String,require:true},
    phone : {type:Number,require:true},
    subject : {type:String},
    message : {type : String,require:true}
});


const user = mongoose.model('user',userSchema)
module.exports = user