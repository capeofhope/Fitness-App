import mongoose from "mongoose";
const workoutPlanSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    goal: { type: String, enum: ["strength", "cardio", "flexibility"] },
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },
    duration_weeks: Number,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkoutPlan", workoutPlanSchema);
