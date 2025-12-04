// models/UserModel.js
import { UsersCRUD } from "../services/queries";

export default class UserModel {
  static validateRegister({ nombre, correo, password }) {
    const errors = {};

    if (!nombre || !nombre.trim()) {
      errors.nombre = "El nombre es obligatorio";
    }

    if (!correo || !correo.trim()) {
      errors.correo = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      errors.correo = "Ingresa un correo válido";
    }

    if (!password || !password.trim()) {
      errors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      errors.password = "La contraseña debe tener mínimo 6 caracteres";
    }

    return errors;
  }

  static validateLogin({ correo, password }) {
    const errors = {};

    if (!correo || !correo.trim()) {
      errors.correo = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      errors.correo = "Correo inválido";
    }

    if (!password || !password.trim()) {
      errors.password = "La contraseña es obligatoria";
    }

    return errors;
  }

  static async findByEmail(correo) {
    const users = await UsersCRUD.getAll();
    return users.find((u) => u.correo === correo) || null;
  }

  static async create({ nombre, correo, password }) {
    const username = correo.split("@")[0];
    return UsersCRUD.add({ nombre, correo, username, password });
  }

  static async changePassword(correo, actual, nueva) {
    const user = await this.findByEmail(correo);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (user.password !== actual) {
      throw new Error("La contraseña actual es incorrecta");
    }
    await UsersCRUD.update(user.id, { password: nueva });
    return true;
  }

  static async login({ correo, password }) {
    const user = await this.findByEmail(correo);
    if (!user || user.password !== password) {
      throw new Error("Correo o contraseña incorrectos");
    }
    return user;
  }
}
