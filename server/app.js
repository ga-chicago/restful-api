var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var moviesArray = ["Rosemary's Baby", "Alien"];

app.get('/movies', function(request, response) {
	response.json(moviesArray)
})

app.post('/movies/', function(request, response) {
	var title = request.body.title;
	moviesArray.push(title);
	response.json(moviesArray);
})

app.patch('/movies/:wildcard', function(request, response) {
	var index = request.params.wildcard;
	var newTitle = request.body.title;
	moviesArray[index] = newTitle;
	response.json(moviesArray);
})

app.delete('/movies/:wildcard', function(request, response) {
	var index = request.params.wildcard;
	moviesArray.splice(index, 1);
	response.json(moviesArray);
})

server.listen(3000, function () {
	console.log("listening on port 3000")
})
