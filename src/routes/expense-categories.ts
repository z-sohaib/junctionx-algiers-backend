import { Router } from "express";

import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../controllers/expense-category.js";

export default (router: Router) => {
  router.get("/expense-categories", getAllHandler);
  router.get("/expense-categories/:id", getOneHandler);
  router.post("/expense-categories/", createOneHandler);
  router.put("/expense-categories/:id", updateOneHandler);
  router.delete("/expense-categories/:id", deleteOneHandler);
};
