import FinancialRecommendation from "../models/FinancialRecommendation.js";

export const getAllFinancialRecommendations = async () => {
  try {
    const financialRecommendations = await FinancialRecommendation.find();
    return financialRecommendations;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getFinancialRecommendationById = async (id: string) => {
  try {
    const financialRecommendation = await FinancialRecommendation.findById(id);
    return financialRecommendation;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createFinancialRecommendation = async (
  userId: string,
  text: string,
  date: number | null
) => {
  try {
    const financialRecommendation = await FinancialRecommendation.create({
      text,
      user: userId,
      date,
    });
    return {
      success: true,
      data: financialRecommendation,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateFinancialRecommendation = async (
  id: string,
  text: string
) => {
  try {
    const updatedFinancialRecommendation =
      await FinancialRecommendation.findByIdAndUpdate(id, {
        text,
      });
    return {
      success: true,
      data: updatedFinancialRecommendation,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteFinancialRecommendation = async (id: string) => {
  try {
    const deletedFinancialRecommendation =
      await FinancialRecommendation.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedFinancialRecommendation,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
