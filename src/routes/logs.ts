import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../controllers/log.js";
import { protect } from "../middlewares/auth.js";

export default (router: Router) => {
  router.get("/logs", getAllHandler);
  router.get("/logs/:id", getOneHandler);
  router.post("/logs/", protect, createOneHandler);
  router.put("/logs/:id", updateOneHandler);
  router.delete("/logs/:id", deleteOneHandler);
};
