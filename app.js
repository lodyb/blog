var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to my blog');
});

app.listen(3000, function () {
  console.log('Server initialised: http://localhost:3000/');
});
