from pymongo import MongoClient
from initialize_db import db
from bson import ObjectId

class DbFunctions:

    def add_student(self, student):
        student_id = db.students.insert_one(student)
        return student_id

    def get_all_students(self):
        students = db.students.find({})
        for i in students:
            print(i)
        return students

    def get_single_student(self, student_id):
        student = db.students.find_one({'_id': ObjectId(student_id)})
        return student

    def delete_student(self, student_id):
        student = db.students.delete_one({'_id': ObjectId(student_id)})
        if student.acknowledged and student.deleted_count == 1:
            return True
        else:
            return False

    def set_user_skills(self, skills, student_id):
        my_stusent = self.get_single_student(student_id)
        existing_skills = my_stusent["current_magic_skills"]
        for i in skills:
            existing_skills.append(i)
        print(existing_skills)
        existing_skills = list(dict.fromkeys(existing_skills))
        print(existing_skills)
        updated = db.students.update_one({'_id': ObjectId(student_id)}, {"$set": {"current_magic_skills":existing_skills}})
        return updated

    def get_student_with_skill(self, skill):
        students_with_skill = db.students.aggregate([{'$match': {"current_magic_skills": skill}}, {"$count": "num_students"}])
        for i in students_with_skill:
            return i['num_students']



test = DbFunctions()
# test.add_student({"name": "Ben","current_magic_skills": ["first_skill", "sec_skill", "third_skill"]})
# test.get_all_students()
# test.set_user_skills("5ec53af23c71ae4c346e0666")
# test.set_user_skills(["1", "1"], "5ec549f39cea44884adc619c")
# test.get_student_with_skill("1")