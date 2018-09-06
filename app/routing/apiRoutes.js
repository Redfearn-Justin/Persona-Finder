// Data Load (apprehending data)
//===================================

var personaList = require("../data/friends");


// Routing
//======================================

module.exports = function(app) {
    
    //API GET request
    app.get("/api/friends", function(req, res) {

        res.json(personaList);
    });


    //Below handles when user submit form

    app.post("/api/friends", function(req, res) {

        //compatibility logic goes here!!
        //(comparing answers via score and whatnot)

        personaList.push(req.body);
        //res.json(true);

    });
}


// TO DO (NOTES)

// add functionality to "clear" entries?