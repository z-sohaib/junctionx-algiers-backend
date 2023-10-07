import mongoose from "mongoose";

export interface ScoreInterface {
  _id: string;
  user: string;
  Savings_Points: number;
  Budget_Adherence_Points: number;
  Expense_Tracking_Points: number;
  Timely_Bill_Payments_Points: number;
  Avoiding_Unnecessary_Expenses_Points: number;
  Goal_Progress_Points: number;
  Debt_Management_Points: number;
  Financial_Education_Points: number;
  Regular_App_Usage_Points: number;
  Security_Privacy_Points: number;
  Community_Social_Points: number;
}

const ScoreSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Savings_Points: {
      type: Number,
      required: true,
    },
    Budget_Adherence_Points: {
      type: Number,
      required: true,
    },
    Expense_Tracking_Points: {
      type: Number,
      required: true,
    },
    Timely_Bill_Payments_Points: {
      type: Number,
      required: true,
    },
    Avoiding_Unnecessary_Expenses_Points: {
      type: Number,
      required: true,
    },
    Goal_Progress_Points: {
      type: Number,
      required: true,
    },
    Debt_Management_Points: {
      type: Number,
      required: true,
    },
    Financial_Education_Points: {
      type: Number,
      required: true,
    },
    Regular_App_Usage_Points: {
      type: Number,
      required: true,
    },
    Security_Privacy_Points: {
      type: Number,
      required: true,
    },
    Community_Social_Points: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", ScoreSchema);

export default Score;
