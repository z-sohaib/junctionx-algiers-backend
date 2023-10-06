import User from "../models/User.js";

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

export const updateUser = async (
  id: string,
  name: string | null,
  email: string | null,
  telephone: string | null
) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      name,
      email,
      telephone,
    });
    return {
      success: true,
      data: updatedUser,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteUser = async (id: string) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedUser,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const addToTotalCash = async (id: string, amount: number) => {
  try {
    const user = await User.findById(id);
    user.cash = user.cash + amount;
    await user.save();
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

export const subFromTotalCash = async (id: string, amount: number) => {
  try {
    const user = await User.findById(id);
    user.cash = user.cash - amount;
    await user.save();
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
