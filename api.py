from flask import Flask, jsonify, request, json
from models.student import Student
from db_functions import DbFunctions
from Validators.validator import Validators
import json
from flask_cors import CORS

from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

import bson


app = Flask(__name__)
CORS(app)

db = DbFunctions()
validator = Validators()

@app.route("/students") #works
def get_all_students_route():
    all_students = db.get_all_students()
    # print(all_students)
    response = app.response_class(response=json.dumps(all_students), status=200, mimetype="application/json")
    return response


@app.route("/student", methods=['POST']) #works
def add_student_route():
    content = request.json['data']
    try:
        validator.validate_new_student(content)
    except Exception as error:
        response = app.response_class(response=json.dumps({"error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    new_student = Student(content)
    student_id = db.add_student(new_student)
    response = app.response_class(response=json.dumps({"student_id": student_id}), status=200, mimetype="application/json")
    return response

@app.route("/student/<student_id>") #works
def get_single_student_route(student_id):
    # print("student_id")
    # print(student_id)
    try:
        validator.validate_objectid(student_id)
    except Exception as error:
        # print("error")
        # print(error)
        response = app.response_class(response=json.dumps({"Error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    student = db.get_single_student(student_id)
    # print("student")
    # print(student)
    response = app.response_class(response=json.dumps(student), status=200, mimetype="application/json")
    return response

@app.route("/student/delete/<student_id>", methods=['DELETE']) #works
def delete_student_route(student_id):
    try:
        validator.validate_objectid(student_id)
    except Exception as error:
        response = app.response_class(response=json.dumps({"Error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    deleteStudent = db.delete_student(student_id)
    response = app.response_class(response=json.dumps(deleteStudent), status=200, mimetype="application/json")
    return response

@app.route("/student/<student_id>/set_skills/<skills>", methods=['POST'])
def set_user_skills_route(student_id, skills):
    # print("skills API")
    # print(skills)
    skillsArray = []
    skillsArray.append(skills)
    setSkills = db.set_user_skills( student_id, skillsArray)
    response = app.response_class(response=json.dumps(setSkills), status=200, mimetype="application/json")
    # print("responce" +response)
    return response

@app.route("/student/check/<skill>") #works
def get_student_with_skill_route(skill):
    getSkill = db.get_student_with_skill(skill)
    response = app.response_class(response=json.dumps(getSkill), status=200, mimetype="application/json")
    return response

@app.route("/student/desired/<skill>") #works
def get_student_who_want_skills_route(skill):
    wantSkill = db.get_student_who_want_skills(skill)
    response = app.response_class(response=json.dumps(wantSkill), status=200, mimetype="application/json")
    return response

@app.route("/student/date/<date>") #works
def get_student_by_date_route(date):
    get_by_date = db.get_student_by_date(date)
    response = app.response_class(response=json.dumps(get_by_date), status=200, mimetype="application/json")
    return response

# Log-in

app.config['MONGO_DBNAME'] = 'reactloginreg'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/reactloginreg'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route('/users/register', methods=["POST"])
# @app.route('/register', methods=["POST"])
def register():
    print("in the function")
    users = mongo.db.users
    print(users)
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    email = request.get_json()['email']
    print(email)
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_id = users.insert({
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password,
        'created': created
    })

    new_user = users.find_one({'_id': user_id})

    result = {'email': new_user['email'] + ' registered'}

    return jsonify({'result' : result})

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'first_name': response['first_name'],
                'last_name': response['last_name'],
                'email': response['email']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result

if __name__ == '__main__':
    app.run()


