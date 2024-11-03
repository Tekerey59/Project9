from flask import Flask
from flask import render_template
from flask import request
app = Flask('Suite')

#Обработка GET запросов
@app.route('/')
def index():
  return render_template('testpage.html')

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
  return render_template('')

@app.route('/<id>/')
def chem(id):
  # COMING SOON
  return render_template('chem', id)

@app.route('/<id>/edit/')
def chem_edit_static(id):
  # COMING SOON
  return render_template('chem_ed', id, err = False)

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
    return render_template('testpage.html')
  else:
    return render_template('chem', id)

app.run(debug=True)
