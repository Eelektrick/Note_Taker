//dependecies
const fs = require("fs");
const path = require("path");
let dbFile = require("../db/db.json")

//Route for JSON
const jsonRoute = path.join(_dirname, "./db/db.json");

module.exports = function(app){

    app.get("/api/notes", (req, res) => {
        res.json(dbFile);
    });

    //add notes
    app.post("/api/notes", function(req, res){
        dbFile =JSON.parse(fs.readFileSync(jsonRoute, "utf8"));

        const randomId = () => parseInt(100 * Math.random());
        req.body.id = randomId();
        dbFile.push(req.body);
        let notes = JSON.stringify(dbFile);
        savedbFile(notes);
        res.json(notes);
    });

    //delete notes
    app.delete("/api/notes/:id", (req, res) => {
        dbFile =JSON.parse(fs.readFileSync(jsonRoute, "utf8"));

        const id = req.params.id;
        dbFile = dbFile.filter(selectNotes => {
            return selectNotes.id != id;
        });

        let notes2 =  JSON.stringify(dbFile);
        savedbFile(notes2);
        res.json(dbFile);
    });

    //save notes to db.json file
    function savedbFile(notes){
        fs.writeFileSync(jsonRoute, notes, "utf8", (err) => {
            if(err){
                console.log("there is an error")
            }
            return "Done";
        });
    }
}