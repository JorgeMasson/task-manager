import { model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login!");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login!");
  }

  return user;
};

// Hash the plain text password before saving
UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = model("User", UserSchema);

export default User;
