var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').load();

app.use(express.static('./client'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/client/views/index.html');
});

var port = 8080;
app.listen(port, function(){
  console.log('Successfully landed on port ' + port);
});
