//const { required } = require('joi');
const bodyParser = require('body-parser');
const express= require('express');
const app= express();
const cors=require('cors')
const authRouter=require('./Routes/AuthRoutes')



require('dotenv').config()
require('./Models/db')

const PORT=process.env.PORT

app.get('/', (req, res) => res.json({ message: 'Hello World' }));
app.get('/app', (req, res) =>{
    res.send('welcome')
} )

app.use(bodyParser.json())
app.use(cors())

//Routes
app.use('/auth',authRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
