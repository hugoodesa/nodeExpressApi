import express from "express";
import CarroController from "../controller/CarroController.js";

const carroRouter = express.Router();

carroRouter
  .get("/carros", CarroController.buscarTodos)
  .get("/carros/buscarCarroPeloNomeDaMarca", CarroController.buscarPorMarca)
  .get("/carros/:id", CarroController.buscar)
  .get("/carros/buscarPorMarca")
  .post("/carros", CarroController.cadastrarCarro)
  .put("/carros/:id", CarroController.atualizar)
  .delete("/carros/:id", CarroController.deletar);

export default carroRouter;
