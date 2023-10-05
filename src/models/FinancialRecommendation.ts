import mongoose from "mongoose";

const FinancialRecommendationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FinancialRecommendation = mongoose.model(
  "FinancialRecommendation",
  FinancialRecommendationSchema
);

export default FinancialRecommendation;
