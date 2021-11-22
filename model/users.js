const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:20
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

const Users = mongoose.model('Users',userSchema,'users');
module.exports = Users;