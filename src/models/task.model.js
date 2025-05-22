import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "medium",
      enum: ["high", "medium", "low"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    assignTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Not Started", "In Process", "Completed"],
      default: "Not Started",
    },
  },
  { timestamps: true }
);

export const taskModel = mongoose.model("Task", taskSchema);
