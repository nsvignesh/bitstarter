var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var buffer = new Buffer(20);
 buffer = fs.readFile('index.html');
 response.send(buffer.toString('utf',0,20));
 //response.send(fs.readFile('index.html','utf'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
