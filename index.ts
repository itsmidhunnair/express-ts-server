// src/index.js
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h2>Express + TypeScript Server Running</h2>");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
