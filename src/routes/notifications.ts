import { Router } from "express";

import {
  createAllHandler,
  createOneHandler,
} from "../controllers/notification.js";

export default (router: Router) => {
  router.post("/notifications/send", createOneHandler);
  router.post("/notifications/sendall", createAllHandler);
};
