import { Router } from "express";

import { getAllHandler, getOneHandler } from "../controllers/user";

export default (router: Router) => {
  router.get("/users", getAllHandler);
  router.get("/users/:id", getOneHandler);
};
