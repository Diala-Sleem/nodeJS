const express = require("express");
const route = express.Router();
//route.use(express.urlencoded({ extended: true }))
const parser = express.urlencoded({ extended: true });

//----------------------------------------------------------------

let Students = [
  { id: 0, firstname: "diala", lastname: "sleem", speciality: "web developer" },
  { id: 1, firstname: "max", lastname: "done", speciality: "designer" },
  { id: 2, firstname: "lona", lastname: "fors", speciality: "programer" },
  { id: 3, firstname: "ahmad", lastname: "jamal", speciality: "serves" },
  {
    id: 4,
    firstname: "manal",
    lastname: "hasan",
    speciality: "administration",
  },
];
//................................................................

route.get("/", (req, res, next) => {
   res.send(Students)
});

route.get("/:id", (req, res, next) => {
  let id = req.params.id;

  let student = Students.find((student) => {
    return student.id == id;
  });
  if (student) {
    res.send(student);
  } else {
    res.send(`Student with id=${id} not found`);
  }
});

route.delete("/delete/:id", (req, res, next) => {
  let student = Students.find((student) => student.id == req.params.id);
  let studentPosition = Students.indexOf(student);
  Students.splice(studentPosition, 1);
  res.send(Students);
});


route.post("/addstudent", parser, (req, res, next) => {
  let newStudent = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    speciality: req.body.speciality,
  };
  Students.push(newStudent);
  res.send(Students);
});

route.put("/updatestudent/:id", parser, (req, res, next) => {
  let updateStudent = Students.find((student) => req.params.id == student.id);
  updateStudent.firstname = req.body.firstname;
  updateStudent.lastname = req.body.lastname;
  updateStudent.speciality = req.body.speciality;

  res.send(updateStudent);
});

module.exports = route;
