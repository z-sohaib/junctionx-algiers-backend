import { Router } from "express";

import {
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../controllers/user.js";

export default (router: Router) => {
  router.get("/users", getAllHandler);
  router.get("/users/:id", getOneHandler);
  router.put("/users/:id", updateOneHandler);
  router.delete("/users/:id", deleteOneHandler);
};
