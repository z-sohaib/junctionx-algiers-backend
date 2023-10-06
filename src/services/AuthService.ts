import User from "../models/User.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { getUserByEmail } from "./UserService.js";
import { generateCode } from "../utils/math.js";

export const loginUser = async ({ email, password }) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return {
        success: false,
        data: "User Does Not Exist",
      };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return {
        success: false,
        data: "Incorrect Password",
      };

    return {
      success: true,
      data: user,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const registerUser = async ({ name, telephone, email, password }) => {
  try {
    // find the user by email
    let user = await getUserByEmail(email);
    // if the user exists, return null
    if (user) {
      return {
        success: false,
        data: "User Already Exists",
      };
    }

    // generate a verification token to use in the account verification phase
    const token = generateCode(4);

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
    return {
      success: true,
      data: { user, token },
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const verifyUser = async ({ code, email }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        data: "User Not Found",
      };
    }

    if (user.verificationToken === code) {
      user.isVerified = true;
      user.verificationToken = null;
      await user.save();
      return {
        success: true,
        data: user,
      };
    } else {
      return {
        success: false,
        data: "Invalid Verification Code",
      };
    }
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
