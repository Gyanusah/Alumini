

const express = require('express');
const router = express.Router();


const { signupValidation,SignUp, Login, loginValidation } = require('../Middlewares/authMiddlewares');

// Dummy login route (for now)
router.post('/login', (req, res) => {
    res.send('Login successful');
});

// Signup route with validation middleware and controller
router.post('/signup', signupValidation, SignUp);
//router.post('/Login', loginValidation , Login)

module.exports = router;

