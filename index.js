const express = require ('express');
const app = express();

// load env variables
require('dotenv').config();
const PORT = process.env.PORT || 6000;

// connect to the database first
const connectDB = require('./config/database');
connectDB();

// middleware to parse json data
app.use(express.json());

// import the todo routes
const todoRoutes = require('./routes/todo');

//mount the todo routes
app.use('/api/v1',todoRoutes);

// default route 
app.get("/" , (req,res)=>{
    res.send("Welcome to the Todo API");
})

// start the server after database connection is established
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})
