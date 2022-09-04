//----mongoose butter then mongodb and used more because it is easier and we can use schema
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mytest";
////////////////////////////////
let schemaStudent = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  speciality: String,
});
  let Student = mongoose.model("student", schemaStudent);

//------------------------
app.get("/", (req, res) => {
  mongoose.connect(url).then((res) => {
    console.log("connected !");
    mongoose.disconnect();
  });
});
//...
app.get("/createcollection", (req, res) => {
  mongoose.connect(url).then((res) => {
    let Std = new Student({
      firstName: "Lara",
      lastName: "Sleem",
      age: 20,
      speciality: "web dev",
    });
    Std.save();
  });
});
//...
app.get("/createcollectionmany", (req, res) => {
  mongoose.connect(url).then((res) => {
    Student.insertMany([
      {
        firstName: "Tamer",
        lastName: "Sleem",
        age: 20,
        speciality: "web dev",
      },
      {
        firstName: "Maid",
        lastName: "Sleem",
        age: 20,
        speciality: "web dev",
      },
    ]);
  });
});

////////////////////////////////

app.listen(5000, () => console.log("server run on port 5000"));
