var path = require("path");

module.exports = function(app){

    //Route for HTML
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "./notes.html"));
    });

    //if no matching route iis found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./index.html"))
    });
};