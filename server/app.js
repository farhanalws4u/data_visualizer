import express from "express";
import bodyParser from "body-parser";
import dataRoute from "./routes/dataRoute.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/api/v1/data", dataRoute);

// handling unhandled routes
app.all("*", (req, res, next) => {
  next(new Error(`cant find ${req.originalUrl} on this server`));
});

export default app;
