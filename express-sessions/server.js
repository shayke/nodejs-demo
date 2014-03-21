var express = require('express');

var app = express();
app.use(express.cookieParser('S3CRE7'));
app.use(express.cookieSession());
//app.use(express.session({secret: 'S3CRE7'}));
app.use(app.router);

app.get('/', function(req, res) {
  if(!req.session.viewCount) {
  	req.session.viewCount = 0;
  }

  ++req.session.viewCount;
  res.header('Content-Type', 'text/plain');
  res.send("View Count: " + req.session.viewCount);
});

app.listen(3000);
console.log('Server listening on http://127.0.0.1:3000/');
