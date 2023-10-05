import User from "../models/User";

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
