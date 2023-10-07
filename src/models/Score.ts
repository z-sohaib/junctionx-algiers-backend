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
  securityPrivacyPoints: number;
  communitySocialPoints: number;
}

const ScoreSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    savingsPoints: {
      type: Number,
      required: true,
    },
    budgetAdherencePoints: {
      type: Number,
      required: true,
    },
    expenseTrackingPoints: {
      type: Number,
      required: true,
    },
    timelyBillPaymentsPoints: {
      type: Number,
      required: true,
    },
    avoidingUnnecessaryExpensesPoints: {
      type: Number,
      required: true,
    },
    goalProgressPoints: {
      type: Number,
      required: true,
    },
    debtManagementPoints: {
      type: Number,
      required: true,
    },
    financialEducationPoints: {
      type: Number,
      required: true,
    },
    regularAppUsagePoints: {
      type: Number,
      required: true,
    },
    securityPrivacyPoints: {
      type: Number,
      required: true,
    },
    communitySocialPoints: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", ScoreSchema);

export default Score;
