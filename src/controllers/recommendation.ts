import { Request, Response } from "express";

import {
  getAllFinancialRecommendations,
  getFinancialRecommendationById,
  createFinancialRecommendation,
  updateFinancialRecommendation,
  deleteFinancialRecommendation,
} from "../services/FinancialRecommendationService.js";
import { UserInterface } from "../models/User.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

export const getAllHandler = async (req: Request, res: Response) => {
  const financialRecommendations = await getAllFinancialRecommendations();
  res.status(200).json({
    success: true,
    message: "Financial Recommendations fetched successfully",
    data: financialRecommendations,
  });
};

export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const financialRecommendation = await getFinancialRecommendationById(id);
  if (!financialRecommendation) {
    return res.status(400).json({
      success: false,
      message: "Financial Recommendation not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Financial Recommendation fetched successfully",
    data: financialRecommendation,
  });
};

export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { text } = req.body;
  const { _id } = req.user;

  const data = await createFinancialRecommendation(_id, text, Date.now());
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Financial Recommendation created successfully",
      data: data.data,
    });
  }
};

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;

  const data = await updateFinancialRecommendation(id, text);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Financial Recommendation updated successfully",
      data: data.data,
    });
  }
};

export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteFinancialRecommendation(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Financial Recommendation deleted successfully",
      data: data.data,
    });
  }
};
