//Dependencies
//=================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

//Express
//===================================
var app = express();
var PORT = process.env.PORT || 8080;

//Body Parser Set-up
//==================================
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());





//Routes
//===================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//Listener
//===================================
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});