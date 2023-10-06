import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log("Connection Done");
};

export default ConnectDB;
