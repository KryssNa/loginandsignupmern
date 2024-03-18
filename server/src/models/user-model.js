const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    default: false,
  },
});

userSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(user.password, salt);
  user.password = hassedPassword;
});

userSchema.methods.generateToken =  function() {
  try {
    return jwt.sign(
      {
        userID: this._id,
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );
  } catch (error) {
    console.log(`Error generating token:${error}`);
  }
};

userSchema.methods.comparePassword =  function(password){
  try {
    return  bcrypt.compare( password,this.password);
  } catch (error) {
    console.log(`Error comparing password:${error}`);
  }
};

const User = new mongoose.model("users", userSchema);

module.exports = User;
