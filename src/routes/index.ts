import { Router } from "express";

import auth from "./auth.js";
import users from "./users.js";
import expenseCategories from "./expense-categories.js";
import recommendations from "./recommendations.js";

const router = Router();

export default (): Router => {
  auth(router);
  users(router);
  expenseCategories(router);
  recommendations(router);

  return router;
};
