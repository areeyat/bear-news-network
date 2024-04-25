from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)
a = False

@app.route("/")
def home():
    #return "Hello !!"
    return render_template("index.html", content=["Bear", "News", "Network"])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

#create specific html file and into a directory


