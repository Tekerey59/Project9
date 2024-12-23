from flask import Flask
from flask import render_template
from flask import request
import sqlite3 as sq 
import time
import hashlib as h
app = Flask('Suite')


with sq.connect('base.db', check_same_thread=False) as con:
  cur = con.cursor()
  with open('db.sql', 'r') as file:
      sql_script = file.read()
  cur.executescript(sql_script)
  con.commit()

  def hash(passwd, mail):
    cur.execute(f"""SELECT id FROM users WHERE email == '{mail}'""")
    tmp = cur.fetchone()
    print(type(tmp))
    if tmp != None:
      print('Not Noneee')
      print(str(tmp[0]), 'TUPLESSSS')
      return h.sha3_512(h.md5(h.sha256(bytes(str(tmp[0]) + passwd + 'saltedXEXEXEXE', 'utf-8')).digest()).digest()).hexdigest()
    else:
      print('Noneeee')
      cur.execute("""SELECT MAX(id) FROM users;""")
      tmp = cur.fetchone()
      if tmp == None:
        tmp = [1]
      print(str(int(tmp[0] + 1)), ' NON TUUUPLEEEE')
      return h.sha3_512(h.md5(h.sha256(bytes(str(int(tmp[0]) + 1) + passwd + 'saltedXEXEXEXE', 'utf-8')).digest()).digest()).hexdigest()
  
                                                      #Обработка GET запросов
  @app.route('/')
  def get_index(): #TODO: cards_list={ ... }
    return render_template('index.html', cards_list=[{"id": "1", "name": "Этилбензол", "name_iupac": "Этилбензол", "mass": 106.165, "liked": "true"}, {"id": "1", "name": "Этилбензол", "name_iupac": "Этилбензол", "mass": 106.165, "liked": "false"}])

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
    return render_template('login.html')

  @app.route('/register/')
  def get_register():
    # COMING SOON
    return render_template('register.html')

  @app.route('/<id>/')
  def get_chem(id):
    # COMING SOON
    return render_template('index.html', id = id)

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
      return render_template('chem.html')
    else:
      return render_template('chem_ed', err = True)

  @app.route('/<id>/delete/', methods=['POST'])
  def post_chem_delete():
    idt = request.form['confirmation']
    if idt:
      return render_template('index.html', notification = {"class":"success", "title":"Успех", "text":"Вещество удалено!"})
    else:
      return render_template('chem.html', notification = {"class":"error", "title":"Отмена", "text":"Вещество не было удалено"})
    
  @app.route('/register/', methods=['POST'])
  def post_register(): 
    name1 = request.form['name']
    email1 = request.form['email']
    password_first1 = request.form['password_first']
    password_second1 = request.form['password_second']
    if password_first1 == password_second1:
      created_datatime1 = time.time()
      updated_datatime1 = created_datatime1
      try:
        print('tryyy')
        psswd_hashed = str(hash(password_second1, email1))
        print(psswd_hashed)
        cur.execute(f"""INSERT INTO users (name, email, password, created_datetime, upgrated_datatime) VALUES ('{name1}', '{email1}', '{psswd_hashed}', '{created_datatime1}', '{updated_datatime1}')""")
        con.commit()
        return render_template('index.html')      
      except Exception as err:
        return render_template('register.html', error = 0)
    else:
      return render_template('register.html', error  = 2)
    
  @app.route('/login/', methods=['POST'])
  def post_login():
    email1 = request.form['email']
    password1 = hash(request.form['password'], email1)
    print(password1)
    cur.execute(f"""SELECT id FROM users WHERE email == '{email1}' AND password == '{password1}'""")
    if cur.fetchone() != None:
      return render_template('index.html')
    else:
      return render_template('login.html', error = 2)

  app.run(debug=True)

  #ПОСЛЕ СОЗДАНИЯ БД ДОБАВИТЬ ВРУЧНУЮ 1-ю СТРОКУ! ВРЕМЕННО.