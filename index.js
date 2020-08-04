// require the modules
const express = require("express");
const port = 8000;
const app = express();

// set favicon
const favicon = require('serve-favicon');
app.use(favicon('./views/images/favicon.ico'));

// decoding the request using middleware
app.use(express.urlencoded());

// directing all requests to index file of routes folder
app.use("/",require('./routes/index'));

// setting the static folder as views
app.use(express.static('./views'));
app.set('view engine','ejs');
app.set('views','./views');

// binding the connection from host to port
app.listen(port,function(error){
    if(error){
        console.log("error in running the server",error);
        return;
    }
    console.log("server is running on port : ",port);
})