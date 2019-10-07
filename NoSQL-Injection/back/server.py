from pymongo import MongoClient
from flask import Flask
from flask import request
import json

client = MongoClient('localhost', 27017)

app = Flask(__name__)

db = client.nosql

#Helper Functions

def get_status(data):
    x = data['query']
    query = x.replace("\'", "\"")
    query = json.loads(query)
    document = db.token.find_one(query)
    value = document['value']
    status = document['status']
    return value, status

@app.route('/authentication', methods=['POST'])
def authentication():
    collection = db['token']
    data = request.get_json()
    #print(data)
    value, status = get_status(data)
    print(value, status)
        


if __name__ == "__main__":
    app.run(debug=True)


