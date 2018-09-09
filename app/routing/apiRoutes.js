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

        var matches = 0;

        var incomingArray = request.body;

        console.log(personaList);
        console.log(incomingArray);


        for (var i = 0; i < personaList.length; i++) {

            console.log("we got into the first for loop");

            
            for (var j = 0; j < 10; j++ ) {
                

                console.log("we got into the second for loop");

                //ron originally put "==" instead of "==="; if doesn't work, try two instead
                
                if (personaList[i].scores[j] == incomingArray.scores[j]) {
        
                    console.log("marking an entry...");

                    matches++;


                } //close if statement

            } // close second for loop

            console.log(matches);

            
        } //close first for loop


        //after going through the loops, run the below if/else statements

        // if(Math.max(matches)) {

        //     console.log("inside of last If statement")

        //     var closestMatch = Math.max(matches);

        //     console.log(personaList[i] + " was closen as a match, with: " + closestMatch);
    
            // personaList.push(incomingArray);
    
            // response.send(closestMatch);
    
            // return;
        // }

    
    });
}


// TO DO (NOTES)

// add functionality to "clear" entries?