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

export const getTodayTransactions = async () => {
  try {
    // Get the current date
    const currentDate = new Date();

    // Create a date range for the current day (start of the day to end of the day)
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const todayTransactions = await Transaction.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });
    return todayTransactions;
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
  categoryId: string,
  date: number | null,
  description: string,
  amount: number,
  isSpend: boolean
) => {
  try {
    const transaction = await Transaction.create({
      user: userId,
      category: categoryId,
      description,
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
  categoryId: string,
  date: number | null,
  description: string,
  amount: number,
  isSpend: boolean
) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
      date,
      category: categoryId,
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
