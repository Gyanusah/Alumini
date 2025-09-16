// const Joi = require("joi")
// const bcrypt = require('bcrypt');
// const userModel = require('../Models/userSchema'); 

// const signupValidation=(req,res,next)=>{
//     const Schema=Joi.object({
//         name:Joi.string().min(3).max(100).required(true),
//         email: Joi.string().email().required(true),
//         password: Joi.string().min(4).max(100).required(true)
//     })
//     const {error}=Schema.validate(req.body)
//     if(error){
//         return res.status(400)
//         .json({
//             message:"Bad request",error
            
//         })
//     }
//     next()
// }



// //Login Validation Middleware
// const loginValidation = (req, res, next) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         password: Joi.string().min(4).max(100).required()
//     });

//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).json({ message: "Bad request", error });
//     }

//     next();
// };


// const signup = async (req, res) => {
//     try {

//         const { name, email, password } = req.body;
//         const user = await userModel.findOne({ email })
//         if (user) {
//             return res.status(409).json({ message: "User already exists", success: false });

//         }
//         const newUser = new userModel({ name, email, password });
//         newUser.password = await bcrypt.hash(password, 10);
//         await newUser.save();
//         res.status(201).json({ message: 'Signup successful', success: true });

//     } catch (err) {
//         res.status(500).json({ message: 'internal server error', success: false })

//     }

// } 

// module.exports={
//     signupValidation,
//     loginValidation,
//     signup
// }


const Joi = require('joi');
const bcrypt = require('bcrypt');
const userModel = require('../Models/userSchema');

// Signup Validation Middleware
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }

    next();
};

// Login Validation Middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }

    next();
};

// Signup Controller
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (user) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        const newUser = new userModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);

        await newUser.save();

        res.status(201).json({ message: 'Signup successful', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

module.exports = {
    signupValidation,
    loginValidation,
    signup
};
