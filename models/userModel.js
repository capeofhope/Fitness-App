import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    height_cm: { type: Number },
    weight_kg: { type: Number },
    fitness_goal: {
      type: String,
      enum: ["weight_loss", "muscle_gain", "maintenance"],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
