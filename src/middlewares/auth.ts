import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { merge, get } from "lodash";

import { getUserByEmail } from "../services/UserService";
import User, { UserInterface } from "../models/User";
import { verifyToken } from "../utils/jwt";

interface AuthRequest extends Request {
  user: UserInterface;
}

interface JwtPayload {
  id: string;
  name: string;
  email: string;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = verifyToken(token) as JwtPayload;
        req.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

export const admin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
