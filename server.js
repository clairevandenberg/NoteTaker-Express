// creating express server using Express.JS
let express = require("express");
let path = require("path");

// setting up express app and Heroku hosting requirement 
let app = express ();
let PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = []; // empty array for storing notes 

// GET route 
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


// POST route 
app.post("/api/notes", function(req, res) {
    console.log(notes);
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    if (err) { 
    throw err;
    } else {
    return res.json(notes);
    };
});


//DELETE route 
app.delete("/api/notes: id", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    if (err) { 
    throw err;
    } else {
    return res.json(notes);
    };
});

//start server to begin listening 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});