const router = require("express").Router();
const db = require("../models");

// API ROUTES
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbItem) => {
      // console.log(dbItem)
      res.json(dbItem);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("get all workouts");
});

router.put("/api/workouts/:id", (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  db.Workout.findOneAndUpdate(
    { _id: id },
    { $push: { 
      exercises: req.body } },
    { new: true }
  ).then((dbItem) => {
    res.json(dbItem);
  });
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body);
  db.Workout.create({})
    .then((dbItem) => {
      console.log(dbItem);
      res.json(dbItem);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log("range");
  db.Workout.find({})
    .then((dbItem) => {
      console.log(dbItem)
      res.json(dbItem);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
