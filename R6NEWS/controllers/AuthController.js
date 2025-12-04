import UserModel from "../models/UserModel";

class AuthController {
  static async register({ nombre, correo, password }) {
    const errors = UserModel.validateRegister({ nombre, correo, password });
    if (Object.keys(errors).length > 0) {
      const err = new Error("Errores de validación");
      err.type = "validation";
      err.errors = errors;
      throw err;
    }

    const existing = await UserModel.findByEmail(correo);
    if (existing) {
      const err = new Error("Correo ya registrado");
      err.type = "validation";
      err.errors = { correo: "Este correo ya está registrado" };
      throw err;
    }

    const user = await UserModel.create({ nombre, correo, password });
    return user;
  }

  static async login({ correo, password }) {
    const errors = UserModel.validateLogin({ correo, password });
    if (Object.keys(errors).length > 0) {
      const err = new Error("Errores de validación");
      err.type = "validation";
      err.errors = errors;
      throw err;
    }

    const user = await UserModel.login({ correo, password });
    return user;
  }

  static async changePassword({ correo, actual, nueva }) {
    if (!nueva || nueva.length < 6) {
      const err = new Error("Nueva contraseña inválida");
      err.type = "validation";
      err.errors = { nueva: "Mínimo 6 caracteres" };
      throw err;
    }
    await UserModel.changePassword(correo, actual, nueva);
  }
}

export default AuthController;
