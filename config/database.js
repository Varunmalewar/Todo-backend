const mongoose = require('mongoose');

const dbconnect = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("Error in database connection", err);
        process.exit(1); // Exit the process if database connection fails
    }
}

module.exports = dbconnect;
