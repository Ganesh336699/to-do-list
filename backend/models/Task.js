import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  dueDate: {
    type: String,
    required:true,
  },
  createdAt: {
    type: String,
    default: () => new Date().toISOString().split("T")[0],
  },
  updatedAt: {
    type: String,
    default: () => new Date().toISOString().split("T")[0],
  },
});


export  default mongoose.model( "Task", taskSchema);