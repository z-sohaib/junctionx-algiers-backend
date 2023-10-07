import { Router } from "express";

import auth from "./auth.js";
import users from "./users.js";
import expenseCategories from "./expense-categories.js";
import recommendations from "./recommendations.js";
import logs from "./logs.js";
import financialAccounts from "./fin-accounts.js";
import transactions from "./transactions.js";
import goals from "./goals.js";
import notifications from "./notifications.js";

const router = Router();

export default (): Router => {
  auth(router);
  users(router);
  expenseCategories(router);
  recommendations(router);
  logs(router);
  financialAccounts(router);
  transactions(router);
  goals(router);
  notifications(router);

  return router;
};
