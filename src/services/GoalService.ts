import Goal from "../models/Goal.js";

export const getAllGoals = async () => {
  try {
    const goals = await Goal.find();
    return goals;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getGoalById = async (id: string) => {
  try {
    const goal = await Goal.findById(id);
    return goal;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createGoal = async (
  userId: string,
  goal: string,
  price: number,
  tosave: number
) => {
  try {
    const newGoal = await Goal.create({
      goal,
      user: userId,
      price,
      tosave,
    });
    return {
      success: true,
      data: newGoal,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateGoal = async (
  id: string,
  goal: string,
  price: number,
  tosave: number
) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(id, {
      goal,
      price,
      tosave,
    });
    return {
      success: true,
      data: updatedGoal,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteGoal = async (id: string) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedGoal,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
