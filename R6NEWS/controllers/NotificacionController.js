// controllers/NotificacionesController.js
import NotificacionModel from "../models/NotificacionModel";

class NotificacionesController {
  static async listarNotificaciones() {
    return NotificacionModel.getAll();
  }
}

export default NotificacionesController;
