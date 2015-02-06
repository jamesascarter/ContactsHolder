var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/frontend');
app.use(express.static(path.join(__dirname + "/frontend")));

app.get('/', function(request, response){
  response.render('index')
});

server.listen(3000, function(){
  console.log('listening on port 3000')
});

// module.exports = server;

