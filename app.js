var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').load();
var request = require('request');


app.use(express.static('./client'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Custom Middleware for Accessing APIs
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/key', function(req, res){
	var dUrl = "https://api.dribbble.com/v1/shots?&timeframe=week";
	var page = page || 1;
    var limit = limit || 21;
	request(dUrl + process.env.D_API_TOKEN + '&page=' + page + '&per_page=' + limit, function(err, response, body){	res.json(JSON.parse(body))
	});
});


var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Successfully landed on port ' + port);
});
