import mongoose, { models } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
});

userSchema.methods.comparePasswords = async function (enteredPassword) {
  const user = this;

  return await bcrypt.compare(enteredPassword, user.password);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
