import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";

config();

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to JunctionX Algiers REST API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
