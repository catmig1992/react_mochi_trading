let http = require("http");
let server = http.createServer(function (req, res) {
  res.write("<h1 style='color: violet'>Hello Mochi Trading!</h1>");
  res.end();
});

server.listen(3000, function () {
  console.log("Ready!");
});
