import { listaCarros } from "../mock/carros.js";
import Carro from "../model/Carro.js";

class CarroController {
  static findIndexCarro = (req, res) => {
    return listaCarros.findIndex((carro) => carro.id == req.params.id);
  };

  static buscarTodos = (req, res) => {
    Carro.find()
      .populate("marca")
      .exec((err, carros) => {
        res.status(200).json(carros);
      });
  };

  static buscar = (req, res) => {
    Carro.findById(req.params.id, (err, carro) => {
      res.status(200).json(carro);
    });
  };

  static deletar = (req, res) => {
    Carro.findByIdAndDelete(req.params.id, (err, livro) => {
      if (!err) {
        res.status(200).json({ message: "deletado com sucesso" });
      }
    });
  };

  static cadastrarCarro = (req, res) => {
    Carro.create(req.body, (err, livro) => {
      res.status(200).json(livro);
    });
  };

  static atualizar = (req, res) => {
    Carro.findByIdAndUpdate(req.params.id, req.body, {}, (err, resp) => {
      if (!err) {
        res.status(200).json({ message: "carro atualizado com sucesso" });
      }
    });
  };

  static buscarPorMarca = (req, res) => {
    const nome = req.query.marca;

    Carro.find({ nome }, {}, (err, resp) => {
      if (err) {
        res.status(500).json({ message: "Ocorreu um erro" });
      }

      res.status(200).json(resp);
    });
  };
}

export default CarroController;
