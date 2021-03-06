const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoController");

app.set("view engine", "ejs");
app.use(express.static("./public"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

todoController(app);

app.listen(3000);
console.log("Listening to the port 3000");

/* 

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use("/assets", express.static("assets")); // this mapping all files in assets directory and sending it to client
app.get("/", (req, res) => {
  res.render("index");
});

// will fire off if method of html form -- GET
app.get("/contact", (req, res) => {
  res.render("contact", { qs: req.query });
});
// will fire off if method of html form -- POST
// when submit is clicked post method will ocure to the / contact and middleware urlencodedParser will fire off
app.post("/contact", urlencodedParser, (req, res) => {
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:id", (req, res) => {
  var data = { age: 30, job: "webDev", hobbies: ["Web", "123noWeb", "Sql"] };
  res.render("profile", { personId: req.params.id, data: data });
});
app.listen(3000);






app.use("/assets", function(req, res, next) {
  console.log(req.url); // if type ...3000:/assets will display  /  if type something else, will ignore this block of code
  next(); // next need for go to the next middleware its like the end of this block of middleware
});


var server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);
  // if use " || /" then every request will return home page too!
  // and be careful its async functions so no garantee what res will return first

  if (req.url === "/home" || "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  }
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  }
});
server.listen(3000, "127.0.0.1");
console.log("Litening to poort 3000");

 */
/* 
var server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  const obj = {
    name: "Andry",
    job: "Web",
    age: "24"
  };
  res.end(JSON.stringify(obj));
});
server.listen(3000, "127.0.0.1");
console.log("Litening to poort 3000");
 */
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
