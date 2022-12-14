import "../src/db/mongoose.js";
import Task from "../src/models/task.js";

//63938f9d68977584c4509b93

Task.findByIdAndUpdate("63938f9d68977584c4509b93", { completed: false })
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: true });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Use async/await
//
// 1. Create deleteTaskAndCount as an async function
//       - Accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach then/catch to log results
// 5. Test your work

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("63938f9d68977584c4509b93")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
