// creating express server using Express.JS
let express = require("express");
let path = require("path");
const fs = require("fs");

// setting up express app and Heroku hosting requirement 
let app = express ();
let PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = []; // empty array for storing notes 


// POST route 
app.post(`/api/notes`, function(req, res) {
let userNotes = fs.readFileSync(path.join(__dirname, "/db/db.json"));
userNotes = JSON.parse(userNotes);

userNotes.push(req.body);
userNotes = JSON.stringify(userNotes);
console.log(userNotes);

fs.writeFile(path.join(__dirname, "./db/db.json"), userNotes, `utf8`, function (err) {
    if (err){
     console.log( "You have an Error");
    } else { 
     console.log("Your note has been saved");
    return res.json(notes);
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
});


// DELETE route 
app.delete("/api/notes: id", function(req, res) {
    fs.readFile(path.join(__dirname, "/public/notes.html"));
        if (err) { 
        throw err;
        } else {
console.log(data)

let parseNotes = JSON.parse(data);
console.log (parseNotes);

return res.send(parseNotes);
}
});

// start server to begin listening 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});