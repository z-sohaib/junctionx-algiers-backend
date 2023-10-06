import { Request, Response } from "express";

import {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../services/TransactionService.js";
import { UserInterface } from "../models/User.js";

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
  const { date, description, amount, isSpend } = req.body;
  const { _id } = req.user;

  const data = await createTransaction(
    _id,
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
    res.status(200).json({
      success: true,
      message: "Transaction created successfully",
      data: data.data,
    });
  }
};

export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { date, description, amount, isSpend } = req.body;

  const data = await updateTransaction(id, date, description, amount, isSpend);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
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
