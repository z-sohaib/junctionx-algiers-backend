import User from "../models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { getUserByEmail } from "./UserService";

export const loginUser = async ({ email, password }) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    return user;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const registerUser = async ({ name, telephone, email, password }) => {
  try {
    // find the user by email
    let user = await getUserByEmail(email);
    // if the user exists, return null
    if (user) {
      return null;
    }

    // generate a verification token to use in the account verification phase
    const token = crypto.randomBytes(20).toString("hex");

    // create a new user
    user = new User({
      name,
      telephone,
      email,
      password,
      verificationToken: token,
    });
    // save the user
    await user.save();
    // return the user
    return user;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
