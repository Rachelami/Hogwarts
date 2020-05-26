from pymongo import MongoClient
from initialize_db import db
from bson import ObjectId
import datetime


class DbFunctions:

    def add_student(self, student):
        student_id = db.students.insert_one(student)
        return str(student_id)

    def get_all_students(self):
        students = db.students.find({})
        student_list = []
        for i in students:
            i['_id']= str(i['_id'])
            student_list.append(i)
        # print(student_list)
        return student_list

    def get_single_student(self, student_id):
        student = db.students.find_one({'_id': ObjectId(student_id)})
        if student is None:
            return {"Error": "Id '{}' does not exist.".format(student_id)}
        else:
            student['_id'] = str(student['_id'])
            return student

    def delete_student(self, student_id):
        student = db.students.delete_one({'_id': ObjectId(student_id)})
        if student.acknowledged and student.deleted_count == 1:
            return True
        else:
            return False

    def set_user_skills(self,student_id, skills):
        my_stusent = self.get_single_student(student_id)
        current_magic_skills = my_stusent["current_magic_skills"]
        for i in skills:
            current_magic_skills.append(i)
        # print(current_magic_skills)
        current_magic_skills = list(dict.fromkeys(current_magic_skills))
        # print(current_magic_skills)
        updated = db.students.update_one({'_id': ObjectId(student_id)}, {"$set": {"current_magic_skills":current_magic_skills}})
        return updated

    def get_student_with_skill(self, skill):
        students_with_skill = db.students.aggregate([{'$match': {"current_magic_skills": skill}}, {"$count": "num_students"}])
        for i in students_with_skill:
            return i['num_students']
        return 0

    def get_student_who_want_skills(self, skill):
        students_who_want_skill = db.students.aggregate([{'$match': {"want_skills": skill}}, {"$count": "num_students"}])
        for i in students_who_want_skill:
            return i['num_students']
        return 0

    def get_student_by_date(selfs, find_date):
        students_by_date = db.students.aggregate([{'$match': {"create_date": find_date}}, {"$count": "students_today"}])
        # have_list = True if len(list(students_by_date)) else False;
        # print(have_list)
        for i in students_by_date:
            # print(i['students_today'])
            return i['students_today']
        return 0



#try & cache

test = DbFunctions()
# test.add_student({"first_name": "Ron", "last_name": "wisley","house": "gryffindor", "current_magic_skills": ["first_skill", "sec_skill", "third_skill"],"want_skills":["1", "2"], "date": datetime.datetime.now().strftime("%x")})
# test.get_all_students()
# test.set_user_skills("5ec53af23c71ae4c346e0666")
# test.set_user_skills(["1", "1"], "5ec549f39cea44884adc619c")
# test.get_student_with_skill("1")
# test.get_student_who_want_skills("1")
# test.get_student_by_date("05/21/20")

