from flask import Flask

#creates an instance of a flask web application
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello! <h1> Heading 1<h1>"

@app.route("/<name>")
def user(name):
    return f"Hello {name}!"

#runs the website
if __name__ == "__main__":
    app.run()
