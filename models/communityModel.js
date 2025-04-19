const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image_url: {
    type: String,
  },
  members: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      role: {
        type: String,
        enum: ["admin", "moderator", "member"],
        default: "member",
      },
      joinedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Community =
  mongoose.models.Community || mongoose.model("Community", CommunitySchema);
export default Community;
