import * as SQLite from "expo-sqlite";

// Abre la base de datos en modo async
export const getDB = async () => {
  return await SQLite.openDatabaseAsync("R6NewsApp.db");
};

export const initDB = async () => {
  const db = await getDB();

  // 1. Crear tablas
  await db.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY NOT NULL,
      nombre TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS noticias (
      id INTEGER PRIMARY KEY NOT NULL,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      fecha TEXT NOT NULL,
      imagen TEXT,
      categoria TEXT
    );

    CREATE TABLE IF NOT EXISTS resultados (
      id INTEGER PRIMARY KEY NOT NULL,
      equipoA TEXT NOT NULL,
      equipoB TEXT NOT NULL,
      score TEXT NOT NULL,
      torneo TEXT NOT NULL,
      fecha TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS notificaciones (
      id INTEGER PRIMARY KEY NOT NULL,
      titulo TEXT NOT NULL,
      texto TEXT NOT NULL,
      fecha TEXT NOT NULL
    );
  `);

  // 2. Validar si noticias ya tienen datos
  const noticias = await db.getAllAsync("SELECT * FROM noticias LIMIT 1;");
  const resultados = await db.getAllAsync("SELECT * FROM resultados LIMIT 1;");

  // 3. Insertar datos iniciales si están vacías
  if (noticias.length === 0) {
    await db.execAsync(`
      INSERT INTO noticias (titulo, descripcion, fecha, imagen, categoria)
      VALUES
      ('Nuevo parche Y9S1', 'Cambios importantes en operadores y mapas.', '2025-02-01', 'https://i.imgur.com/abcd.jpg', 'actualización'),
      ('Road to SI', 'Regresa el torneo icónico con nuevos formatos.', '2025-02-05', 'https://i.imgur.com/efgh.jpg', 'evento');
    `);
  }

  if (resultados.length === 0) {
    await db.execAsync(`
      INSERT INTO resultados (equipoA, equipoB, score, torneo, fecha)
      VALUES
      ('G2', 'Liquid', '7-5', 'Six Invitational', '2025-01-10'),
      ('NAVI', 'FaZe', '8-6', 'Pro League', '2025-01-15');
    `);
  }

  console.log("✓ Tablas creadas y datos iniciales cargados");
};
