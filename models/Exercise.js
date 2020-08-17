const mongoose = require("mongoose");

const Schema = mongoose.Schema; // get class from library

// class
const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a valid exercise type",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this exercise",
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
