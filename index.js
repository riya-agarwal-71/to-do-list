const express = require("express");
const port = 8000;
const favicon = require('serve-favicon');
const app = express();

app.use("/",require('./routes/index'));
app.use(express.static('./views'));
app.use(favicon('./views/images/favicon.ico'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(error){
    if(error){
        console.log("error in running the server",error);
        return;
    }
    console.log("server is running on port : ",port);
})