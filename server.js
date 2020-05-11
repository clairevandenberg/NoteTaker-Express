// creating express server using Express.JS
let express = require("express");
let path = require("path");

// setting up express app and Heroku hosting requirement 
let app = express ();
let PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = []; // empty array for storing notes 

// POST route 
app.post(`/api/notes`, function(req, res) {

    // push users note to notes array
    notes.push(req.body);
    let notes = userNotes;
    
    let userNotes =  fs.readFile(path.join(__dirname, "/db/db.json"));

    JSON.parse(userNotes),
    notes.push(notes);

    userNotes = JSON.stringify(userNotes);
    console.log(userNotes);

    fs.writeFile(path.join(__dirname, "./db/db.json"), userNotes, `utf8`, function (error) {
       if (err){
        console.log( "You have an Error");
    } else { 
        return res.json(notes);
        console.log("Your note has been saved");
        };
    });
});


// GET route 
app.use(express.static('public')); 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
    return res.json(notes);
});



// DELETE route 
app.delete("/api/notes: id", function(req, res) {
    fs.sendFile(path.join(__dirname, "/public/notes.html"));
    if (err) { 
    throw err;
    } 
    console.log(data)
    let parseNotes = JSON.parse(data);
    console.log (parseNotes);
    res.send(parseNotes);
});

// start server to begin listening 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});