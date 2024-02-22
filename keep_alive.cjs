// Turn on webserver

var http = require('http');
http.createServer(function (req, res) {
  res.write("I'm alive, discord-gemini.merbudd.repl.co");
  res.end();
}).listen(8080);
