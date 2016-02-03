var express = require('express');
var app = express();

app.use(express.static('./client/assets'));

app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/assets/client/views/index.html');
});

var port = 8080;
app.listen(port, function(){
  console.log('Successfully landed on port ' + port);
});
