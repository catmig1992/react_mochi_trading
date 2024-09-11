/*****DEPENDENCIES*****/
const express = require("express");

/*****CONFIGURATION*****/
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const app = express();

/*****MIDDLEWARE*****/
app.use(cors());

// Need to use Client-Side Rendering for the View via app.use();
// app.use("/api/v1", eachRouter);
// app.use("http://localhost:3001/api/v1");

/*****ROUTES*****/
app.get("/", function (req, res) {
  res.send(`
    <body style="margin:0">
      <div style="border:1px solid black; height:10vh; background-color:seashell">
        <h1 style="text-align:center; color:thistle">Hello Mochi-Trading!</h1>
      </div>
    </body>
  `);
});

/***EVENTS***/
const eventsController = require("./controllers/events_controller.js");
app.use("/events", eventsController);

app.get("*", (req, res) => {
  res.status(404).send(`
    <body style="margin:0">
      <div style="border:1px solid black; height:10vh; background-color:red">
        <h1 style="text-align:center; color:white">404 Page</h1>
      </div>
    </body>
  `);
});

app.listen(PORT, function () {
  console.log("Ready!");
});
