const express = require("express"); // Express web server framework
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const compression = require('compression') // middleware for compressing 

// * express server
const app = express();
const PORT = process.env.PORT || 8888;

// compression
app.use(compression());

// * mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});
const db = require("./models");

// * server settings
app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

// TODO: route files
// routes
// app.use(require("./routes/api.js"));

// * routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
  console.log("index");
});

app.get("/stats", (req, res) => {
  console.log("stats");
  res.sendFile(path.join(__dirname, "/public/html/stats.html"));
});

app.get("/exercise?", (req, res) => {
  console.log("exercise?");
  res.sendFile(path.join(__dirname, "/public/html/exercise.html"));
});

// API ROUTES
app.get("/api/workouts", (req, res) => {
  db.Exercise.find({})
    .then((dbItem) => {
      // console.log(dbItem)
      res.json(dbItem);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("get all workouts");
});

app.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  db.Exercise.update(
    {
      _id: req,
    },
    {
      $set: req.body,
    },
    (err, note) => {
      if (err) {
        return res.status(500).end();
      } else {
        res.json(note);
      }
    }
  );
  db.Exercise.update({})
    .then((dbItem) => {
      console.log(dbItem);
      res.json(dbItem);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  console.log(req.body);
  // db.Exercise.create({

  // })
  //   .then((dbItem) => {
  //     console.log(dbItem)
  //     res.json(dbItem);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
