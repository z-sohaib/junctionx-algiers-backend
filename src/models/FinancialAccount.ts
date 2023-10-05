import mongoose from "mongoose";

const FinancialAccountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bank: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    expiration: {
      type: String,
      required: true,
    },
    ccv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FinancialAccount = mongoose.model(
  "FinancialAccount",
  FinancialAccountSchema
);

export default FinancialAccount;
