from flask import Flask, render_template, redirect, request, session
import re
import sqlite3 as sq
import time
import hashlib as h
import json
import os

app = Flask("Suite")
app.config["SECRET_KEY"] = os.urandom(24).hex()

with sq.connect("base.db", check_same_thread=False) as con:
    con.row_factory = sq.Row
    cur = con.cursor()
    cur.executescript(open("db.sql", "r").read())
    con.commit()

    # PASSWORD LOGIN/REGISTER HASH
    def hash(passwd, mail):
        return h.sha3_512(
            h.md5(
                h.sha256(bytes(mail + passwd + "saltedXEXEXEXE", "utf-8")).digest()
            ).digest()
        ).hexdigest()

    def ses():  # TODO
        global session
        if "logged" in session:
            return session["logged"]
        else:
            session["logged"] = False
            return False

    def get_likes(t):
        if t:
            if not ses():
                return []

            user_email = session["email"]
            cur.execute(f"""SELECT likes FROM users WHERE email = '{user_email}'""")
            result = cur.fetchone()
            return json.loads(result["likes"]) if result else []
        else:
            likes_ids = get_likes(True)
            # Проверка на пустой список
            sql = (
                f"""SELECT * FROM substances WHERE id IN ({','.join(map(str, likes_ids))})"""
                if likes_ids
                else """SELECT * FROM substances WHERE 1=0"""
            )
            substances = db_get_substances(sql, liked_ids=set(likes_ids))
            return substances

    def db_get_substances(sql, liked_ids=None):
        liked_ids = liked_ids or set()  # Значение по умолчанию
        cur.execute(sql)
        return [
            {
                **substance,
                "other_names": json.loads(substance["other_names"]),
                "characteristics": json.loads(substance["characteristics"]),
                "sources": json.loads(substance["sources"]),
                "type": "substance",
                "liked": "true" if str(substance["id"]) in liked_ids else "false",
            }
            for substance in cur.fetchall()
        ]

    # * _____________________________________________
    # *
    # *                 CUSTOM
    # * _____________________________________________

    @app.template_filter("regex_replace")
    def regex_replace(s, find, replace):
        return re.sub(find, replace, s)

    @app.template_filter("regex_search")
    def regex_search(s, find):
        return re.match(find, s)

    # Register the filter
    app.jinja_env.filters["regex_replace"] = regex_replace
    app.jinja_env.filters["regex_search"] = regex_search

    @app.context_processor
    def global_variables():
        return {
            "APP_NAME": "Amen",
            "IsMobile": re.search(
                "(Mobile|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini)",
                request.headers.get("User-Agent"),
            ),
            # "user": {}, # TODO
            "THEME": "default",
            "THEME_TYPE": "dark",
            # "notifications": [
            #     {
            #         "class": "success",
            #         "title": "Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!",
            #         "text": "Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!Вещество удалено!",
            #     }
            # ],
        }

    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # *
    # *                 GET ЗАПРОСЫ
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________

    # TODO: view_cards=[{ ... }], view_cards_pages_count, view_cards_current_page, recent_cards=[{ ... }]
    #! TODO ALE
    #! TODO ALE
    #! TODO ALE
    #! TODO ALE
    #! TODO ALE
    @app.route("/")
    def get_index():
        liked_ids = set(get_likes(True)) if ses() else set()
        substances = db_get_substances(
            """SELECT * FROM substances WHERE admin_confirmed LIMIT 20"""
        )
        print(substances)
        return render_template(
            "index.html",
            recent_substances=substances,
            view_substances=substances,
            liked_substances=get_likes(False),
            view_substances_pages_count=10,
        )

    # АККАУНТ


    @app.route("/login/")
    def get_login():
        if ses():
            return redirect("/account/")
        else:
            return render_template("login.html")

    @app.route("/account/")
    def get_account():
        if ses():
            return render_template("account.html")
        else:
            return redirect("/login/")

    @app.route("/account/edit/")  # TODO
    def get_account_edit():
        # COMING SOON
        return render_template("acc_ed", err=False)

    @app.route("/account/delete/")  # TODO
    def get_account_delete():
        # COMING SOON
        return render_template("")

    # ВЕЩЕСТВА

    @app.route("/substance/<id>/delete/")
    def get_delete(id):
        cur.execute(f"""DELETE FROM substances WHERE id = {id}""")
        con.commit()
        return get_index()
    
    @app.route("/register/")
    def get_register():
        if ses():
            return redirect("/account/")
        else:
            return render_template("register.html")

    @app.route("/substance/<id>/")
    def get_chem(id):
        substances = db_get_substances(f"""SELECT * FROM substances WHERE id == {id}""")
        if len(substances):
            return render_template(
                "substance.html", substance=substances[0], edit=False
            )
        else:
            render_template("404.html")

    @app.route("/substance/<id>/edit/")
    def get_chem_edit(id):
        substances = db_get_substances(f"""SELECT * FROM substances WHERE id == {id}""")
        if len(substances):
            return render_template(
                "substance.html", substance=substances[0], edit=True
            )
        else:
            render_template("404.html")

    @app.route("/search/")  # TODO
    def get_search():
        substance = db_get_substances(f"""SELECT * FROM substances WHERE id == 1""")[0]

        return render_template(
            "search.html",
            search_substances=[
                substance,
                substance,
                substance,
                substance,
            ],
            search_substances_pages_count=10,
        )

    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # *
    # *                POST ЗАПРОСЫ
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________
    # * _____________________________________________

    @app.route("/substance/<id>/like", methods=["POST"])
    def toggle_like(id):
        if not ses():
            return get_index()

        user_email = session["email"]
        cur.execute(f"""SELECT likes FROM users WHERE email = '{user_email}'""")
        likes = json.loads(cur.fetchone()["likes"])

        if str(id) in likes:
            likes.remove(str(id))
        else:
            likes.append(str(id))

        cur.execute(
            f"""
            UPDATE users 
            SET likes = '{json.dumps(likes)}' 
            WHERE email = '{user_email}'
        """
        )
        con.commit()

        return get_index()

    @app.route("/account/edit/", methods=["POST"])
    def post_account_edite():  # TODO
        # COMING SOON, For example
        t = True
        if t:
            return render_template("acc")
        else:
            return render_template("acc_ed", err=True)

    @app.route("/account/delete", methods=["POST"])
    def post_account_delete():  # TODO
        passwd = True
        if passwd:
            return render_template("testpage.html")
        else:
            return render_template("acc")

    @app.route("/<id>/edit/", methods=["POST"])
    def post_chem_edite():  # TODO
        # COMING SOON, For example
        e = True
        if e:
            return render_template("chem.html")
        else:
            return render_template("chem_ed", err=True)

    @app.route("/<id>/delete/", methods=["POST"])
    def post_chem_delete():
        idt = request.form["confirmation"]
        if idt:
            return render_template(
                "index.html",
                notifications=[
                    {"class": "success", "title": "Успех", "text": "Вещество удалено!"}
                ],
            )
        else:
            return render_template(
                "chem.html",
                notifications=[
                    {
                        "class": "error",
                        "title": "Отмена",
                        "text": "Вещество не было удалено",
                    }
                ],
            )

    @app.route("/register/", methods=["POST"])
    def post_register():  # TODO
        name1 = request.form["name"]
        email1 = request.form["email"]
        cur.execute(f"""SELECT id FROM users WHERE email == '{email1}'""")
        if cur.fetchone() == None:
            password_first1 = request.form["password"]
            password_second1 = request.form["password_confirm"]
            if password_first1 == password_second1:
                created_datatime = time.time()
                updated_datatime = created_datatime
                try:
                    psswd_hashed = str(hash(password_second1, email1))
                    cur.execute(
                        f"""INSERT INTO users (name, email, password, created_datatime, updated_datatime) VALUES ('{name1}', '{email1}', '{psswd_hashed}', '{created_datatime}', '{updated_datatime}')"""
                    )
                    con.commit()
                    session["logged"] = True
                    session["email"] = email1
                    return render_template("index.html")
                except Exception as err:
                    print(err)
                    return render_template("register.html", register_error=0)
            else:
                return render_template("register.html", register_error=2)
        else:
            return render_template("register.html", register_error=4)

    @app.route("/login/", methods=["POST"])
    def post_login():  # TODO
        if not ses():
            try:
                email1 = request.form["email"]
                password1 = hash(request.form["password"], email1)
                cur.execute(
                    f"""SELECT id FROM users WHERE email == '{email1}' AND password == '{password1}'"""
                )
                tmp = cur.fetchone()
                if tmp != None:
                    session["logged"] = True
                    session["email"] = email1
                    return render_template("index.html")
                else:
                    return render_template("login.html", login_error=2)
            except:
                return render_template("login.html", login_error=0)
        else:
            return render_template("account.html")

    app.run(host="0.0.0.0", port=80, debug=True)
