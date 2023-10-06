import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/AuthService.js";
import {
  validateUser,
  validateUserLogin,
} from "../validations/inputValidation.js";
import { generateToken } from "../utils/jwt.js";

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const isValid = validateUserLogin({ email, password });

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid credentials",
      data: null,
    });
  }

  // pass the email and password to the login service
  const data = await loginUser({ email, password });

  if (!data.success) {
    return res.status(400).json({
      success: false,
      message: data.data,
      data: null,
    });
  }

  // generate a token
  const token = generateToken(data.data);

  // send the token to the client
  return res.status(200).json({
    success: true,
    message: "User logged in successfully",
    data: token,
  });
};

export const registerHandler = async (req: Request, res: Response) => {
  const { name, telephone, email, password } = req.body;
  // pass the username, email, and password to the validate function
  const isValid = validateUser({ telephone, email, password });

  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid username, email, and password",
      data: null,
    });
  }

  // pass the username, email, and password to the register service

  const data = await registerUser({ name, telephone, email, password });

  if (!data.success) {
    return res.status(400).json({
      success: false,
      message: data.data,
      data: null,
    });
  }

  // generate a token
  const token = generateToken(data.data);

  // send the token to the client
  return res.status(200).json({
    success: true,
    message: "User registered successfully, waiting for verification...",
    data: token,
  });
};
