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
  def get_index():
    return render_template('index.html')

  @app.route('/account/')
  def get_account():
    # COMING SOON
    return render_template('acc')

  @app.route('/account/edit/')
  def get_account_edit():
    # COMING SOON
    return render_template('acc_ed', err = False)

  @app.route('/account/delete/')
  def get_account_delete():
    # COMING SOON
    return render_template('')

  @app.route('/login/')
  def get_login():
    # COMING SOON
    return render_template('')

  @app.route('/register/')
  def get_register():
    # COMING SOON
    return render_template('register.html')

  @app.route('/<id>/')
  def get_chem(id):
    # COMING SOON
    return render_template('chem', id)

  @app.route('/<id>/edit/')
  def get_chem_edit(id):
    # COMING SOON
    return render_template('chem_ed', id, err = False)

  @app.route('/search/q=&p=')
  def get_search(id):
    # COMING SOON
    return render_template()

  @app.route('/like/')
  def get_like(id):
    # COMING SOON
    return render_template()

  @app.route('/usful-information/')
  def get_inf(id):
    # COMING SOON
    return render_template()

                                                          #Обработка POST запросов
  @app.route('/account/edit/', methods=['POST'])
  def post_account_edite():
    # COMING SOON, For example
    t = True
    if t:
      return render_template('acc')
    else:
      return render_template('acc_ed', err = True)

  @app.route('/account/delete', methods=['POST'])
  def post_account_delete():
    passwd = True
    if passwd:
      return render_template('testpage.html')
    else:
      return render_template('acc')

  @app.route('/<id>/edit/', methods=['POST'])
  def post_chem_edite():
    # COMING SOON, For example
    e = True
    if e:
      return render_template('chem.html', id)
    else:
      return render_template('chem_ed', id, err = True)

  @app.route('/<id>/delete/', methods=['POST'])
  def post_chem_delete():
    idt = request.form['confirmation']
    if idt:
      return render_template('index.html', notification = {"class":"success", "title":"Успех", "text":"Вещество удалено!"})
    else:
      return render_template('chem.html', notification = {"class":"error", "title":"Отмена", "text":"Вещество не было удалено"})
    
  @app.route('/register/', methods=['POST'])
  def post_register(): 
    name = request.form['name']
    email = request.form['email']
    password_first = request.form['password_first']
    password_second = request.form['password_second']
    if password_first == password_second:
      created_datatime = time.ctime(time.time())
      updated_datatime = created_datatime
      try:
        cur.execute(f"""INSERT INTO users (name, email, password, created_datetime, upgrated_datatime) VALUES ({name}, {email}, {password_first}, {created_datatime}, {updated_datatime})""")
        return render_template('index.html', notification = {"class":"success", "title":"Успех", "text":"Регистрация выполнена!"})
      except Exception as err:
        return render_template('register.html', notification = {"class":"error", "title":"Ошибка", "text":"Ошибка регистрации, попробуйте ещё раз"})
    else:
      return render_template('register.html', notification = {"class":"error", "title":"Ошибка", "text":"Ошибка регистрации, пароли не совпадают, попробуйте ещё раз"})
    
  @app.route('/login/', methods=['POST'])
  def post_login():
    name = request.form['name']
    password = request.form['password']
    cur.execute(f"""SELECT password FROM users WHERE name == {name}""")
    user_data = cur.fetchone()[0]
    if password == user_data:
      return render_template('index.html', notification = {"class":"success", "title":"Успех", "text":"Вы вошли в аккаунт!"})
    else:
      return render_template('login.html', notification = {"class":"error", "title":"Ошибка", "text":"Ошибка входа, попробуйте ещё раз"})

  app.run(debug=True)