import ExpenseCategory from "../models/ExpenseCategory.js";

export const getAllExpenseCategories = async () => {
  try {
    const expenseCategories = await ExpenseCategory.find();
    return expenseCategories;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getExpenseCategoryById = async (id: string) => {
  try {
    const expenseCategory = await ExpenseCategory.findById(id);
    return expenseCategory;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createExpenseCategory = async (name: string) => {
  try {
    const expenseCategory = await ExpenseCategory.create({
      name,
    });
    return {
      success: true,
      data: expenseCategory,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateExpenseCategory = async (
  id: string,
  name: string | null
) => {
  try {
    const updatedExpenseCategory = await ExpenseCategory.findByIdAndUpdate(id, {
      name,
    });
    return {
      success: true,
      data: updatedExpenseCategory,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteExpenseCategory = async (id: string) => {
  try {
    const deletedExpenseCategory = await ExpenseCategory.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedExpenseCategory,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
