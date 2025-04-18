import mongoose from "mongoose";
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["cardio", "strength", "mobility"] },
  description: String,
  primary_muscle_group: String,
  secondary_muscle_group: String,
  equipment_needed: String,
  image_url: String,
  video_url: String,
});

module.exports = mongoose.model("Exercise", exerciseSchema);
