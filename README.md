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

- **id** - INT
- **name** - TEXT
- **name_iupac** - TEXT
- **bruto_formula** - TEXT
- **characteristics** - JSON (obj)
- **sources** - JSON (list)
- **author** - INT user id
- **created_datetime** - TEXT
- **updated_datetime** - TEXT
- **admin_confirmed** - BOOL

_**ТАБЛИЦА syntheses:**_

- **id** - INT
- **title** - TEXT
- **reagents** - JSON (list)
- **products** - JSON (list)
- **description** - TEXT
- **sources** - JSON (list)
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

## РОУТЫ

_**GET:**_

- **/**
  - ?p=int (по умолчанию - 1) - страница <br>
  <p>
  На странице показываются карточки с веществами. 2 категории: последние просмотренные, новые добавленные (в бд). Недавно просмотренные: последние 6; Новые: последние 20 из БД с отступом в 20*(page-1) строк <br>
  Шаблон: index.html <br>
  Параметры шаблона: recent_cards(list), view_cards(list), view_cards_pages_count(int)
  </p>
- **/substance/.id./**
  <p>
  Страница в-ва. Его характеристики, синтезы, в которых он участвует. Синтезы в следующем порядке: сначала синтез его, затем в которых участвует <br>
  Шаблон: substance.html <br>
  Параметры шаблона: substance(obj)
  </p>
- **/synthesis/.id./**
  <p>
  Страница синтеза <br>
  Шаблон: synthesis.html <br>
  Параметры шаблона: synthesis(obj)
  </p>
- **/search/**
  - ?q=text - запрос
  - ?type=1|2 - вещество|синтез
  - ?p=int (по умолчанию - 1) - страница <br>
  <p>
  На странице показываются карточки с веществами, найденные по запросу из бд с отступом в 20*(page-1) строк <br>
  Шаблон: search.html <br>
  Параметры шаблона: search_cards(list), search_cards_pages_count(int)
  </p>
- **/login/** <br>
  <p>
  Страница входа в аккаунт
  Шаблон: login.html
  </p>
- **/register/** <br>
  <p>
  Страница регистрации аккаунта
  Шаблон: register.html
  </p>

_**POST:**_

- **/login/**
  - email - почта
  - password - пароль
  <p>
  Шаблон: login.html <br>
  Параметры шаблона: login_error(int 0-3) <br>
  Ошибки: <br>
  0 - "Ошибка сервера!"<br>
  1 - "Неправильно указана почта! Формат: example@email.com" <br>
  2 - "Неправильные данные для входа!"<br>
  3 - "Должны быть заполнены все поля!"
  </p>
- **/register/**
  - name - им пользователя
  - email - почта
  - password - пароль
  - password_confirm - пароль еще раз <br>
  <p>
  Шаблон: register.html <br>
  Параметры шаблона: register_error(int 0-4) <br>
  Ошибки: <br>
  0 - "Ошибка сервера!" <br>
  1 - "Неправильно указана почта! Формат: example@email.com" <br>
  2 - "Пароли не совпадают!" <br>
  3 - "Должны быть заполнены все поля!" <br>
  4 - "Указанная почта уже используется!"
  </p>
- **/substance/.id./like**
  - state=true|false <br>
  <p>
  Запрос, отвечающий за добавление в-ва .id. в таблицу лайков БД и/или массив лайков сессии<br>
  Без шаблона
  </p>

## ШАБЛОНЫ

! Во все шаблоны передается параметр APP_NAME ! <br>
! Во все шаблоны передается параметр THEME из сессии (без передачи параметра по умолчанию 'default') ! <br>
! Во все шаблоны передается параметр THEME_TYPE=dark|light из сессии (без передачи параметра по умолчанию 'dark') ! <br>

OPT - опционально (про параметр)

```
├── login_register.html
│   ├── login.html (OPT login_error)
│   └── register.html (OPT register_error)
│
└── main.html (OPT user)
    ├── index.html (OPT recent_cards: list, view_cards, view_cards_pages_count)
    ├── search.html (search_cards, search_cards_pages_count)
    ├── substance.html (substance)
    └── account.html
```

JSON шаблон объекта user:

```json
{
  ""
}
```

**recent_cards** - список 6 последних просмотренных в-в из сессии <br>
**view_cards** - список 20 в-в <br>
JSON шаблон элементов списков (пример):

```json
{
  "id": 1, // из БД
  "name": "Этилбензол", // из БД
  "name_iupac": "Этилбензол", // из БД
  "formula": "C8H10", // из БД
  "mass": 106.165, // из БД
  "liked": "true" // из сессии или аккаунта
}
```
