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
    created_datatime TEXT NOT NULL,
    updated_datatime TEXT NOT NULL,
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
        '["https://ru.wikipedia.org/wiki/%D0%AD%D1%82%D0%B8%D0%BB%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BB"]',
        1,
        '0',
        '0',
        1
    ),

(
    'Дофамин',
    '[]',
    '2-(3,4-дигидроксифенил)-этиламин',
    'C8H11NO2',
    153.1784,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "128"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Слабо токсичен, ирритант"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Серотонин',
    '["5-гидрокситриптамин"]',
    '3-(2-аминоэтил)-1H-индол-5-ол',
    'C10H12N2O',
    176.2151,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "167.5"},
            {"name": "Температура кипения", "value": "416"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Чрезвычайно токсичен для человека"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Адреналин',
    '[]',
    '(R)-4-[1-гидрокси-2-(метиламино)этил]-бензен-1,2-диол',
    'C9H13NO3',
    183.204,
    '{
        "physical": [
            {"name": "Агрегатное состояние", "value": "Твердое кристаллическое"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Опасен при инъекциях"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Мелатонин',
    '[]',
    'N-[2-(5-метокси-1H-индол-3-ил)этил] этанамид',
    'C13H16N2O2',
    232.278,
    '{
        "physical": [
            {"name": "Агрегатное состояние", "value": "Твердое кристаллическое"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Опасен для животных"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Этанол',
    '["Этиловый спирт"]',
    'Этанол, этилгидрат, метилкарбинол',
    'C2H6O',
    46.069,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "-114.3"},
            {"name": "Температура кипения", "value": "78.39"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Малотоксичен"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Кофеин',
    '[]',
    '1,3,7-триметил-1H-пурин-2,6(3H,7H)-дион',
    'C8H10N4O2',
    194.19,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "234"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Органические растворители"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Высокая"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Кортизол',
    '[]',
    '4-прегнен-11β,17α,21-триол-3,20-дион',
    'C21H30O5',
    362.460,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "214"}
        ],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Глюкоза',
    '[]',
    '(2R,3S,4R,5R)-2,3,4,5,6-пентагидроксигексаналь (D-глюкоза)',
    'C6H12O6',
    180.16,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "146"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Таурин',
    '[]',
    '2-аминоэтансульфоновая кислота',
    'C2H7NO3S',
    125.14,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "305"}
        ],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Ацетон',
    '["Диметилкетон"]',
    'Пропан-2-он',
    'C3H6O',
    58.08,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "-95"},
            {"name": "Температура кипения", "value": "56.1"}
        ],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Флавон',
    '[]',
    'Флавон',
    'C15H10O2',
    222.2,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "100"}
        ],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Глутатион',
    '[]',
    '2-амино-5-{[2-[(карбоксиметил)амино]-1-(меркаптометил)-2-оксоэтил]амино}-5-оксопентаноевая кислота',
    'C10H17N3O6S',
    307.32,
    '{
        "physical": [],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Хинин',
    '[]',
    'Хинин',
    'C20H24N2O2',
    324.417,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "177"}
        ],
        "chemical": [],
        "safety": [],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Глифосат',
    '[]',
    'N-(фосфонометил)-глицин',
    'C3H8NO5P',
    169.07,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "184.5"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Токсичность", "value": "Малотоксичен"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Этиленгликоль',
    '[]',
    'этандиол-1,2',
    'C2H4(OH)2',
    62.068,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "-12.9"},
            {"name": "Температура кипения", "value": "197.3"}
        ],
        "chemical": [],
        "safety": [
            {"name": "Токсичность", "value": "Общетоксическое действие"}
        ],
        "classification": []
    }',
    '',
    '[]',
    1,
    '0',
    '0',
    1
),
(
    'Нитроглицерин',
    '[]',
    '1,2,3-тринитроксипропан',
    'C3H5N3O9',
    227.0865,
    '{
        "physical": [
            {"name": "Температура плавления", "value": "13"},
            {"name": "Температура кипения", "value": "160"}
        ],
        "chemical": [
            {"name": "Растворимость", "value": "Вода"}
        ],
        "safety": [
            {"name": "Опасность", "value": "Взрывоопасен, высокотоксичен"}
        ],
        "classification": []
    }',
    '',
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
        created_datatime,
        updated_datatime
    )
VALUES (
        'Иванов Иван Иванович',
        'exaple@email.com',
        -- password: '123'
        'b4c5f1fb13f144b35abcfa675bdabd55059600fe2da66c90716d03df072f22735429acf8dd5ef0e85715b66001f9fda0f32bf9e16c4a26f8065405f53e8d3682',
        '1742342042.2594588',
        '1742342042.2594588'
    )