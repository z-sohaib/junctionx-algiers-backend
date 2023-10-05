import express from "express";

import { loginHandler, registerHandler } from "../controllers/auth";

export default (router: express.Router) => {
  router.post("/auth/register", registerHandler);
  router.post("/auth/login", loginHandler);
};
