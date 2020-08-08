//dependencies
var express = require("express");

//config of express
var app = express();

//sets up the express app and initial port
const PORT = process.env.PORT || 8080;

//help express app to parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//make sure css works on html, ran into this issue with our group assignment in class
app.use(express.static("public"));

//require to go to these routes and use the code provided
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT)
});