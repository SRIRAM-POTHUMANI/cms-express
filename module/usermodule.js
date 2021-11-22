const User = require('../model/users');
const Joi = require('joi');

exports.postUser = async (req,res,next) => {
//joi schema
    const schema = Joi.object({
        email : Joi.string().required(),
        password : Joi.string().min(8).max(20).required(),
        name : Joi.string().required(),
        username : Joi.string().required()
    })
//joi validation
    var {error} = await schema.validate(req.body);
    if(error){
        console.log(error);
        return res.status(400).send({msg : error.details[0].message})
    }
//post to mongodb using mongoose
    const user = new User({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name,
        username : req.body.username
    })
    try{
        var response = await user.save();
        res.send(response);
    }
    catch(err){
        res.status(400).send(err);
    }
}

exports.getUser = async (req,res,next) => {
    var response = await User.find();
    res.send(response)
}


exports.updatePassword = async (req,res,next) => {
    const username = req.params.username;
    try{var response = await  User.findOneAndUpdate(username, {
        password : req.body.password
    })
    res.send("Password Changed")}
    catch(err){
        res.status(400).send(err);
    }
}