import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    isSpend: {
      type: Boolean, // is false, then it's an add
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
