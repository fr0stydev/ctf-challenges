from pymongo import MongoClient
from flask import Flask
from flask import request

client = MongoClient('localhost', 27017)

app = Flask(__name__)

db = client.nosql

@app.route('/authentication', methods=['POST'])
def authentication():
    collection = db['token']
    data = request.data
    if data['value'] == False:
        pass
        
    print(request.data)


if __name__ == "__main__":
    app.run(debug=True)