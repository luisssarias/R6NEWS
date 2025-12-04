// models/ResultadoModel.js
import { ResultadosCRUD } from "../services/queries";

export default class ResultadoModel {
  static async getAll() {
    return ResultadosCRUD.getAll();
  }

  static getWinner(resultado) {
    if (!resultado.score) return "En curso";
    const [izq, der] = resultado.score
      .split("-")
      .map((x) => parseInt(x.trim(), 10));
    if (izq === der) return "En curso";
    return izq > der ? resultado.equipoA : resultado.equipoB;
  }
}
