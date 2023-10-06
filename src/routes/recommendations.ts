import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../controllers/recommendation.js";
import { protect } from "../middlewares/auth.js";

export default (router: Router) => {
  router.get("/recommendations", getAllHandler);
  router.get("/recommendations/:id", getOneHandler);
  router.post("/recommendations/", protect, createOneHandler);
  router.put("/recommendations/:id", updateOneHandler);
  router.delete("/recommendations/:id", deleteOneHandler);
};
