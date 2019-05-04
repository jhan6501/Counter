from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

count = 0

@app.route("/", methods = ['POST'])
def counter():
    global count
    count = count + 1  
    return str(count)  


@app.route("/", methods = ['GET'])
def displayCount ():
    return str(count)

    