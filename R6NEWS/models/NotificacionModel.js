// models/NotificacionModel.js
import { NotificacionesCRUD } from "../services/queries";

export default class NotificacionModel {
  static async getAll() {
    return NotificacionesCRUD.getAll();
  }

  static async create(data) {
    // si quisieras CRUD completo
    return NotificacionesCRUD.add(data);
  }
}
