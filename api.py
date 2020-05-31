from flask import Flask, request
from models.student import Student
from db_functions import DbFunctions
from Validators.validator import Validators
import json
from flask_cors import CORS

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
    print("student_id")
    print(student_id)
    try:
        validator.validate_objectid(student_id)
    except Exception as error:
        print("error")
        print(error)
        response = app.response_class(response=json.dumps({"Error": str(error)}), status=400,
                                      mimetype="application/json")
        return response
    student = db.get_single_student(student_id)
    print("student")
    print(student)
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
    print("skills,student_id ")
    print("student_id "+student_id)
    print("skills"+skills)
    setSkills = db.set_user_skills( student_id, skills)
    print("setskill" + setSkills)
    response = app.response_class(response=json.dumps(setSkills), status=200, mimetype="application/json")
    print("responce" +response)
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



if __name__ == '__main__':
    app.run()


