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

        var totalDifference = 1000;

        var answerTotals = [];

        var newPersona = request.body;

        console.log(personaList);
        console.log(newPersona);


        for (var i = 0; i < personaList.length; i++) {

            var matches = 0; //NEED CLARIFICATION

        
            console.log("we got into the first for loop");

            
            for (var j = 0; j < newPersona.scores.length; j++ ) {

               console.log("we got into the second for loop");

               matches += personaList[i].scores[j] === newPersona.scores[j];

            } // close second for loop

            answerTotals.push(matches);

            console.log("Here are the final match scores: " + answerTotals);

            //when IF statement here, does not accurately get the highest scoring name

            // just grabs the name of the LAST entry in Friends.js

            
        } //close first for loop


        //IF statement here does not recognize "personaName"

        if (Math.max(...answerTotals)) {

            totalDifference = matches;

            var name = personaList[i].personaName;

            console.log(name);

            // var winningNumber = Math.max(...answerTotals);

            //UNRESOLVED: match the "winning" number with that of the actual Persona
            
            // personaList.push(newPersona);

            // response.json(chosenMatch);

            // return;

        } //close if statement
    
    });
}