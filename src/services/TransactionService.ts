import Transaction from "../models/Transaction.js";

export const getAllTransactions = async () => {
  try {
    const transactions = await Transaction.find();
    return transactions;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getTransactionById = async (id: string) => {
  try {
    const transaction = await Transaction.findById(id);
    return transaction;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createTransaction = async (
  userId: string,
  date: number | null,
  description: string,
  amount: number,
  isSpend: boolean
) => {
  try {
    const transaction = await Transaction.create({
      description,
      user: userId,
      date,
      amount,
      isSpend,
    });
    return {
      success: true,
      data: transaction,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateTransaction = async (
  id: string,
  date: number | null,
  description: string,
  amount: number,
  isSpend: boolean
) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
      date,
      description,
      amount,
      isSpend,
    });
    return {
      success: true,
      data: updatedTransaction,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteTransaction = async (id: string) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedTransaction,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
