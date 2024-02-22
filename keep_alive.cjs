// Turn on webserver

var http = require('http');
http.createServer(function (req, res) {
  res.write("Webserver is on, 24/7 should work. https://techiee.onrender.com");
  console.log("Webserver is on, 24/7 should work. https://techiee.onrender.com");
  res.end();
}).listen(8080);
