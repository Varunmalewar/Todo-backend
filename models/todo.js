const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        maxLength : 100,
    },
    description :{
        type : String,
        required : true,
        maxLength : 500,
    },
    createdAt :{
        type : Date,
        default : Date.now,
    },
    updatedAt:{
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Todo', todoSchema);
