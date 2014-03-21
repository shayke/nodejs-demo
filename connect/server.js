var http = require('http');
var connect = require('connect');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })

http.createServer(app).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');