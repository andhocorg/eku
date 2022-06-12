var express = require("express");
var mongoose = require("mongoose");
var app = express();

//environment variables

require('dotenv').config();

//database connection

const url = process.env.ATLAS_URI;




const connectionParams={
    useNewUrlParser: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
app.listen(3000,function(req,res){

console.log("Server is started on port 3000");

});