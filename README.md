# 9 Класс. Проект. "Очередной сайт с базой данных..."

_Сайт с базой данных_

- **Серверная часть:** _Python;_ Библиотеки: _Flask, sqlite_

- **Визуальная часть:** _HTML, CSS, JS;_ Библиотеки: _JQuery | Ajax_

- **СУБД:** _SQLite3_

## Для разработчиков:
### БД:
_**ТАБЛИЦА users:**_
- **id** - INT
- **name** - TEXT
- **email** - TEXT
- **password** - CHAR[128]
- **online_datetime** - TEXT
- **created_datetime** - TEXT
- **updated_datetime** - TEXT
- **rights** - INT

_**ТАБЛИЦА substances:**_
...

_**ТАБЛИЦА syntheses:**_
- **id** - INT
- **title** - TEXT
- **reagents** - JSON
- **products** - JSON
- **description** - TEXT
- **author** - INT user id
- **created_datetime** - TEXT
- **updated_datetime** - TEXT
- **admin_confirmed** - BOOL

_**ТАБЛИЦА likes:**_
- **id** - INT
- **user_id** - INT
- **resource_type** - INT
- **resource_id** - INT
- **created_datetime** - TEXT
