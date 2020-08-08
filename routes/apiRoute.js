//Route for JSON
const jsonRoute = path.join(_dirname, "./db/db.json");

app.get("/api/notes", function(req, res){
    res.json(returnData());
});

async function returnData(){
    const notes = await readFileAsync(jsonRoute, "utf8");

    let parsedArray = JSON.parse(notes);
    return(parsedArray);
};

app.post("/api/notes", async function(req, res){
    let notes = await returnData();

    console.log(req.body);
    notes.push(req.body);
    stringedArray = JSON.stringify(notes);

    const post = await writeFileAsync(jsonRoute, stringedArray, "utf8");
    res.join(stringedArray);
});

app.delete("/api/notes/:id", function(req, res){
    let deletedNotes = JSON.parse(fs.readFileSync(jsonRoute, "utf8"));
    const id = req.params.id;

    deletedNotes = deletedNotes.filter(chosenNote =>{
        return chosenNote.id != id;
    }); 
});