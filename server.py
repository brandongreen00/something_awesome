from flask import Flask, render_template, request
from json import dumps
from flask_cors import CORS
import data

APP = Flask(__name__)
CORS(APP)

@APP.route('/')
def hello_world():
    return render_template("index.html")

@APP.route('/mod1')
def run_mod_one():
    return render_template("module1.html")

@APP.route('/mod2')
def run_mod_two():
    return render_template("module2.html")

@APP.route('/mod3')
def run_mod_three():
    return render_template("module3.html")

@APP.route('/changepage', methods=['GET'])
def change_page():
    element = int(request.args.get('mod')) - 1
    pageNum = int(request.args.get('pageNum'))
    progress = data.get()
    progress['info'][element]['pageNum'] = pageNum
    if (request.args.get('completed') != None):
        progress['info'][element]['completed'] = True
    data.put(progress)
    return dumps(progress)

@APP.route('/getdata', methods=['GET'])
def get_data():
    return dumps(data.get())

if (__name__ == '__main__'):
    APP.run(debug=True)