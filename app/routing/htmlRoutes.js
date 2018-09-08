// Dependencies
//========================================
var path = require("path");



// Routing
//=======================================

module.exports = function(app) {

    //send user to "/survey" page
    app.get("/survey", function(req, res) {

        res.sendFile(path.join(__dirname,"../public/survey.html"))
    });

    //send user to the home page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};