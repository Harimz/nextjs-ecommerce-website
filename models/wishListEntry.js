import mongoose from "mongoose";

const wishListEntrySchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.WishListEntry ||
  mongoose.model("WishListEntry", wishListEntrySchema);
