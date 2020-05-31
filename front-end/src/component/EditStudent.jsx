import React from "react";
import Popup from "reactjs-popup";
import { Button, Form } from "react-bootstrap";
import { addStudent } from "../lib/api";
import "../css/NewStudent.css";
import { withRouter } from "react-router-dom";
import { getSingleStudent,setUserSkills } from "../lib/api";
import EditStudent from "../css/EditStudent.css";



class PopupOnFocus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            infoStudent:{},
			// first_name: "",
			// last_name: "",
			// house: "",
			current_magic_skills: "",
			// want_skills: "",
			// course_interests: "",
		};
	}

	handleOnSubmit() {
        let { infoStudent, current_magic_skills } = this.state;
        console.log(infoStudent._id)
        // console.log(current_magic_skills)
        setUserSkills(infoStudent._id, current_magic_skills);
        
    }
    
    componentDidMount() {
		let paramsId = this.props.match.params.id;
		getSingleStudent(paramsId).then((response) => {
			this.setState({ infoStudent: response.data });
		});
	}

	render() {
        let { infoStudent } = this.state;
		// console.log(infoStudent);
		return (
			<Popup
				trigger={
					<Button variant="primary" className="studentPageBtn">
						Edit Skills
					</Button>
				}
				modal
				closeOnDocumentClick
			>
				<Form
					className="popUpForm"
					onSubmit={(event) => this.handleOnSubmit(event)}
				>
                    <div className="name">Name: {infoStudent.first_name} {infoStudent.last_name}</div>
                    <div className="house">House: {infoStudent.house}</div>

					<Form.Group>
						<Form.Label>Add Current skills</Form.Label>
						<Form.Control
							type="text"
							name="current_magic_skills"
							placeholder="Add Current skills"
							onChange={(event) =>
								this.setState({ current_magic_skills: event.target.value })
							}
						/>
					</Form.Group>

					{/* <Form.Group>
						<Form.Label>Desired skills</Form.Label>
						<Form.Control
							type="text"
							name="want_skills"
							placeholder="Add Desired skills"
							onChange={(event) =>
								this.setState({ want_skills: event.target.value })
							}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Course Interests</Form.Label>
						<Form.Control
							type="text"
							name="course_interests"
							placeholder="Add Course Interests"
							onChange={(event) =>
								this.setState({ course_interests: event.target.value })
							}
						/>
					</Form.Group> */}

					<Button
						variant="primary"
						type="submit"
						className="addStudentBtn borderBtn"
					>
						Submit
					</Button>
				</Form>
			</Popup>
		);
	}
}

export default withRouter(PopupOnFocus);
