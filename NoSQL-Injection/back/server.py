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
    try:
        value = document['value']
        status = document['status']
        return value, status
    except:
        return None, None

#Routing

@app.route('/authentication', methods=['POST'])
def authentication():
    collection = db['accounts']
    data = request.get_json()
    #print(data)
    value, status = get_status(data)
    if status == False:
        collection.insertOne({'username':data['username'], 'password':data['password']})
        return 'Success'
    elif status == True:
        return 'Fail'
    else:
        return 'None'
    



if __name__ == "__main__":
    app.run(debug=True)


