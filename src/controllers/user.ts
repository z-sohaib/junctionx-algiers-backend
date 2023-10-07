import { Request, Response } from "express";

import {
  deleteUser,
  getAllUsers,
  getUserById,
  subscribeDeviceToUser,
  updateUser,
} from "../services/UserService.js";

// @desc    Get All Users
// @route   GET /users/
// @access  Public
export const getAllHandler = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};

// @desc    Get One User By ID
// @route   GET /users/:id
// @access  Public
export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
};

// @desc    Update an Existing User
// @route   PUT /users/:id
// @access  Public
export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    email,
    telephone,
    monthlyAverageSaving,
    unstableSalary,
    salary,
  } = req.body;

  const data = await updateUser(
    id,
    name,
    email,
    telephone,
    monthlyAverageSaving,
    unstableSalary,
    salary
  );
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: { user: data.data },
    });
  }
};

// @desc    Delete an Existing User
// @route   DELETE /users/:id
// @access  Public
export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteUser(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: data.data,
    });
  }
};

// @desc    Subscribe a Device to an Existing User
// @route   PUT /users/subscribe/:id
// @access  Public
export const subscribeDeviceHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { device } = req.body;

  const data = await subscribeDeviceToUser(id, device);

  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "A new device is subscribed to this user",
      data: data.data,
    });
  }
};
