from flask import Flask
from flask import render_template
from flask import request
import sqlite3 as sq 
import time
app = Flask('Suite')

with sq.connect('base.db') as con:
  cur = con.cursor()

                                                      #Обработка GET запросов
  @app.route('/')
  def index():
    return render_template('index.html')

  @app.route('/account/')
  def account():
    # COMING SOON
    return render_template('acc')

  @app.route('/account/edit/')
  def account_edit_static():
    # COMING SOON
    return render_template('acc_ed', err = False)

  @app.route('/account/delete/')
  def account_delete():
    # COMING SOON
    return render_template('')

  @app.route('/login/')
  def login():
    # COMING SOON
    return render_template('')

  @app.route('/register/')
  def register():
    # COMING SOON
    return render_template('register.html')

  @app.route('/<id>/')
  def chem(id):
    # COMING SOON
    return render_template('chem', id)

  @app.route('/<id>/edit/')
  def chem_edit_static(id):
    # COMING SOON
    return render_template('chem_ed', id, err = False)

  @app.route('/search/q=&p=')
  def search_res(id):
    # COMING SOON
    return render_template()

  @app.route('/like/')
  def like(id):
    # COMING SOON
    return render_template()

  @app.route('/usful-information/')
  def inf(id):
    # COMING SOON
    return render_template()

                                                          #Обработка POST запросов
  @app.route('/account/edit/', methods=['POST'])
  def account_edite_end():
    # COMING SOON, For example
    t = True
    if t:
      return render_template('acc')
    else:
      return render_template('acc_ed', err = True)

  @app.route('/account/delete', methods=['POST'])
  def account_delete_conf():
    passwd = True
    if passwd:
      return render_template('testpage.html')
    else:
      return render_template('acc')

  @app.route('/<id>/edit/', methods=['POST'])
  def chem_edite_end():
    # COMING SOON, For example
    e = True
    if e:
      return render_template('chem', id)
    else:
      return render_template('chem_ed', id, err = True)

  @app.route('/<id>/delete/', methods=['POST'])
  def chem_delete_conf():
    idt = True
    if idt:
      return render_template('index.html')
    else:
      return render_template('chem', id)
    
  @app.route('/register/', methods=['POST'])
  def register(): #ГОТОВО, кроме 'register.html' --> ?
    try:
      name = request.form[name]
      email = request.form[email]
      password = request.form[password]
      created_datatime = time.ctime(time.time)
      updated_datatime = created_datatime
      cur.execute("""INSERT INTO users (name, email, password, created_datetime, upgrated_datatime) VALUES ({name}, {email}, {password}, {created_datatime}, {updated_datatime})""")
      notification = {"class":"success", "title":"Успех", "text":"Регистрация выполнена!"}
      return render_template('index.html', notification)
    except Exception as err:
      notification = {"class":"error", "title":"Ошибка", "text":"Ошибка регистрации, попробуйте ещё раз"}
      return render_template('register.html', notification)
    
  @app.route('/login/', methods=['POST'])
  def login():
    name = request.form[name]
    password = request.form[password]
    cur.execute("""SELECT password FROM users WHERE name == {name}""")
    user_data = cur.fetchone()[0]
    if password == user_data:
      notification = {"class":"success", "title":"Успех", "text":"Вы вошли в аккаунт!"}
      return render_template('index.html', notification)
    else:
      notification = {"class":"error", "title":"Ошибка", "text":"Ошибка входа, попробуйте ещё раз"}
      return render_template('login.html', notification)

  app.run(debug=True)
