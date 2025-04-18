import mongoose from "mongoose";
const progressTrackerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  weight_kg: Number,
  body_fat_percentage: Number,
  muscle_mass_percentage: Number,
  notes: String,
});

module.exports = mongoose.model("ProgressTracker", progressTrackerSchema);
