const Notification = require("../models/Notification.js");
const { sendNotificationChannel } = require("../utils/Notification.js");

export const createNotification = async (
  userId: string,
  title: string,
  body: string
) => {
  try {
    const newNotification = new Notification({
      user: userId,
      title,
      body,
    });

    let notification = {
      title,
      body,
    };

    await sendNotificationChannel(notification);
    await newNotification.save();

    return {
      success: true,
      data: newNotification,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};

export const createBroadcastNotification = async (
  title: string,
  body: string
) => {
  try {
    const newNotification = new Notification({
      title,
      body,
    });

    let notification = {
      title,
      body,
    };

    await sendNotificationChannel(notification);
    await newNotification.save();

    return {
      success: true,
      data: newNotification,
    };
  } catch (err) {
    console.log(err.message);
    return {
      success: false,
      data: err.message,
    };
  }
};
