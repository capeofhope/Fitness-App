import mongoose from "mongoose";
const workoutSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  workout_plan: { type: mongoose.Schema.Types.ObjectId, ref: "WorkoutPlan" },
  date: { type: Date, default: Date.now },
  duration_minutes: Number,
  calories_burned: Number,
  notes: String,
});

module.exports = mongoose.model("WorkoutSession", workoutSessionSchema);
