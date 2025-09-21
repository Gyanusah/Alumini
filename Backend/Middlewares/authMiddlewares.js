


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
// const signup = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         console.log('received body',req.body)

//         const user = await userModel.findOne({ email });

//         if (user) {
//             return res.status(409).json({ message: "User already exists", success: false });
//         }

//         const newUser = new userModel({ name, email, password });
//         newUser.password = await bcrypt.hash(password, 10);

//         await newUser.save();

//         res.status(201).json({ message: 'Signup successful', success: true });
//     } catch (err) {
//         res.status(500).json({ message: 'Internal server error', success: false });
//     }
// };

const SignUp = async (req, res) => {
    console.log('Received body:', req.body);

    try {
        const { name, email, password } = req.body;

        // Basic validation: check for missing fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'content  are required.',
                success: false
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        console.log('Existing user:', existingUser);

        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists',
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: 'Signup successful',
            success: true,
            users:{
id:newUser._id,
name:newUser.name,
email:newUser.email
            }
        });

    } catch (err) {
        console.error('Signup controller error:', err.stack || err);

        // if(err.name==="MongoError" || err.name==='MongoServerError'){
        //     return res.status(500).json({
        //         message: 'Database error occurred',
        //         success: false,
        //         error: err.message
        //     });
        // }

        return res.status(500).json({
            message: 'Internal server error',
            success: false,
            error:err.massage

        });
    }
};


// components/LoginForm.js



// const Login = async (req, res) => {
//     console.log("Login body:", req.body);

//     try {
//         const { email, password } = req.body;

//         // Validation: check if fields exist
//         if (!email || !password) {
//             return res.status(400).json({
//                 message: "Email and password are required",
//                 success: false,
//             });
//         }

//         // Find user by email
//         const user = await userModel.findOne({ email });
//         console.log("Found user:", user);

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found",
//                 success: false,
//             });
//         }

//         // Compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 message: "Invalid credentials",
//                 success: false,
//             });
//         }

//         // Optional: generate token (JWT)
//         const token = jwt.sign(
//             { id: user._id, email: user.email },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         return res.status(200).json({
//             message: "Login successful",
//             success: true,
//             users: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//             },
//             // token // uncomment if using JWT
//         });

//     } catch (err) {
//         console.error("Login controller error:", err.stack || err);
//         return res.status(500).json({
//             message: "Internal server error",
//             success: false,
//             error: err.message,
//         });
//     }
// };

// module.exports = Login;




module.exports = {
    signupValidation,
    loginValidation,
    SignUp
   
};
