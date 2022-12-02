import express from "express";
import carroRouter from "./carroRouter.js";
import marcaRouter from "./marcaRouter.js";

const router = express.Router();
router.use(express.json(), carroRouter, marcaRouter);

const route = (app) => {
  app.use(router);
};

export default route;
