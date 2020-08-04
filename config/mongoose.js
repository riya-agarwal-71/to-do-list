// require the mongoose module
const mongoose = require("mongoose");

// connect to database
mongoose.connect('mongodb://localhost/task_db');
const db = mongoose.connection;

// handling error in connection
db.on('error',console.error.bind(console,'error connecting to db'));

// successfull connection
db.once('open',function(){
    console.log('Successfully connected to db');
});