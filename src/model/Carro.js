import mongoose from "mongoose";

const carroSchema = new mongoose.Schema(
  {
    nome: { type: String, require: true },
    marca: { type: mongoose.Types.ObjectId, ref: "marcaCarro", require: true },
    ano: { type: Number, require: true },
    valor: { type: Number, require: true },
  },
  {
    versionKey: false,
  }
);

const Carro = mongoose.model("carros", carroSchema);

export default Carro;
