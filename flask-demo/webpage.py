from flask import Flask, render_template
import csv
import random
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/daily_cal")
def daily_cal():
    return render_template("daily_cal.html")

@app.route("/berkeley_eecs")
def berkeley_eecs():
    return render_template("berkeley_eecs.html")

@app.route("/mcb")
def mcb():
    return render_template("mcb_news.html")

@app.route("/nbc")
def nbc():
    return render_template("nbc_bay_area.html")

@app.route("/abc")
def abc():
    return render_template("abc_7.html")

if __name__ == "__main__":
    app.run(debug = True)