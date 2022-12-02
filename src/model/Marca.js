import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema(
  {
    nome: { type: String, require: true },
    paisOrigem: { type: String, require: false },
  },
  {
    versionKey: false,
  }
);

const Marca = mongoose.model("marcaCarro", marcaSchema);

export default Marca;
