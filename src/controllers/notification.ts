import { Request, Response } from "express";

import {
  createBroadcastNotification,
  createNotification,
} from "../services/NotificationService.js";
import { UserInterface } from "../models/User.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

// @desc    Send Notification to One User
// @route   POST /notifications/send
// @access  Public
export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { title, body } = req.body;
  const { _id } = req.user;

  const data = await createNotification(_id, title, body);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Notification Created created successfully",
      data: data.data,
    });
  }
};

// @desc    Send Notification to All User
// @route   POST /notifications/sendall
// @access  Public
export const createAllHandler = async (req: AuthRequest, res: Response) => {
  const { title, body } = req.body;
  const data = await createBroadcastNotification(title, body);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Broadcast Notification Created successfully",
      data: data.data,
    });
  }
};
