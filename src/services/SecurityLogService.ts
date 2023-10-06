import SecurityLog from "../models/SecurityLog.js";

export const getAllSecurityLogs = async () => {
  try {
    const securityLogs = await SecurityLog.find();
    return securityLogs;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getSecurityLogById = async (id: string) => {
  try {
    const securityLog = await SecurityLog.findById(id);
    return securityLog;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const createSecurityLog = async (
  userId: string,
  text: string,
  date: number | null
) => {
  try {
    const securityLog = await SecurityLog.create({
      text,
      user: userId,
      date,
    });
    return {
      success: true,
      data: securityLog,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const updateSecurityLog = async (id: string, text: string) => {
  try {
    const updatedSecurityLog = await SecurityLog.findByIdAndUpdate(id, {
      text,
    });
    return {
      success: true,
      data: updatedSecurityLog,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const deleteSecurityLog = async (id: string) => {
  try {
    const deletedSecurityLog = await SecurityLog.findByIdAndDelete(id);
    return {
      success: true,
      data: deletedSecurityLog,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
