import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  getSpecificUserHandler,
  updateOneHandler,
} from "../controllers/fin-account.js";
import { protect } from "../middlewares/auth.js";

export default (router: Router) => {
  router.get("/fin-accounts", getAllHandler);
  router.get("/fin-accounts/user/:id", getSpecificUserHandler);
  router.get("/fin-accounts/:id", getOneHandler);
  router.post("/fin-accounts/", protect, createOneHandler);
  router.put("/fin-accounts/:id", updateOneHandler);
  router.delete("/fin-accounts/:id", deleteOneHandler);
};
