import { getDB } from "./database";
import { Platform } from "react-native";

export function createCRUD(tableName, localKey) {
  return {
    async getAll() {
      if (Platform.OS === "web") {
        const data = localStorage.getItem(localKey);
        return data ? JSON.parse(data) : [];
      }

      const db = await getDB();
      const result = await db.getAllAsync(
        `SELECT * FROM ${tableName} ORDER BY id DESC;`
      );
      return result;
    },

    async add(dataObject) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const newItem = { id: Date.now(), ...dataObject };
        items.unshift(newItem);
        localStorage.setItem(localKey, JSON.stringify(items));
        return newItem;
      }

      const db = await getDB();
      const columns = Object.keys(dataObject).join(", ");
      const placeholders = Object.keys(dataObject)
        .map(() => "?")
        .join(", ");
      const values = Object.values(dataObject);

      const result = await db.runAsync(
        `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders});`,
        values
      );

      return { id: result.lastInsertRowId, ...dataObject };
    },

    async update(id, dataObject) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const updated = items.map((i) =>
          i.id === id ? { ...i, ...dataObject } : i
        );
        localStorage.setItem(localKey, JSON.stringify(updated));
        return { rowsAffected: 1 };
      }

      const db = await getDB();
      const fields = Object.keys(dataObject)
        .map((k) => `${k} = ?`)
        .join(", ");
      const values = [...Object.values(dataObject), id];

      const result = await db.runAsync(
        `UPDATE ${tableName} SET ${fields} WHERE id = ?;`,
        values
      );

      return { rowsAffected: result.changes };
    },

    async dlt(id) {
      if (Platform.OS === "web") {
        const items = await this.getAll();
        const filtered = items.filter((i) => i.id !== id);
        localStorage.setItem(localKey, JSON.stringify(filtered));
        return { rowsAffected: 1 };
      }

      const db = await getDB();
      const result = await db.runAsync(
        `DELETE FROM ${tableName} WHERE id = ?;`,
        [id]
      );

      return { rowsAffected: result.changes };
    },
  };
}

export const UsersCRUD = createCRUD("users", "users_local");
export const NoticiasCRUD = createCRUD("noticias", "noticias_local");
export const ResultadosCRUD = createCRUD("resultados", "resultados_local");
export const NotificacionesCRUD = createCRUD("notificaciones", "notif_local");
