import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  text: String,
  completed: { type: Boolean, default: false },
});

export default mongoose.model("todos", todoSchema);
