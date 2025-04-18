import mongoose from "mongoose";
const exerciseInstanceSchema = new mongoose.Schema({
  workout_session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkoutSession",
  },
  exercise: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
  sets: Number,
  reps_per_set: Number,
  weight_kg: Number,
  time_minutes: Number,
});

module.exports = mongoose.model("ExerciseInstance", exerciseInstanceSchema);
