import { Request, Response } from "express";

import {
  deleteUser,
  getAllUsers,
  getUserById,
  subscribeDeviceToUser,
  updateUser,
} from "../services/UserService.js";

export const getAllHandler = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};

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

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, telephone } = req.body;

  const data = await updateUser(id, name, email, telephone);
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
