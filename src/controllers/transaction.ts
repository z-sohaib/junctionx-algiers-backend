import { Request, Response } from "express";

import {
  getAllTransactions,
  getTodayTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../services/TransactionService.js";
import { UserInterface } from "../models/User.js";
import { addToTotalCash, subFromTotalCash } from "../services/UserService.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

// @desc    Get All Transactions
// @route   GET /transactions/
// @access  Public
export const getAllHandler = async (req: Request, res: Response) => {
  const transactions = await getAllTransactions();
  res.status(200).json({
    success: true,
    message: "Transactions fetched successfully",
    data: transactions,
  });
};

// @desc    Get Today Transactions
// @route   GET /transactions/today/
// @access  Public
export const getTodayHandler = async (req: Request, res: Response) => {
  const todayTransactions = await getTodayTransactions();
  if (todayTransactions) {
    res.status(200).json({
      success: true,
      message: "Transactions fetched successfully",
      data: todayTransactions,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "No Transactions for Today",
      data: [],
    });
  }
};

// @desc    Get One Transaction By ID
// @route   GET /transactions/:id
// @access  Public
export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const transaction = await getTransactionById(id);
  if (!transaction) {
    return res.status(400).json({
      success: false,
      message: "Transaction not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Transaction fetched successfully",
    data: transaction,
  });
};

// @desc    Create a new Transaction
// @route   POST /transactions/
// @access  Private
export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { category, date, description, amount, isSpend } = req.body;
  const { _id } = req.user;

  const data = await createTransaction(
    _id,
    category,
    date || Date.now(),
    description,
    amount,
    isSpend
  );
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    if (isSpend) {
      subFromTotalCash(_id, amount);
    } else {
      addToTotalCash(_id, amount);
    }
    res.status(200).json({
      success: true,
      message: "Transaction created successfully",
      data: data.data,
    });
  }
};

// @desc    Update an Existing Transaction
// @route   PUT /transactions/:id
// @access  Public
export const updateOneHandler = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { _id } = req.user;
  const { category, date, description, amount, isSpend } = req.body;

  const data = await updateTransaction(
    id,
    _id,
    category,
    date,
    description,
    amount,
    isSpend
  );
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    if (data.data.isSpend) {
      addToTotalCash(data.data._id, data.data.amount);
    } else {
      subFromTotalCash(data.data._id, data.data.amount);
    }

    if (isSpend) {
      subFromTotalCash(data.data._id, amount);
    } else {
      addToTotalCash(data.data._id, amount);
    }

    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      data: data.data,
    });
  }
};

// @desc    Delete an Existing Transaction
// @route   DELETE /transactions/:id
// @access  Public
export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteTransaction(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
      data: data.data,
    });
  }
};
