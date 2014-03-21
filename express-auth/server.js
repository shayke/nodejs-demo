var express = require('express');

var app = express();

var auth = express.basicAuth('admin', 'password');
//app.use(auth);

app.get('/', function(req, res) {  
  res.header('Content-Type', 'text/plain');
  res.send("Non authenticated page");
});

app.get('/admin', auth, function(req, res) {
  res.header('Content-Type', 'text/plain');
  res.send("You are in!");
});

app.listen(3000);
console.log('Server listening on http://127.0.0.1:3000/');
