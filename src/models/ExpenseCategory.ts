import mongoose from "mongoose";

const ExpenseCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExpenseCategory = mongoose.model(
  "ExpenseCategory",
  ExpenseCategorySchema
);

export default ExpenseCategory;
