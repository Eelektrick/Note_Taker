//dependecies
const fs = require("fs");
const path = require("path");
let dbFile = require("../db/db.json")

//Route for JSON
let jsonRoute = path.join(__dirname, "./db/db.json");

module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        res.json(dbFile);
    });

    //add notes
    app.post("/api/notes", function(req, res){
        dbFile =JSON.parse(fs.readFileSync(jsonRoute, "utf8"));

        const randomId = () => parseInt(100 * Math.random());
        req.body.id = randomId();
        dbFile.push(req.body);
        let note = JSON.stringify(dbFile);
        savedbFile(note);
        res.json(note);
    });

    //delete notes
    app.delete("/api/notes/:id", (req, res) => {
        dbFile =JSON.parse(fs.readFileSync(jsonRoute, "utf8"));

        const id = req.params.id;
        dbFile = dbFile.filter(selectNote => {
            return selectNote.id != id;
        });

        let note1 =  JSON.stringify(dbFile);
        savedbFile(note1);
        res.json(dbFile);
    });

    //save notes to db.json file
    function savedbFile(note){
        fs.writeFileSync(jsonRoute, note, "utf8", function(err) {
            if(err) console.log ("there is an error")

            return "Done";
        });
    }
}