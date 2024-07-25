const express = require("express");
const events = express.Router();

// INDEX ROUTE
events.get("/", (req, res) => {
  res.send("GET /events stub");
});

module.exports = events;
