var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Server initialised: http://localhost:3000/');
});
