import FinancialAccount from "../models/FinancialAccount.js";

export const getAllFinancialAccounts = async () => {
  try {
    const financialAccounts = await FinancialAccount.find();
    return financialAccounts;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getUserFinancialAccounts = async (userId: string) => {
  try {
    const userFinancialAccounts = await FinancialAccount.find({ user: userId });
    return userFinancialAccounts;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getFinancialAccountById = async (id: string) => {
  try {
    const financialAccount = await FinancialAccount.findById(id);
    return financialAccount;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createFinancialAccount = async (
  userId: string,
  bank: string,
  type: string,
  number: string,
  name: string,
  expiration: string,
  ccv: string
) => {
  try {
    const financialAccount = await FinancialAccount.create({
      user: userId,
      bank,
      type,
      number,
      name,
      expiration,
      ccv,
    });
    return {
      success: true,
      data: financialAccount,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateFinancialAccount = async (
  id: string,
  bank: string,
  type: string,
  number: string,
  name: string,
  expiration: string,
  ccv: string
) => {
  try {
    const updatedFinancialAccount = await FinancialAccount.findByIdAndUpdate(
      id,
      {
        bank,
        type,
        number,
        name,
        expiration,
        ccv,
      }
    );
    return {
      success: true,
      data: updatedFinancialAccount,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteFinancialAccount = async (id: string) => {
  try {
    const deletedFinancialAccount = await FinancialAccount.findByIdAndDelete(
      id
    );
    return {
      success: true,
      data: deletedFinancialAccount,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
