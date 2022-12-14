import "../src/db/mongoose.js";
import User from "../src/models/user.js";

User.findByIdAndUpdate("63938c16d19a00bd42f34c4f", { age: 36 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 20 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("63938c16d19a00bd42f34c4f", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
