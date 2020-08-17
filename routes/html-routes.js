const router = require("express").Router();
const path = require("path");

// * routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
  console.log("index");
});

router.get("/stats", (req, res) => {
  console.log("stats");
  res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

router.get("/exercise?", (req, res) => {
  console.log("exercise?");
  res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

module.exports = router;