//Main js file of our shopping list app
var express = require('express'); //Require express module

var app = express();      // Create our app object that holds our routes

app.listen(3000, function(err) {    //Start listening on port 3000
  console.log('shoppinglist listening on http://localhost:3000');

});

app.use('/', express.static('./app'));   //Serve our static html files

app.get('/list', function(request,response){
  response.json([1,2,3]);
});
