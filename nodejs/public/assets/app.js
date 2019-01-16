var http = require("http");

var server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello there!");
});
// Change
server.listen(3000, "127.0.0.1");
console.log("Litening to poort 3000");
