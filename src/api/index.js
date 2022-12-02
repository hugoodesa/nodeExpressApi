import express from "express";
import db from "../connection/index.js";
import route from "../routes/index.js";

const app = express();

db.on("open", () => {
  console.log("connected sucefully");
});

route(app);

export default app;
