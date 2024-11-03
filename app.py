from flask import Flask
from flask import render_template
import requests
app = Flask('Test')

@app.route('/')
def index():
  return render_template('testpage.html')

app.run(debug=True)