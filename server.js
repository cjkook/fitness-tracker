const express = require("express"); // Express web server framework
const mongojs = require("mongojs");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// * express server
const app = express();
const PORT = process.env.PORT || 8888;

// * mongo db
const databaseUrl = "zoo";
const collections = ["animals"];
const db = mongojs(databaseUrl, collections);

// * server settings 
app
	.use(express.static(__dirname + "/public"))
	.use(cors())
	.use(express.urlencoded({ extended: true }))
	.use(express.json());

// * db errors
db.on("error", error => {
  console.log("Database Error:", error);
});

// * routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
  console.log('index')
});

app.get("/stats", (req, res) => {
  console.log('stats')
  res.sendFile(path.join(__dirname, "/public/html/stats.html"));
});

app.get("/exercise?", (req, res) => {
  console.log('exercise?')
  res.sendFile(path.join(__dirname, "/public/html/exercise.html"));
});

app.get("/exercise", (req, res) => {
  console.log('new workout')
  res.sendFile(path.join(__dirname, "/public/html/exercise.html"));
});

// TODO: routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", (req,res) => {
  db.animals.find().sort({name:1}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
})

// Set the app to listen on port 3000
app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
