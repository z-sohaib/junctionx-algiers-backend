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

export const getAllHandler = async (req: Request, res: Response) => {
  const transactions = await getAllTransactions();
  res.status(200).json({
    success: true,
    message: "Transactions fetched successfully",
    data: transactions,
  });
};

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

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { category, date, description, amount, isSpend } = req.body;

  const data = await updateTransaction(
    id,
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
