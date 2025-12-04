// controllers/ResultadosController.js
import ResultadoModel from "../models/ResultadoModel";

class ResultadosController {
  static async listarResultados() {
    const resultados = await ResultadoModel.getAll();
    return resultados.map((r) => ({
      ...r,
      ganador: ResultadoModel.getWinner(r),
    }));
  }
}

export default ResultadosController;
