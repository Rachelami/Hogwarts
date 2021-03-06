import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

//GET

export function getAllStudents() {
	return axios.get(`${baseUrl}/students`);
}

export function getSingleStudent(student_id) {
	console.log("API student_id");
	console.log(student_id);
	return axios.get(`${baseUrl}/student/${student_id}`);
}

export function getStudentWithSkill(skill) {
	return axios.get(`${baseUrl}/student/check/${skill}`);
}

export function getStudentWhoWantSkill(skill) {
	return axios.get(`${baseUrl}/students/${skill}`);
}

export function getStudentByDate(date) {
	return axios.get(`${baseUrl}/student/date/${date}`);
}

//POST

export function addStudent(data) {
	console.log(data);
	axios.post(`${baseUrl}/student`, { data }).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);
}

export async function setUserSkills(student_id, skills) {
	await axios
		.post(`${baseUrl}/student/${student_id}/set_skills/${skills}`)
		.then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
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

// Login

export const register = (newUser) => {
	return axios
		.post(`${baseUrl}/users/register`, {
			first_name: newUser.first_name,
			last_name: newUser.last_name,
			email: newUser.email,
			password: newUser.password,
		})
		.then((response) => {
			console.log("Registered");
		});
};

export const login = (user) => {
	return axios
		.post(`${baseUrl}/users/login`, {
			email: user.email,
			password: user.password,
		})
		.then((response) => {
			localStorage.setItem("usertoken", response.data.token);
			return response.data.token;
		})
		.catch((err) => {
			console.log(err);
		});
};
