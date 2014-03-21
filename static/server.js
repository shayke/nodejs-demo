var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var fullPath = path.join(__dirname, req.url);
  fs.readFile(fullPath, function(err, content) {
	if(err) {
	  res.writeHead(404);
	  res.end(JSON.stringify(err));
	} else {
	  res.writeHead(200);
	  res.end(content);
	}
  });
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');