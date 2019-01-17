const http = require("http");
const fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
  myReadStream.pipe(res);
});
server.listen(3000, "127.0.0.1");
console.log("Litening to poort 3000");

/* 

//every time when new chunk recieved it fires this function ( every 65486 bytes)
// 1. creating a stream
// 2. Fulling buffer
// 3. When buffer full it send chunk of data
// 4. Writing this chunk on the disk -> repeat


myReadStream.on("data", chunk => {
  console.log("new chunk recieved ---");
  // console.log(chunk);
  // Every time new chunk recieved it writing to write.txt
  myWriteStream.write(chunk);
});

//Exactly the same:
myReadStream.pipe(myWriteStream);

*/
