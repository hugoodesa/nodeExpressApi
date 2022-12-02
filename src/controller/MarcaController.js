import Marca from "../model/Marca.js";

class MarcaController {
  static buscarPorId = (req, res) => {
    Marca.findById(req.params.id, (err, marca) => {
      res.status(200).json(marca);
    });
  };

  static buscarTodos = (req, res) => {
    Marca.find((err, marcas) => {
      res.status(200).json(marcas);
    });
  };

  static cadastrar = (req, res) => {
    Marca.create(req.body, (err, marca) => {
      res.status(200).json(marca);
    });
  };
}

export default MarcaController;
