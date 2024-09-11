const express = require("express");
const events = express.Router();
const Event = require("../models/event_seed.js");

// INDEX ROUTE
events.get("/", (req, res) => {
  res.send(Event);
});

// CREATE
events.post("/", (req, res) => {
  res.send("POST /events stub");
});

// SHOW
events.get("/:arrayIndex", (req, res) => {
  res.send(Event[req.params.arrayIndex]);
});

module.exports = events;
