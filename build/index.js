// src/index.js
import express from "express";
const app = express();
const port = 4000;
app.get("/", (req, res) => {
    res.send("<h2>Express + TypeScript Server Running</h2>");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
