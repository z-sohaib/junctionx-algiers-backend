import admin from "../config/firebase.js";

import Notification from "../models/Notification.js";

export const sendNotification = async function sendNotification(
  notification,
  user
) {
  try {
    let notif = new Notification({
      title: notification.title,
      body: notification.body,
    });
    await notif.save();
    await user.updateOne({ $push: { notifications: notif._id } });

    const response = await admin.messaging().sendToDevice(user.fcmToken, {
      notification,
    });
    console.log("failure count:" + response.results[0].error);
    return response;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const sendNotificationChannel = async function sendNotificationChannel(
  notification,
  channel = "Users"
) {
  try {
    // let users = await User.find();
    const response = await admin
      .messaging()
      .sendToTopic(channel, { notification });

    return response;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
