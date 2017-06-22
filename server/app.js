var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser'); // npm install in console

app.use(bodyParser.urlencoded({extended: true}));

var playlist = ["Don't You Evah", "California Stars", "From the Dining Table", "Half The World Away", "Angela", "My Sweet Lord", "Lets Be Still", "Nineteen Hundred and Eighty Five", "Changing", "Sleeping Lessons", "Better Days", ]

// returns all the songs in playlist
app.get('/songs', function(request, response) {
  response.json(playlist);
});

app.post('/songs', function(request, response) {
  var song = request.body.song;
  playlist.push(song);
  response.json({status: "success", updatedPlaylist: playlist});
});

app.patch('/songs/:index', function(request, response) {
  var index = request.params.index;
  var song = request.body.song;
  playlist[index] = song;
  response.json({status: "success", updatedPlaylist: playlist})
})

app.delete('/songs/:index', function(request, response) {
  var index = request.params.index; //wild card
  playlist.splice(index, 1);
  response.json({status: "success", updatedPlaylist: playlist})
})

server.listen(3000, function() {
  console.log("listening on port 3000");
});
