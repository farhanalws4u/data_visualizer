import mongoose from "mongoose";
import app from "./app.js";

import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db is connected...."))
  .catch((err) => console.log("error connecting to the database", err));

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`app is running on port ${port}`)
);

process.on("uncaughtException", (err) => {
  console.log("unhandled exception , shutting server down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection , shutting server down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
