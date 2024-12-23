CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              password CHAR[128] NOT NULL,
              created_datetime TEXT NOT NULL,
              updated_datatime TEXT NOT NULL,
              rights INTEGER NOT NULL DEFAULT 1)

