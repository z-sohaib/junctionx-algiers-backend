import express from "express";

import {
  loginHandler,
  registerHandler,
  verifyHandler,
  googleLoginHandler
} from "../controllers/auth.js";

export default (router: express.Router) => {
  router.post("/auth/register", registerHandler);
  router.post("/auth/login", loginHandler);
  router.post("/auth/google", googleLoginHandler);
  router.put("/auth/verify", verifyHandler);
};
