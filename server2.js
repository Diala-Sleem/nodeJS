const express = require("express");
const path = require("path");
const server = express();
server.use(express.urlencoded({ extended: true }));
//----------------------------

server.get("/", (req, res, next) => {
  res.send(
    '<form action="/form" method="post"><input type="text" name="firstName" id="firstName"/><button type="submit">send</button></form>'
  );
});

server.post("/form", (req, res, next) => {
  console.log(req.body.firstName);
  res.send(req.body.firstName);
});

//----------------------------
server.listen(5000, () => console.log("server run in port 5000"));
