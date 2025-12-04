import * as SQLite from "expo-sqlite";

// 1. Abrir la base de datos
export const getDB = async () => {
  return await SQLite.openDatabaseAsync("R6NewsApp.db");
};

// 2. Inicializar DB + crear tablas + seed
export const initDB = async () => {
  const db = await getDB();

  // Crear tablas
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

  // Verificar datos existentes
  const noticias = await db.getAllAsync("SELECT id FROM noticias LIMIT 1;");
  const resultados = await db.getAllAsync("SELECT id FROM resultados LIMIT 1;");

  // SEED: NOTICIAS
  if (noticias.length === 0) {
    await db.runAsync(
      "INSERT INTO noticias (titulo, descripcion, fecha, imagen, categoria) VALUES (?, ?, ?, ?, ?)",
      [
        "Nuevo parche Y9S1",
        "Cambios en operadores y mapas.",
        "2025-02-01",
        "https://i.imgur.com/abcd.jpg",
        "actualizacion",
      ]
    );

    await db.runAsync(
      "INSERT INTO noticias (titulo, descripcion, fecha, imagen, categoria) VALUES (?, ?, ?, ?, ?)",
      [
        "Road to SI",
        "Regresa el torneo anual con nuevo formato.",
        "2025-02-05",
        "https://i.imgur.com/efgh.jpg",
        "evento",
      ]
    );
  }

  // SEED: RESULTADOS
  if (resultados.length === 0) {
    await db.runAsync(
      "INSERT INTO resultados (equipoA, equipoB, score, torneo, fecha) VALUES (?, ?, ?, ?, ?)",
      ["G2", "Liquid", "7-5", "Six Invitational", "2025-01-10"]
    );

    await db.runAsync(
      "INSERT INTO resultados (equipoA, equipoB, score, torneo, fecha) VALUES (?, ?, ?, ?, ?)",
      ["NAVI", "FaZe", "8-6", "Pro League", "2025-01-15"]
    );
  }

  console.log("✓ Tablas creadas y seed cargado.");
};
