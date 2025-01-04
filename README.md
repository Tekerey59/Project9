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
  - ?page=int (по умолчанию - 1) <br>
  <p>
  На странице показываются карточки с веществами. 2 категории: последние просмотренные, новые добавленные (в бд).
  Недавно просмотренные: последние 6
  Новые: последние 20 из БД с отступом в 20*(page-1) строк<br>
  Шаблон: index.html<br>
  Параметры шаблона: recent_cards: list, view_cards: list, view_cards_pages_count: int, view_cards_current_page: **page**
  </p>
- **/search/**
  - ?q=text - запрос
  - ?type=1|2 - вещество|синтез
  - ?page=int (по умолчанию - 1) <br>
  <p>
  На странице показываются карточки с веществами, найденные по запросу из бд с отступом в 20*(page-1) строк<br>
  Шаблон: search.html<br>
  Параметры шаблона: view_cards(list), view_cards_pages_count(int), view_cards_current_page(**page**)
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
- **/login/** <br>
  <p>
  Шаблон: login.html<br>
  Параметры шаблона: login_error(int 0-3)<br>
  Ошибки: <br>
  0 - "Ошибка сервера!"<br>
  1 - "Неправильно указана почта! Формат: example@email.com"<br>
  2 - "Неправильные данные для входа!"<br>
  3 - "Должны быть заполнены все поля!"
  </p>
- **/register/** <br>
  <p>
  Шаблон: register.html<br>
  Параметры шаблона: register_error(int 0-4) <br>
  Ошибки: <br>
  0 - "Ошибка сервера!" <br>
  1 - "Неправильно указана почта! Формат: example@email.com"<br>
  2 - "Пароли не совпадают!"<br>
  3 - "Должны быть заполнены все поля!"<br>
  4 - "Указанная почта уже используется!"
  </p>

## ШАБЛОНЫ

! Во все шаблоны передается параметр APP_NAME !

OPT - опционально (про параметр)

```
├── login_register.html
│   ├── login.html (OPT login_error)
│   └── register.html (OPT register_error)
│
└── main.html
    ├── index.html (OPT recent_cards: list, view_cards, view_cards_pages_count, view_cards_current_page)
    ├── search.html (view_cards, view_cards_pages_count, view_cards_current_page)
    └── account.html
```

**recent_cards** - список 6 последних просмотренных в-в из сессии <br>
**view_cards** - список 20 в-в <br>
JSON шаблон элементов списков (пример):

```json
{
  "id": 1,                    // из БД
  "name": "Этилбензол",       // из БД
  "name_iupac": "Этилбензол", // из БД
  "formula": "C8H10",         // из БД
  "mass": 106.165,            // из БД
  "liked": "true"             // из сессии или аккаунта
}
```
