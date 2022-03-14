import mongoose from "mongoose";

const reviewEntrySchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    userReview: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ReviewEntry ||
  mongoose.model("ReviewEntry", reviewEntrySchema);
