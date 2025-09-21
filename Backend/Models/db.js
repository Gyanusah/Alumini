// const mongoose=require('mongoose')

// const mongo_url=process.env.MONGO_CONN;

// mongoose.connect("mongo_url",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// .then(()=>{
//     console.log("mongoDB connecgted...")
// })
// .catch((err)=>{
// console.log("mongoDB  connection error",err)
// })

const mongoose = require('mongoose');
require('dotenv').config();  // Ensure .env is loaded

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url, {  // ← use the variable, not string literal
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => {
        console.log("mongoDB connected...");
    })
    .catch((err) => {
        console.log("mongoDB connection error", err);
    });
