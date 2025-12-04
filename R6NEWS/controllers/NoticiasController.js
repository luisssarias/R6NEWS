// controllers/NoticiasController.js
import NoticiaModel from "../models/NoticiaModel";

class NoticiasController {
  static async listarNoticias() {
    return NoticiaModel.getAll();
  }

  static async crearNoticia(data) {
    return NoticiaModel.create(data);
  }

  static async actualizarNoticia(id, data) {
    return NoticiaModel.update(id, data);
  }

  static async eliminarNoticia(id) {
    return NoticiaModel.delete(id);
  }
}

export default NoticiasController;
