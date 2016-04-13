// Modules
var express = require('express');
var port = process.env.PORT || 1337;
var app = express();

app.use(express.static('./public/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/pubclic/index.html');
})

app.listen(port);
