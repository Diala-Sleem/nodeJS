// const http = require("http");
// const PORT = 5000;
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.statusCode = 200;
//     res.write("this is Home page");
//     res.end();
//   } else if (req.url == "/about") {
//     res.write("this is About page");
//     res.end();
//   }
// });

// server.listen(PORT, () => console.log(`server run in port ${PORT}`));

const express = require("express");
const server = express();
const path = require("path");

//-----------express use the middleware function-----use()----all()={get,post,patch,put,delete}--------

const parser = express.urlencoded({ extended: true }); //This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request
server.get("/", (req, res, next) => {
  res.send(
    '<form action="/form" method="post"><label for="firstname">First name:</label><br><input type="text" id="firstname" name="firstname" ><br><input type="submit" value="Submit"></form>'
  );
});

server.post("/form",parser, (req, res, next) => {
  console.log(req.body.firstname);
  res.send(req.body.firstname);
});

server.get("/about", (req, res, next) => {
  res.send("<h1>welcome at About</h1>");
});

server.get("/about/:id/:name", (req, res, next) => {
  //http://localhost:5000/about/58165220/diala?age=40&code=1010101
  res.send(
    req.params.id +
      " " +
      req.params.name +
      " " +
      req.query.age +
      " " +
      req.query.code
  );
});
//...............css static file--------------------------------
server.use(express.static(path.join(__dirname, "assets")));
//---------------sendFile-------------------
server.get("/htmlpage", (req, res, next) => {
  //not working in windows// res.sendFile(__dirname +'/client/index.html')
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
//----------------------------using ejs------------------------------------
//let ejs = require("ejs");
server.set("view engine", "ejs");
server.set("views", "views");
server.get("/ejspage", (req, res, next) => {
  res.render("index", { name: "diala", lastname: "sleem" });
});
//-----------------server listen----------------
server.listen(5000, () => {
  console.log("server listen on port 5000");
});
