import { Request, Response } from "express";

import {
  getAllSecurityLogs,
  getSecurityLogById,
  createSecurityLog,
  updateSecurityLog,
  deleteSecurityLog,
} from "../services/SecurityLogService.js";
import { UserInterface } from "../models/User.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

export const getAllHandler = async (req: Request, res: Response) => {
  const securityLogs = await getAllSecurityLogs();
  res.status(200).json({
    success: true,
    message: "Security Logs fetched successfully",
    data: securityLogs,
  });
};

export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const securityLog = await getSecurityLogById(id);
  if (!securityLog) {
    return res.status(400).json({
      success: false,
      message: "Security Log not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Security Log fetched successfully",
    data: securityLog,
  });
};

export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { text } = req.body;
  const { _id } = req.user;

  const data = await createSecurityLog(_id, text, Date.now());
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

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;

  const data = await updateSecurityLog(id, text);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Security Log updated successfully",
      data: data.data,
    });
  }
};

export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteSecurityLog(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Security Log deleted successfully",
      data: data.data,
    });
  }
};
