import express from "express";
import MarcaController from "../controller/MarcaController.js";

const marcaRouter = express.Router();

marcaRouter
  .get("/marcaCarro", MarcaController.buscarTodos)
  .get("/marcaCarro/:id", MarcaController.buscarPorId)
  .post("/marcaCarro", MarcaController.cadastrar);

export default marcaRouter;
