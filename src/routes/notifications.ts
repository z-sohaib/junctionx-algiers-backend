import { Router } from "express";

import {
  createAllHandler,
  createOneHandler,
} from "../controllers/notification";

export default (router: Router) => {
  router.post("/notifications/send", createOneHandler);
  router.post("/notifications/sendall", createAllHandler);
};
