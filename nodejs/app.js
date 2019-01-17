//import http from "http";
const fs = require("fs");

// utf - 8 make bytes to words
const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
// createWriteStream writing in utf-8 by default and rewriting file every time it runs
const myWriteStream = fs.createWriteStream(__dirname + "/write.txt");

//every time when new chunk recieved it fires this function ( every 65486 bytes)
myReadStream.on("data", chunk => {
  console.log("new chunk recieved ---");
  /* console.log(chunk); */
  // Every time new chunk recieved it writing to write.txt
  myWriteStream.write(chunk);
});

/* 
var server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello there!");
});
// Change
server.listen(3000, "127.0.0.1");
console.log("Litening to poort 3000");
 */
