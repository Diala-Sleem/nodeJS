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

//----------1----connect----------
app.get("/create", (req, res) => {
  mongoose.connect(url).then(() => {
    Student.insertMany([
      {
        firstName: "Shamil",
        lastName: "vvds",
        age: 20,
        speciality: "web dev",
      },
      {
        firstName: "Nora",
        lastName: "alau",
        age: 20,
        speciality: "web dev",
      },
    ]);
    console.log("Students added");
  });
  res.send("Students added");
});
//------------2------read------
app.get("/readdata", (req, res) => {
  mongoose.connect(url).then(() => {
    Student.find({ _id: "6313dbfb4f5351de48d5b0a8" }, (err, docs) =>
      console.log(docs)
    );
  });
  res.send("find but only one");
});

//------------3------read--------------
app.get("/readdataall", (req, res) => {
  mongoose.connect(url).then((result) => {
    Student.find((err, docs) => console.log(docs));
  });
  res.send("find");
});

//------------4--------read------------
app.get("/readdatabyid", (req, res) => {
  mongoose.connect(url).then((result) => {
    Student.findById((_id = "6313dbfb4f5351de48d5b0a8"), (err, docs) =>
      console.log(docs)
    );
  });
  res.send("findById");
});
//------------5--------read------------
app.get("/readonedata", (req, res) => {
  mongoose.connect(url).then((result) => {
    Student.findOne({ _id: "6313dbfb4f5351de48d5b0a8" }, (err, docs) =>
      console.log(docs)
    );
  });
  res.send("findOne");
});

//------------6--------update one------------
app.get("/updateone", (req, res) => {
  mongoose.connect(url).then((result) => {
      Student.updateOne({ _id: "6313dbfb4f5351de48d5b0a8" },{firstName: "John", lastName: "Don"}, (err, docs) =>
      { 
      console.log(docs)}
    );
  });
  res.send("updateOne");
});
//------------7--------updateMany------------
app.get("/update", (req, res) => {
  mongoose.connect(url).then((result) => {
      Student.updateMany(
        { firstName: "Tamer" },
        { firstName: "Max"},
        (err, docs) => {
          console.log(docs);
        }
      );
  });
  res.send("updateMany");
});

//------------8--------delete one------------
app.get("/deleteone", (req, res) => {
  mongoose.connect(url).then((result) => {
    Student.deleteOne(
      { _id: "6313d7b339c9a328bd618519" },
      (err, docs) => {
        console.log(docs);
      }
    );
  });
  res.send("deleteOne");
});
//------------8--------delete many------------
app.get("/deletemany", (req, res) => {
  mongoose.connect(url).then((result) => {
    Student.deleteMany({ firstName: "Shamil" }, (err, docs) => {
      console.log(docs);
    });
  });
  res.send("deleteMany");
});
////////////////////////////////

app.listen(5000, () => console.log("server run on port 5000"));
