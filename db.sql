CREATE TABLE users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT,
              password TEXT NOT NULL,
              created_datetime TEXT NOT NULL,
              upgrated_datatime TEXT NOT NULL,
              rights INTEGER NOT NULL DEFAULT 1)