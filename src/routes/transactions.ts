import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  getTodayHandler,
  updateOneHandler,
} from "../controllers/transaction.js";
import { protect } from "../middlewares/auth.js";

export default (router: Router) => {
  router.get("/transactions", getAllHandler);
  router.get("/transactions/today", getTodayHandler);
  router.get("/transactions/:id", getOneHandler);
  router.post("/transactions/", protect, createOneHandler);
  router.put("/transactions/:id", updateOneHandler);
  router.delete("/transactions/:id", deleteOneHandler);
};
