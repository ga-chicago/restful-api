
//crud app
//wine bar


var express 	= require('express'),
	app 		= express();
	server 		= require('http').createServer(app),
	path 		= require('path');
	bodyParser 	= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var wine = []; //no wine will be provided when the api starts


app.get('/wine', function(request, response){ 
	response.json(wine);
})
//return wineList at the given index
app.get('/wine/:index', function(request, response){
	var index = request.params.index;
	var wineList = wine[index]
	response.json(wineList)
}

app.post('/wine', function(request, response){ 
	//push in a new wine into the wine array using the wineList
	//from the request
	var type = request.body.type;
	wine.push(type);
	response.json('success');
})

app.patch('/wine/:index', function(request, response){
	//update the pizza array at a specific index
	var index = request.params.index;
	var type = request.body.type;
	wineList[index] = type;
	response.json('success')
})

app.delete('/wine:index', function (request, response){
	//delete the wine from the array at the provided index
	var index = request.params.index;
	wine.splice(index, 1);
	response.json({status: 'success', wine: wine})
})


server.listen(3000, function(){
	console.log('listening on port 3000');
});