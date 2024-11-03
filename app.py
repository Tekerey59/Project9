from flask import Flask
app = Flask('Test')

@app.route('/')
def hello_world():
  return 'Hello, World!'

app.run(debug=True)