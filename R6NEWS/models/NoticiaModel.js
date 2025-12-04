// models/NoticiaModel.js
import { NoticiasCRUD } from "../services/queries";

export default class NoticiaModel {
  static validate(data) {
    const errors = {};
    if (!data.titulo || !data.titulo.trim()) {
      errors.titulo = "El título es obligatorio";
    }
    if (!data.descripcion || !data.descripcion.trim()) {
      errors.descripcion = "La descripción es obligatoria";
    }
    if (!data.fecha || !data.fecha.trim()) {
      errors.fecha = "La fecha es obligatoria";
    }
    // imagen opcional
    return errors;
  }

  static async getAll() {
    return NoticiasCRUD.getAll();
  }

  static async create(data) {
    const errors = this.validate(data);
    if (Object.keys(errors).length > 0) {
      const err = new Error("Errores de validación");
      err.type = "validation";
      err.errors = errors;
      throw err;
    }
    return NoticiasCRUD.add(data);
  }

  static async update(id, data) {
    const errors = this.validate(data);
    if (Object.keys(errors).length > 0) {
      const err = new Error("Errores de validación");
      err.type = "validation";
      err.errors = errors;
      throw err;
    }
    await NoticiasCRUD.update(id, data);
  }

  static async delete(id) {
    await NoticiasCRUD.dlt(id);
  }
}
