import { Router } from "express";

import auth from "./auth";
import users from "./users";

const router = Router();

export default (): Router => {
  auth(router);
  users(router);

  return router;
};
