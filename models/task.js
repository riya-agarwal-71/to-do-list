// require the mongoose (database) module
const mongoose = require("mongoose");

// creating schema (basic structure of each data item in database) using mongoose
const taskSchema = new mongoose.Schema({
    description:{
        type:String
    },
    date:{
        type:String,
    },
    category:{
        type:String
    },
    deleted:{
        type:Boolean,
        default:false
    }
});

// create database names Task with schema as taskSchema
const Task = mongoose.model("Task",taskSchema);

// exportng the database formed
module.exports = Task;