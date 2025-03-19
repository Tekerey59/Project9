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
    password CHAR [128] NOT NULL,
    created_datetime TEXT NOT NULL,
    updated_datetime TEXT NOT NULL,
    rights INTEGER NOT NULL DEFAULT 1,
    likes TEXT NOT NULL DEFAULT '[]'
);
CREATE TABLE IF NOT EXISTS substances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    other_names JSON,
    name_iupac TEXT NOT NULL,
    bruto_formula TEXT NOT NULL,
    mass FLOAT NOT NULL,
    characteristics JSON,
    description TEXT,
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
-- ! NEW ! --
INSERT INTO substances (
        name,
        other_names,
        name_iupac,
        bruto_formula,
        mass,
        characteristics,
        description,
        sources,
        author_id,
        created_datatime,
        updated_datatime,
        admin_confirmed
    )
VALUES (
        'Этилбензол',
        '[]',
        'Этилбензол',
        'C8H10',
        106.165,
        '{
  "physical": [],
  "chemical": [],
  "safety": [],
  "сlassification": []
}',
        "Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. С другой стороны реализация намеченных плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного развития. Равным образом новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Равным образом рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. ",
        '[]',
        1,
        '0',
        '0',
        1
    );
INSERT INTO users (
        name,
        email,
        password,
        created_datetime,
        updated_datetime
    )
VALUES (
        'Иванов Иван Иванович',
        'exaple@email.com',
        -- password: '123'
        'b4c5f1fb13f144b35abcfa675bdabd55059600fe2da66c90716d03df072f22735429acf8dd5ef0e85715b66001f9fda0f32bf9e16c4a26f8065405f53e8d3682',
        '1742342042.2594588',
        '1742342042.2594588'
    )