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
//Route for HTML
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./notes.html"));
});

//Route for CSS
app.get("/assets/css/styles.css", function(req, res){
    res.sendFile(path.join(__dirname, "./assets/css/styles.css"))
});

//Route for JS
app.get("/assets/js/index.js", function(req, res){
    res.sendFile(path.join(_dirname, "./assets/js/index.js"))
});

//if no matching route iis found default to home
app.get("*", function(req, res){
    res.sendFile(path.join(_dirname, "./index.html"))
});

//Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT)
});