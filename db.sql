DROP TABLE IF EXISTS substances;
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
    characteristics NVARCHAR(1024),
    sources JSON,
    author INTEGER,
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

INSERT INTO substances (name, name_iupac, bruto_formula, characteristics, sources, author, created_datatime, updated_datatime, admin_confirmed) VALUES (
    'Этилбензол',
    'Этилбензол',
    'C8H10',
    '{
        "id": "1",
        "name": "Этилбензол",
        "name_iupac": "Этилбензол",
        "formula": "C8H10",
        "mass": "106.165",
        "liked": "true"
    }',
    '{}',
    0,
    '0',
    '0',
    True
)