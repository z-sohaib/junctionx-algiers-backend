import { Request, Response } from "express";

import { createNotification } from "../services/NotificationService";
import { UserInterface } from "../models/User";
import { sendNotification } from "../utils/notification";
import Notification from "../models/Notification";

interface AuthRequest extends Request {
  user: UserInterface;
}

// @desc    Send Notification to One User
// @route   POST /notifications/send
// @access  Private
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
      message: "Security Log created successfully",
      data: data.data,
    });
  }
};

// @desc    Send Notification to All User
// @route   POST /notifications/sendall
// @access  Private
// export const createAllHandler = async (req: AuthRequest, res: Response) => {
//     const { title, body } = req.body;
//     const data = await sendNotification(_id, title, body);
//     if (!data.success) {
//       res.status(400).json({
//         success: true,
//         message: data.data,
//         data: null,
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Security Log created successfully",
//         data: data.data,
//       });
//     }
//   };
