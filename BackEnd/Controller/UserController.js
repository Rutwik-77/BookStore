/** @format */

import User from "../model/UserModel.js";
import bcrpytjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrpytjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create user by catch" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrpytjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Username or password" });
    } else {
      res.status(200).json({
        message: "User logged in successfully",
        user: { fullname: user.fullname, email: user.email, _id: user._id },
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "invalid username or password" });
  }
};
