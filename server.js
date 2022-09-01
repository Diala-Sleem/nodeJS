const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  //res.statusCode = 404;
  res.setHeader("content-type", "application/json");
  res.write("hi\n");
  res.write("welcome\n");
  res.write("welcome\n");
  res.write(req.url);
  //------------

  //----------
  res.end("\n done");
});

server.listen(5000, () => console.log("listen in bort 5000"));
