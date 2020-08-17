const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
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
        required: "Enter a duration for this exercise",
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
      distance: {
        type: Number,
      }

      // ! add cardio properties
    },
  ],
  totalDuration: {
    type: Number,
  },
});

// ! METHOD TO ADD ALL DURATIONS (.totalDuration)
WorkoutSchema.methods.calcTotalDuration = function () {
  if (this.exercises.length >= 1) {
    let total = 0;
    console.log(entry);
    this.exercises.forEach(function (entry) {
      total += entry.duration;
    });
    return total;
  } else {
    return 0;
  }
};



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
