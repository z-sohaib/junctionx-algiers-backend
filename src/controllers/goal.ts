import { Request, Response } from "express";

import {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../services/GoalService.js";
import { UserInterface } from "../models/User.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

export const getAllHandler = async (req: Request, res: Response) => {
  const goals = await getAllGoals();
  res.status(200).json({
    success: true,
    message: "Goals fetched successfully",
    data: goals,
  });
};

export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const goal = await getGoalById(id);
  if (!goal) {
    return res.status(400).json({
      success: false,
      message: "Goal not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Goal fetched successfully",
    data: goal,
  });
};

export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { goal, price, tosave } = req.body;
  const { _id } = req.user;

  const data = await createGoal(_id, goal, price, tosave);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Goal created successfully",
      data: data.data,
    });
  }
};

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { goal, price, tosave } = req.body;

  const data = await updateGoal(id, goal, price, tosave);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Goal updated successfully",
      data: data.data,
    });
  }
};

export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteGoal(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Goal deleted successfully",
      data: data.data,
    });
  }
};
