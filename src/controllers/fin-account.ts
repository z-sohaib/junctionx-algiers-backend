import { Request, Response } from "express";

import {
  getAllFinancialAccounts,
  getFinancialAccountById,
  createFinancialAccount,
  updateFinancialAccount,
  deleteFinancialAccount,
  getUserFinancialAccounts,
} from "../services/FinancialAccountService.js";
import { UserInterface } from "../models/User.js";

interface AuthRequest extends Request {
  user: UserInterface;
}

// @desc    Get All Financial Accounts
// @route   GET /fin-accounts/
// @access  Public
export const getAllHandler = async (req: Request, res: Response) => {
  const financialAccounts = await getAllFinancialAccounts();
  res.status(200).json({
    success: true,
    message: "Financial Accounts fetched successfully",
    data: financialAccounts,
  });
};

// @desc    Get a Specific User's Financial Account
// @route   GET /fin-accounts/user/:id
// @access  Public
export const getSpecificUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const userFinancialAccounts = await getUserFinancialAccounts(id);
  res.status(200).json({
    success: true,
    message: "User Financial Accounts fetched successfully",
    data: userFinancialAccounts,
  });
};

// @desc    Get One Financial Account By ID
// @route   GET /fin-accounts/:id
// @access  Public
export const getOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const financialAccount = await getFinancialAccountById(id);
  if (!financialAccount) {
    return res.status(400).json({
      success: false,
      message: "Financial Account not found. Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "Financial Account fetched successfully",
    data: financialAccount,
  });
};

// @desc    Create a new Financial Account
// @route   POST /fin-accounts/
// @access  Private
export const createOneHandler = async (req: AuthRequest, res: Response) => {
  const { bank, type, number, name, expiration, ccv } = req.body;
  const { _id } = req.user;

  const data = await createFinancialAccount(
    _id,
    bank,
    type,
    number,
    name,
    expiration,
    ccv
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
      message: "Financial Account created successfully",
      data: data.data,
    });
  }
};

// @desc    Update an Existing Financial Account
// @route   PUT /fin-accounts/:id
// @access  Public
export const updateOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bank, type, number, name, expiration, ccv } = req.body;

  const data = await updateFinancialAccount(
    id,
    bank,
    type,
    number,
    name,
    expiration,
    ccv
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
      message: "Financial Account updated successfully",
      data: data.data,
    });
  }
};

// @desc    Delete an Existing Financial Account
// @route   DELETE /fin-accounts/:id
// @access  Public
export const deleteOneHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteFinancialAccount(id);
  if (!data.success) {
    res.status(400).json({
      success: true,
      message: data.data,
      data: null,
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Financial Account deleted successfully",
      data: data.data,
    });
  }
};
