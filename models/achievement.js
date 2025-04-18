const achievementSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  date_earned: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Achievement", achievementSchema);
