import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("user", userSchema, "users");

export default User;
