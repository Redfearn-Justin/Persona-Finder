// Data Load (apprehending data)
//===================================

var personaList = require("../data/friends");


// Routing
//======================================

module.exports = function(app) {
    
    //API GET request
    app.get("/api/friends", function(request, response) {

        response.json(personaList);
    });


    //Below handles when user submit form

    app.post("/api/friends", function(request, response) {

        var answerTotals = [];

        var newPersona = request.body;


        for (var i = 0; i < personaList.length; i++) {

            var matches = 0;

            
            for (var j = 0; j < newPersona.scores.length; j++ ) {

               matches += personaList[i].scores[j] === newPersona.scores[j];

            } // close second for loop

            answerTotals.push(matches);

            
        } //close first for loop

        //Log results, via variables and logs
        //=================================================================
        
        console.log("Here are the final match scores: " + answerTotals);

        var indexOfMaxValue = answerTotals.indexOf(Math.max(...answerTotals));

        var chosenMatch = personaList[indexOfMaxValue];

        console.log("\n\nhere is the index answer: " + indexOfMaxValue);

        //Push the new Persona to list & Send chosen match to user
        //=====================================================================
     
        personaList.push(newPersona);

        response.json({personaName: chosenMatch.personaName, personaArcana: chosenMatch.personaArcana, ImageLink: chosenMatch.imageLink});

    }); //closes Post
}