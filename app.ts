import express, { Application, NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import ConnectDB from "./src/config/db.js";
import router from "./src/routes/index.js";
import { generateCode } from "./src/utils/math.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

config();

const app: Application = express();

app.use(
  morgan("combined", {
    stream: fs.createWriteStream(path.join(__dirname, "logger/access.log"), {
      flags: "a",
    }),
  })
);

app.use("/", router());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to JunctionX Algiers REST API ");
});

ConnectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
