var express = require('express')
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({extended: true}));

	var nba = ["lakers", "knicks", "cavs"];

	app.get('/teams', function(req, res){

		res.json(nba);
	})

	app.get('/teams/:index', function(req, res){

		var index = req.params.index;
		res.json(nba[index]);

	})
	app.post('/teams', function(req, res){

		var team = req.body.team;
		nba.push(team);
		res.json(nba);
	})

	app.patch('/teams/:index', function(req, res){

		var index = req.params.index;
		var team = req.body.team;
		nba[index] = team;

		res.json(nba);
	})

	app.delete('/teams/:index', function(req, res){

		var index = req.params.index;
		nba.splice(index, 1);
		res.json(nba);

	})


	server.listen(3000, function(){

		console.log('hi');
	})