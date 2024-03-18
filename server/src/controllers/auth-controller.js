const User = require("../models/user-model");

const home = (req, res) => {
  res.status(200).send("Hello buddy!!");
};

const register = async (req, res, next) => {
  try {
    const userData = await req.body;
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) {
      return res.status(401).json({ msg: "User already exists!!" });
    }
    const newUser = await User.create(userData);
    console.log(newUser);
    return res.status(200).json({
      msg: "Registration successful",
      userID: newUser._id,
      token: newUser.generateToken(),
    });
  } catch (error) {
    console.log(`Error registring user: ${error}`);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userData = await req.body;
    const {email,password}=await req.body;
    const userExists = await User.findOne({ email: userData.email });
    if (!userExists) {
      return res.status(401).json({ msg: "Invalid email " });
    }
    const validatedUser = await userExists.comparePassword(password);
    if (!validatedUser) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    return res.status(200).json({
      msg: "Login successfull",
      userID: userExists._id,
      token: userExists.token,
    });
  } catch (error) {
    console.log(`Error login user: ${error}`);
    next(error);
  }
};

module.exports = { home, register, login };
