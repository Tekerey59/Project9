from flask import Flask, render_template, request, session
import re
import sqlite3 as sq
import time
import hashlib as h
import json

app = Flask("Suite")
app.config['SECRET_KEY'] = '^HJb_mTQ]&0kTg8M$Q3xqUMoslBZ_!'

with sq.connect("base.db", check_same_thread=False) as con:
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

    def ses():
        global session
        if 'logged' in session:
            print('\n')
            print(session['logged'])
            print('\n')
            return session['logged']
        else:
            session['logged'] = False
            print('\n')
            print(session['logged'])
            print('\n')
            return False
    
    # * _____________________________________________
    # *
    # *                 CUSTOM FILTERS
    # * _____________________________________________

    @app.template_filter("regex_replace")
    def regex_replace(s, find, replace):
        return re.sub(find, replace, s)

    # Register the filter
    app.jinja_env.filters["regex_replace"] = regex_replace

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

    @app.route("/")
    def get_index():
        # TODO: view_cards=[{ ... }], view_cards_pages_count, view_cards_current_page, recent_cards=[{ ... }]
        
        cur.execute("""SELECT characteristics FROM substances WHERE id == 1""")
        characteristics_data = json.loads(cur.fetchone()[0])
        return render_template(
            "index.html",
            recent_cards=[  #!______________________________________ TODO remove
                characteristics_data, characteristics_data, characteristics_data, characteristics_data, characteristics_data, 
            ],
            view_cards=[  #!______________________________________ TODO remove
              characteristics_data, characteristics_data, characteristics_data, characteristics_data, characteristics_data, characteristics_data, 
            ],
            view_cards_pages_count=10,
        )

    # АККАУНТ

    @app.route("/register/")
    def get_register():
        if ses():
            return render_template('account.html')
        else:
            return render_template('register.html')
    
    @app.route("/login/")
    def get_login():
        if ses():
            return render_template('account.html')
        else:
            return render_template('login.html')

    @app.route("/account/")
    def get_account():
        # COMING SOON
        return render_template("account.html")

    @app.route("/account/edit/")
    def get_account_edit():
        # COMING SOON
        return render_template("acc_ed", err=False)

    @app.route("/account/delete/")
    def get_account_delete():
        # COMING SOON
        return render_template("")

    # ВЕЩЕСТВА

    @app.route("/<id>/")
    def get_chem(id):
        # COMING SOON
        return render_template("index.html", id=id)

    @app.route("/<id>/edit/")
    def get_chem_edit(id):
        # COMING SOON
        return render_template("chem_ed", id, err=False)

    @app.route("/search/")
    def get_search():
        cur.execute("""SELECT characteristics FROM substances WHERE id == 1""")
        characteristics_data = json.loads(cur.fetchone()[0])

        return render_template(
            "search.html",
            search_cards=[
                characteristics_data, characteristics_data, characteristics_data, characteristics_data
            ],
            search_cards_pages_count=10,
        )

    @app.route("/like/")
    def get_like(id):
        # COMING SOON
        return render_template()

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

    @app.route("/account/edit/", methods=["POST"])
    def post_account_edite():
        # COMING SOON, For example
        t = True
        if t:
            return render_template("acc")
        else:
            return render_template("acc_ed", err=True)

    @app.route("/account/delete", methods=["POST"])
    def post_account_delete():
        passwd = True
        if passwd:
            return render_template("testpage.html")
        else:
            return render_template("acc")

    @app.route("/<id>/edit/", methods=["POST"])
    def post_chem_edite():
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
    def post_register():
        name1 = request.form["name"]
        email1 = request.form["email"]
        password_first1 = request.form["password"]
        password_second1 = request.form["password_confirm"]
        if password_first1 == password_second1:
            created_datatime1 = time.time()
            updated_datatime1 = created_datatime1
            try:
                psswd_hashed = str(hash(password_second1, email1))
                cur.execute(
                    f"""INSERT INTO users (name, email, password, created_datetime, upgrated_datatime) VALUES ('{name1}', '{email1}', '{psswd_hashed}', '{created_datatime1}', '{updated_datatime1}')"""
                )
                con.commit()
                session['logged'] = True
                return render_template("index.html")
            except Exception as err:
                return render_template("register.html", register_error=0)
        else:
            return render_template("register.html", register_error=2)

    @app.route("/login/", methods=["POST"])
    def post_login():
        if not ses():
            try:
                email1 = request.form["email"]
                password1 = hash(request.form["password"], email1)
                cur.execute(
                    f"""SELECT id FROM users WHERE email == '{email1}' AND password == '{password1}'"""
                )
                if cur.fetchone() != None:
                    session['logged'] = True
                    print('Logged! ')
                    return render_template("index.html")
                else:
                    return render_template("login.html", login_error=2)
            except:
                return render_template("login.html", login_error=0)
        else:
            return render_template('account.html')

    app.run(debug=True)
