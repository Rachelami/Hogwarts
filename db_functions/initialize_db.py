from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')

db = client['Hogwarys']

# db.students.insert({ "name": "Rachel"})