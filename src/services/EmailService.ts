import transporter from "../config/mail.js";

export const sendEmail = async (email, subject, template, context) => {
  let mailOptions = {
    from: process.env.email,
    to: email,
    subject,
    template,
    context,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email sent: " + info.response);
      return false;
    }
  });
};
