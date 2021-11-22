const mongoose = require('mongoose');
exports.connect = ()=> {
    try{
        mongoose.connect('mongodb+srv://admin:admin@cluster0.gaoar.mongodb.net/cms', {useNewUrlParser: true, useunifiedTopology: true})
        console.log("connected to Mongodb");
    }
    catch(err){
        console.log(err);
        process.exit();
    }
}