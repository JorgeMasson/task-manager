import { model, Schema } from "mongoose";

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model("Task", TaskSchema);

export default Task;
