import { model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
  },
  age: {
    type: Number,
    required: true,
    default: 0,
    min: [18, "Is too young"],
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must contain at least 6 characters"],
    trim: true,
    validate(value) {
      if (validator.contains(value, "password", [{ ignoreCase: true }])) {
        throw new Error("Password can't be the password");
      }
    },
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = model("User", UserSchema);

export default User;
