var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var flutes = ["miyazawa", "altus", "yamaha"]

app.get('/flutes', function(req, res){
    //grab and show all flute brands
    res.json(flutes)
});

app.get('/flutes/:index', function(req, res){
    //grab individual flute brands
    var index = req.params.index
    var flute = flutes[index]
    res.json(flute)
})

app.post('/flutes/', function(req, res){
    //add flute brand "flute" to index
    var flute = req.body.flute
    flutes.push(flute)
    console.log(flute)
    res.json("success")
})

app.patch('/flutes/:index', function(req, res){
    //edit flute in flutes
    var index = req.params.index
    var flute = req.body.flute
    flutes[index] = flute
    res.json("success")
})

app.delete('/flutes/:index', function(req, res){
    //delete flute in flutes
    var index = req.params.index
    flutes.splice(index, 1)
    res.json("success")
})

server.listen(3000, function(){
    console.log('listening on port 3000');
});
