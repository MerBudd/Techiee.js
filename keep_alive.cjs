// Turn on webserver, log to console and webserver

console.log("Webserver is on, 24/7 should work and bot should be alive. https://techiee.onrender.com");

var http = require('http');
http.createServer(function (req, res) {
  res.write("Webserver is on, 24/7 should work and bot should be alive. https://techiee.onrender.com");
  res.end();
}).listen(8080);
