import { Router } from "express";

import { createOneHandler } from "../controllers/notification";

export default (router: Router) => {
  router.post("/notifications/send", createOneHandler);
};
