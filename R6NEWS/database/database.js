  import * as SQLite from 'expo-sqlite';

  // Abrir la base de datos (async)
  export const getDB = async () => {
    const db = await SQLite.openDatabaseAsync('R6NewsApp.db');
    return db;
  };

  // Inicializar tablas
  export const initDB = async () => {
    const db = await getDB();
    await db.execAsync(`
      PRAGMA foreign_keys = ON;

      -- Usuarios
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY NOT NULL,
        nombre TEXT NOT NULL,
        correo TEXT NOT NULL UNIQUE,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );

      -- Noticias
      CREATE TABLE IF NOT EXISTS noticias (
        id INTEGER PRIMARY KEY NOT NULL,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        fecha TEXT NOT NULL,
        imagen TEXT,
        categoria TEXT
      );

      -- Resultados
      CREATE TABLE IF NOT EXISTS resultados (
        id INTEGER PRIMARY KEY NOT NULL,
        equipoA TEXT NOT NULL,
        equipoB TEXT NOT NULL,
        score TEXT NOT NULL,
        torneo TEXT NOT NULL,
        fecha TEXT NOT NULL
      );

      -- Notificaciones
      CREATE TABLE IF NOT EXISTS notificaciones (
        id INTEGER PRIMARY KEY NOT NULL,
        titulo TEXT NOT NULL,
        texto TEXT NOT NULL,
        fecha TEXT NOT NULL
      );
    `);
  };
