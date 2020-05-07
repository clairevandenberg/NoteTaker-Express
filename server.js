// creating express server using Express.JS
let express = require("express");
let path = require("path");

// setting up express app and Heroku hosting requirement 
let app = express ();
let PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//start server to begin listening 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});