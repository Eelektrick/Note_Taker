//dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

//sets up the express app and initial port
const PORT = process.env.PORT || 8080;

//help express app to parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes


//Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT)
});