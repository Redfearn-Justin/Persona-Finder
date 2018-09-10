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

        console.log(personaList);
        console.log(newPersona);


        for (var i = 0; i < personaList.length; i++) {

            var matches = 0; //NEED CLARIFICATION

        
            console.log("we got into the first for loop");

            
            for (var j = 0; j < newPersona.scores.length; j++ ) {

               console.log("we got into the second for loop");

               matches += personaList[i].scores[j] === newPersona.scores[j];

               matchpoints = matches;

               console.log(matches);

            } // close second for loop

            answerTotals.push(matches);

            console.log("Here are the final match scores: " + answerTotals);


            if (Math.max(...answerTotals)) {

                var winningNumber = Math.max(...answerTotals);

                console.log(winningNumber);

                //match the winning number to that of the original match

                var matchVariable = winningNumber.indexOf()

                
                // personaList.push(newPersona);

                // response.json(chosenMatch);

                // return;

            } //close if statement

            
        } //close first for loop
    
    });
}

// INCOMPLETE: Can't resolve the following: 

//1 If statement (line 43) runs the ENTIRE friends array when screening matches
    // can't get it to just run PER object

//2 don't know how to send final result to the client
    //perhaps response.send(finalMatchPick)?

//OTHER: Nodemon doesn't work properly with application