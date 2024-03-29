require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(`
    <body style="margin:0">
      <div style="border:1px solid black; height:10vh; background-color:seashell">
        <h1 style="text-align:center; color:thistle">Hello Mochi-Trading!</h1>
      </div>
    </body>
  `);
});

app.get("*", (req, res) => {
  res.status(404).send(`
    <body style="margin:0">
      <div style="border:1px solid black; height:10vh; background-color:red">
        <h1 style="text-align:center; color:white">404 Page</h1>
      </div>
    </body>
  `);
});

app.listen(process.env.PORT, function () {
  console.log("Ready!");
});
