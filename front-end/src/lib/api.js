import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

//GET

export function getAllStudents() {
	return axios.get(`${baseUrl}/students`);
}

export function getSingleStudent(student_id) {
	console.log("API student_id")
	console.log(student_id)
	// console.log(axios.get(`${baseUrl}/student/${student_id}`))
	return axios.get(`${baseUrl}/student/${student_id}`);
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

export function addStudent(data) {
    // console.log("data");
    // console.log(data);
	axios.post(`${baseUrl}/student`, {data}).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);
}


// const config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }
// export function addStudent(data) {
//   console.log(data);
//   return axios.post(`${baseUrl}/student`, data, config);
// }


export async function setUserSkills(student_id, skills) {
	console.log("student_id, skills")
	console.log(student_id)
	console.log(skills)
	await axios
		.post(`${baseUrl}/student/${student_id}/set_skills/${skills}`)
		.then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
				// this.setState({loading: false})
			}
		);
}

//DELETE

export async function deleteStudent(student_id) {
	await axios
		.delete(`${baseUrl}/student/delete/${student_id}`)
		.then((response) => {
			console.log(response);
        });
}
