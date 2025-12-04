import { getDB } from "./database";
import { Platform } from "react-native";

export function createCRUD(tableName, localKey) {
  return {
    // Obtener todo
    async getAll() {
      if (Platform.OS === "web") {
        const data = localStorage.getItem(localKey);
        return data ? JSON.parse(data) : [];
      } else {
        const db = await getDB();
        return new Promise((resolve, reject) => {
          db.transaction((tx) => {
            tx.executeSql(
              `SELECT * FROM ${tableName} ORDER BY id DESC;`,
              [],
              (_, result) => resolve(result.rows._array),
              (_, error) => reject(error)
            );
          });
        });
      }
    },

    // Agregar (dinámico)
    async add(dataObject) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const newItem = { id: Date.now(), ...dataObject };
        items.unshift(newItem);
        localStorage.setItem(localKey, JSON.stringify(items));
        return newItem;
      } else {
        const db = await getDB();
        const columns = Object.keys(dataObject).join(", ");
        const values = Object.values(dataObject);
        const placeholders = values.map(() => "?").join(", ");

        return new Promise((resolve, reject) => {
          db.transaction((tx) => {
            tx.executeSql(
              `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders});`,
              values,
              (_, result) => resolve({ id: result.insertId, ...dataObject }),
              (_, error) => reject(error)
            );
          });
        });
      }
    },

    // Actualizar
    async update(id, dataObject) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const updated = items.map((item) =>
          item.id === id ? { ...item, ...dataObject } : item
        );
        localStorage.setItem(localKey, JSON.stringify(updated));
        return { rowsAffected: 1 };
      } else {
        const db = await getDB();
        const columns = Object.keys(dataObject)
          .map((key) => `${key} = ?`)
          .join(", ");
        const values = [...Object.values(dataObject), id];

        return new Promise((resolve, reject) => {
          db.transaction((tx) => {
            tx.executeSql(
              `UPDATE ${tableName} SET ${columns} WHERE id = ?;`,
              values,
              (_, result) => resolve({ rowsAffected: result.rowsAffected }),
              (_, error) => reject(error)
            );
          });
        });
      }
    },

    // Eliminar
    async dlt(id) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const filtered = items.filter((item) => item.id !== id);
        localStorage.setItem(localKey, JSON.stringify(filtered));
        return { rowsAffected: 1 };
      } else {
        const db = await getDB();
        return new Promise((resolve, reject) => {
          db.transaction((tx) => {
            tx.executeSql(
              `DELETE FROM ${tableName} WHERE id = ?;`,
              [id],
              (_, result) => resolve({ rowsAffected: result.rowsAffected }),
              (_, error) => reject(error)
            );
          });
        });
      }
    },
  };
}

export const UsersCRUD = createCRUD("users", "users_local");
export const NoticiasCRUD = createCRUD("noticias", "noticias_local");
export const ResultadosCRUD = createCRUD("resultados", "resultados_local");
export const NotificacionesCRUD = createCRUD("notificaciones", "notif_local");
