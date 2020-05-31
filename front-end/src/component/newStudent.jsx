import React from "react";
import Popup from "reactjs-popup";
import { Button, Form } from "react-bootstrap";
import { addStudent } from "../lib/api";
import "../css/NewStudent.css";

class PopupOnFocus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			house: "",
			current_magic_skills: "",
			want_skills: "",
			course_interests: "",
		};
	}

	handleOnSubmit() {
		addStudent(this.state);
	}

	render() {
		return (
			<Popup
				trigger={
					<Button variant="primary" className="addBtn borderBtn"><span className="align-plus">+</span></Button>
				}
				modal
				closeOnDocumentClick
			>
				<Form
					className="popUpForm"
					onSubmit={(event) => this.handleOnSubmit(event)}
				>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							name="first_name"
							placeholder="Enter First Name"
							onChange={(event) =>
								this.setState({ first_name: event.target.value })
							}
						/>
						<Form.Text className="RequiredText">*Required Text</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							name="last_name"
							placeholder="Enter Last Name"
							onChange={(event) =>
								this.setState({ last_name: event.target.value })
							}
						/>
						<Form.Text className="RequiredText">*Required Text</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>House</Form.Label>
						<Form.Control
							type="text"
							name="house"
							placeholder="Enter House"
							onChange={(event) => this.setState({ house: event.target.value })}
						/>
						<Form.Text className="RequiredText">*Required Text</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Current skills</Form.Label>
						<Form.Control
							type="text"
							name="current_magic_skills"
							placeholder="Enter Current skills"
							onChange={(event) =>
								this.setState({ current_magic_skills: event.target.value })
							}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Desired skills</Form.Label>
						<Form.Control
							type="text"
							name="want_skills"
							placeholder="Enter Desired skills"
							onChange={(event) =>
								this.setState({ want_skills: event.target.value })
							}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Course Interests</Form.Label>
						<Form.Control
							type="text"
							name="course_interests"
							placeholder="Enter Course Interests"
							onChange={(event) =>
								this.setState({ course_interests: event.target.value })
							}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="addStudentBtn borderBtn">
						Submit
					</Button>
				</Form>
			</Popup>
		);
	}
}

export default PopupOnFocus;

