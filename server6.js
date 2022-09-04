//----mongoose butter then mongodb and used more because it is easier and we can use schema
const express = require("express");
const server = express();
//----------------------------------------------------------------
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

server.get("/", (req, res) => {
  MongoClient.connect(url, (err, result) => {
    if (err) throw err;
      let DB = result.db("myCollection");
    let user = { name: "Company Inc", address: "Highway 37" };
    DB.collection("customers").insertOne(user, function (err, res) {
      if (err) throw err;
        console.log("1 document inserted");
      result.close();
    });
             
       res.send("one customer added");

  });
});



//----------------------------------------------------------------

server.listen(5000, () => console.log("server run on port 5000"));
