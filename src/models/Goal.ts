import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    goal: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tosave: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", GoalSchema);

export default Goal;
