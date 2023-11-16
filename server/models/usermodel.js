import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 30
    },
    email: {
      type: String,
      required: true,
      max:50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min:5
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
