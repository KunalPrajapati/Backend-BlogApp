const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();


//middleware

app.use(express.json());

const blog = require('./routes/blog')
//mount
app.use("/api/v1", blog);


const connectDB = require('./config/database')
connectDB();

app.listen(PORT, () =>{
    console.log('Server Started');
})

app.get('/', (req, res) =>{
    res.send('<h1 style= "text-align:center;" >Home🏠 Page</h1>')
})