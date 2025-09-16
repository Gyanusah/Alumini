// const { signup } = require('../Controllers/authController')
// const {signupValidation}=require('../Middlewares/authMiddlewares')

// const express = require('express');
// const router = express.Router();

// router.post('/login',(req,res)=>{
// res.send('login sucessfully')
// })

// router.post('/signup', signupValidation,signup)
// module.exports =router


const express = require('express');
const router = express.Router();

const { signup } = require('../Controllers/authController');
const { signupValidation } = require('../Middlewares/authMiddlewares');

// Dummy login route (for now)
router.post('/login', (req, res) => {
    res.send('Login successful');
});

// Signup route with validation middleware and controller
router.post('/signup', signupValidation, signup);

module.exports = router;
