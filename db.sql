DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "syntheses";
DROP TABLE IF EXISTS "likes";
DROP TABLE IF EXISTS "substances";

-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- *
-- *                 TABLES
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password CHAR[128] NOT NULL,
    created_datatime TEXT NOT NULL,
    updated_datatime TEXT NOT NULL,
    rights INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS substances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_iupac TEXT NOT NULL,
    bruto_formula TEXT NOT NULL,
    mass FLOAT NOT NULL,
    characteristics JSON,
    sources JSON,
    author_id INTEGER,
    created_datatime TEXT,
    updated_datatime TEXT,
    admin_confirmed BOOLEAN
);

CREATE TABLE IF NOT EXISTS syntheses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    reagents JSON,
    products JSON,
    description TEXT,
    sources JSON,
    author INTEGER,
    created_datatime TEXT,
    updated_datatime TEXT,
    admin_confirmed BOOLEAN
);

CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INT,
    resource_type INT,
    recource_id INT,
    created_datatime TEXT
);

-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- *
-- *                 VALUES
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________
-- * _____________________________________________

INSERT INTO substances (name, name_iupac, bruto_formula, mass, characteristics, sources, author_id, created_datatime, updated_datatime, admin_confirmed) VALUES (
    'Этилбензол',
    'Этилбензол',
    'C8H10',
    106.165,
    '{
        "id": "1",
        "name": "Этилбензол",
        "name_iupac": "Этилбензол",
        "formula": "C8H10",
        "mass": "106.165",
        "type": "substance",
        "liked": "true"
    }',
    '[]',
    1,
    '0',
    '0',
    1
);