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

            var matches = 0; //NEED CLARIFICATION

            
            for (var j = 0; j < newPersona.scores.length; j++ ) {

               matches += personaList[i].scores[j] === newPersona.scores[j];

            } // close second for loop

            answerTotals.push(matches);


            //when IF statement here, does not accurately get the highest scoring name; just grabs the name of the LAST entry in Friends.js

            
        } //close first for loop

        
        console.log("Here are the final match scores: " + answerTotals);

        //NOTE: IF statement here does not recognize "personaName"

        var indexOfMaxValue = answerTotals.indexOf(Math.max(...answerTotals));

        console.log("\n\nhere is the index answer: " + indexOfMaxValue);

        console.log("\n\n[JSON Stringify version] Here's the matching persona (hopefully): " + JSON.stringify(personaList[indexOfMaxValue].personaName));

        console.log("\n\nHere's the matching persona (hopefully): " + personaList[indexOfMaxValue].personaName);

        /*
        personaList.push(newPersona);

        response.json(chosenMatch);

        return;
        */

    });
}