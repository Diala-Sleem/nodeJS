const express = require("express");
const server = express();
server.use(express.urlencoded({ extended: true }));

//--------------------------------------

server.get("/", (req, res, next) => {
  res.send("Home page");
});
//................................................................
let students = [
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



server.get("/students", (req, res, next) => {
  res.send(
    students.map((student) => {
      // return { firstname: student.firstname, lastname: student.lastname };
      //  return [student.firstname, student.lastname] ;
            //  return student.firstname;
       return student;

    })
  );
});

server.get("/student/:id", (req, res, next) => {
  let id = req.params.id;

  let student = students.find((student) => {
    return student.id == id;
  });
  if (student) {
    res.send(student);
  } else {
    res.send(`Student with id=${id} not found`);
  }
});

server.delete("/student/delete/:id", (req, res, next) => {
  let student = students.find((student) => student.id == req.params.id);
  let studentPosition = students.indexOf(student);
  students.splice(studentPosition, 1);
  res.send(students);
});

// server.delete("/student/delete/:id", (req, res, next) => {
//   let student = students.find((student) => student.id == req.params.id);
//   let studentsAfterDelete = students.filter(
//     (student) => student.id != req.params.id
//   );
//   res.send(studentsAfterDelete);
// });

server.post("/student/addstudent", (req, res, next) => {
  let newStudent = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    speciality: req.body.speciality,
  };
  students.push(newStudent);
  res.send(students);
});

server.put("/student/updatestudent/:id", (req, res, next) => {
  let updateStudent = students.find(student => req.params.id == student.id); 
        updateStudent.firstname = req.body.firstname;
        updateStudent.lastname = req.body.lastname;
        updateStudent.speciality = req.body.speciality;
 
  res.send(updateStudent);
});
//--------------------------------
server.listen(5000, () => console.log("server run on port 5000"));
