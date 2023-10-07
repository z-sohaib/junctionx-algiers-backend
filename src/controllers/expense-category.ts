import { Request, Response } from "express";

import {
  createExpenseCategory,
  deleteExpenseCategory,
  getAllExpenseCategories,
  getExpenseCategoryById,
  updateExpenseCategory,
} from "../services/ExpenseCategoryService.js";

// @desc    Get All Expense Categories
// @route   GET /expense-categories/
// @access  Public
export const getAllHandler = async (req: Request, res: Response) => {
  const expenseCategories = await getAllExpenseCategories();
  res.status(200).json({
    success: true,
    message: "Expense Categories fetched successfully",
    data: expenseCategories,
  });
};

// @desc    Get One Expense Category By ID
// @route   GET /expense-categories/:id
// @access  Public
export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const expenseCategory = await getExpenseCategoryById(id);
  if (!expenseCategory) {
    return res.status(400).json({
      success: false,
      message: "Expense Category not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Expense Category fetched successfully",
    data: expenseCategory,
  });
};

// @desc    Create a new Expense Categoriy
// @route   POST /expense-categories/
// @access  Public
export const createOneHandler = async (req: Request, res: Response) => {
  const { name } = req.body;

  const data = await createExpenseCategory(name);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Expense Category created successfully",
      data: data.data,
    });
  }
};

// @desc    Update an Existing Expense Category
// @route   PUT /expense-categories/:id
// @access  Public
export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const data = await updateExpenseCategory(id, name);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Expense Category updated successfully",
      data: data.data,
    });
  }
};

// @desc    Delete an Existing Expense Category
// @route   DELETE /expense-categories/:id
// @access  Public
export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteExpenseCategory(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Expense Category deleted successfully",
      data: data.data,
    });
  }
};
