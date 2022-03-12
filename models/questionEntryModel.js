import mongoose from "mongoose";

const questionEntrySchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    userQuestion: {
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

export default mongoose.models.QuestionEntry ||
  mongoose.model("QuestionEntry", questionEntrySchema);
