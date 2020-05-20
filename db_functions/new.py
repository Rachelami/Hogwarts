import pymongo
from bson import ObjectId

from models.student import Student

class DataLayer:
    def __init__(self):
        self.__client = pymongo.MongoClient('localhost', 27017)
        self.__db = self.__client["hogwarts"]

    def get_user(self, user_name):
        user_dict = self.__db.student.find_one({"firstName": user_name})
        user = self.create_user_from_dict(user_dict)
        return user

    # create user from dict
    def create_user_from_dict(self, user_dict):
        user = Student(user_dict['_id'], user_dict['first_name'], user_dict['last_name'], user_dict['creation_time'],
                    user_dict['last_updating_time'], user_dict['existing_magical_skills'],
                    user_dict['desired_magical_skills'], user_dict['interested_in_course'])
        return user

test = DataLayer()
test.create_user_from_dict({"first_name": "Rachel"})