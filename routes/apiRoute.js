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

    app.post("/api/notes", function(req, res){
        dbFile =JSON.parse(fs.readFileSync(jsonRoute, "utf8"));

        const randomId = () => parseInt(100 * Math.random());
        req.body.id = randomId();
        dbFile.push(req.body);
        let notes = JSON.stringify(dbFile);
        savedbFile(notes);
        res.json(notes);
    });
}

// app.delete("/api/notes/:id", (req, res) => {
//     let deletedNotes = JSON.parse(fs.readFileSync(jsonRoute, "utf8"));
//     const id = req.params.id;

//     deletedNotes = deletedNotes.filter(chosenNote =>{
//         return chosenNote.id != id;
//     }); 
// });