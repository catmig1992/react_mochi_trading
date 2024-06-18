const router = require("express").Router();

// GET INDEX ROUTE
router.get("/", (req, res) => {
  res.send("GET /events stub");
});

// CREATE
router.post("/", (req, res) => {
  res.send("POST /events stub");
});

// NEW
router.get("/new", (req, res) => {
  res.render("GET /events/new stub");
});

// SHOW
router.get("/:id", (req, res) => {
  res.send("GET /events/:id stub");
});

// EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

// UPDATE
router.put("/:id", (req, res) => {
  res.send("PUT /events/:id stub");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE /events/:id stub");
});

module.exports = router;
