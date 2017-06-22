var express = require("express");
var app = express();
var server = require("http").createServer(app);
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

var kindsOfFish = ["one fish", "two fish", "red fish", "blue fish"];

app.get("/fish", function(req, res) {
	res.json(kindsOfFish);
});

app.get("/fish/:index", function(req, res) {
	res.json(kindsOfFish[req.params.index]);
});

app.post("/fish", function(req, res) {
	kindsOfFish.push(req.body.newFish);
	res.json(kindsOfFish);
});

app.patch("/fish/:index", function(req, res) {
	kindsOfFish[req.params.index] = req.body.newFish;
	res.json(kindsOfFish);
});

app.delete("/fish/:index", function(req, res) {
	kindsOfFish.splice(req.params.index, 1);
	res.json(kindsOfFish);
});

server.listen(3000, function(){
	console.log("Listening on 3000!!")
});