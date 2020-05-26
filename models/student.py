import json
import datetime


class Student(dict):

    def __init__(self, student):
        dict.__init__(self,
                      first_name=student.get('first_name'),
                      last_name=student.get('last_name'),
                      create_date=datetime.date.today().isoformat(),
                      last_update_time=datetime.datetime.now().isoformat(),
                      house=student.get('house'),
                      current_magic_skills = student.get('current_magic_skills'),
                      want_skills = student.get('want_skills'),
                      course_interests = student.get('course_interests'))


