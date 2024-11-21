import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
      },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
});
export default mongoose.model("User", userSchema);
