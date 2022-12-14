import mongoose, { model } from "mongoose";

mongoose.set("strictQuery", false);

const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
});
