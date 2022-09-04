const express = require("express");
const server = express();
const morgan=require("morgan");
const logger = require("morgan");
//1-------server.get('env')----server.get('combined') or more..
//2-------to switch env between production or development in node write (export NODE_ENV=production)---or---(export NODE_ENV=development)----------
if (server.get("env") == "development") {
  server.use(logger("dev")); //it used only in development mode
}

server.get("/", (req, res, next) => {
  res.send(server.get("env"));
});
//----------------------------------------------------------------
server.listen(5000, () => console.log("server run on port 5000"));
