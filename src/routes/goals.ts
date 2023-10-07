import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../controllers/goal.js";
import { protect } from "../middlewares/auth.js";

export default (router: Router) => {
  router.get("/goals", getAllHandler);
  router.get("/goals/:id", getOneHandler);
  router.post("/goals/", protect, createOneHandler);
  router.put("/goals/:id", updateOneHandler);
  router.delete("/goals/:id", deleteOneHandler);
};
