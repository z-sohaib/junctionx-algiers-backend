import { Router } from "express";

import auth from "./auth.js";
import users from "./users.js";

const router = Router();

export default (): Router => {
  auth(router);
  users(router);

  return router;
};
