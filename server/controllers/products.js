const router = require("express").Router();

// GET INDEX ROUTE
router.get("/", (req, res) => {
  res.send("GET /products stub");
});

// CREATE
router.post("/", (req, res) => {
  res.send("POST /products stub");
});

// NEW
router.get("/new", (req, res) => {
  res.render("GET /products/new stub");
});

// SHOW
router.get("/:id", (req, res) => {
  res.send("GET /products/:id stub");
});

// EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

// UPDATE
router.put("/:id", (req, res) => {
  res.send("PUT /products/:id stub");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE /products/:id stub");
});

module.exports = router;
