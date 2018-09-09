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

        var matchCountHolder;

        var chosenMatch = {};

        var newUser = request.body;

        console.log(personaList);
        console.log(newUser);


        for (var i = 0; i < personaList.length; i++) {

            console.log("we got into the first for loop");

            
            for (var j = 0; j < newUser.scores.length; j++ ) {
                

                console.log("we got into the second for loop");
                
                if (personaList[i].scores[j] == newUser.scores[j]) {
        
                    console.log("marking an entry...");

                    matches++;

                    matchCountHolder = matches;

                    console.log(matchCountHolder);



                } //close if statement



            } // close second for loop

            console.log("entering last phase of for loop");

            console.log(matches);

            
        } //close first for loop

        console.log("outside of for loops; last phase underway")

        
        // if (matchCountHolder >= matches) {

        //     console.log("inside final If statement");

        //     personaList.push(newUser);

        //     response.json(ENTER MATCH HERE);

        //     return;

        // }
    
    });
}


// INCOMPLETE: Can't resolve the following: 

//1 If statement (line 43) runs the ENTIRE friends array when screening matches
    // can't get it to just run PER object

//2 don't know how to send final result to the client
    //perhaps response.send(finalMatchPick)?

//OTHER: Nodemon doesn't work properly with application