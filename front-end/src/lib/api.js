import axios from "axios";


const baseUrl = 'http://127.0.0.1:5000';

//GET

export function getAllStudents() {
    return axios.get(`${baseUrl}/students`);
}

export function getSingleStudent(student_id) {
    return axios.get(`${baseUrl}/students/${student_id}`);
}

export function getStudentWithSkill(skill) {
    return axios.get(`${baseUrl}/students/${skill}`);
}

export function getStudentWhoWantSkill(skill) {
    return axios.get(`${baseUrl}/students/${skill}`);
}

export function getStudentByDate(date) {
    return axios.get(`${baseUrl}/students/${date}`);
}

//POST
export async function addStudent() {
    await axios
        .post(`${baseUrl}/student`)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
            // this.setState({loading: false})
        });
}

export async function setUserSkills(student_id, skills) {
    await axios
        .post(`${baseUrl}/student/${student_id}/set_skills/${skills}`)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
            // this.setState({loading: false})
        });
}

//DELETE

export async function deleteStudent(student_id) {
    await axios
        .delete(`${baseUrl}/student/delete/${student_id}`)
        .then((response) => {
            console.log(response);
        });
}