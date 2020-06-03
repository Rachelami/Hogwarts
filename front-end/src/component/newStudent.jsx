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
			current_magic_skills: [],
			want_skills: [],
			course_interests: "",
			disabled: false,
		};
	}

	handleOnSubmit() {
		addStudent(this.state);
	}

	curentSkills(name) {
		console.log(name);
		// this.setState({ current_magic_skills: })
		this.setState({
			current_magic_skills: [...this.state.current_magic_skills, name],
		});
		// console.log(this.state.current_magic_skills);
	}

	DesiredSkills(name) {
		console.log(name);
		// this.setState({ current_magic_skills: })
		this.setState({
			want_skills: [...this.state.want_skills, name],
		});
		// console.log(this.state.current_magic_skills);
	}

	setHouse(name) {
		console.log(name);
		this.setState({ house: name })
		this.setState({ disabled: true })
	}

	render() {
		let {current_magic_skills,want_skills } = this.state
		// console.log(current_magic_skills)
		// console.log(want_skills)
		return (
			<Popup
				trigger={
					<Button variant="primary" className="addBtn borderBtn">
						<span className="align-plus">+</span>
					</Button>
				}
				modal
				closeOnDocumentClick
			>
				<Form
					className="popUpForm"
					onSubmit={(event) => this.handleOnSubmit(event)}
				>
					<div className="flex">
					<div className="firstNameDiv">
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
					</div>

							<div className="lastNameDiv">
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
					</div></div>
{/* 
					<Form.Group controlId="formBasicPassword">
						<Form.Label>House</Form.Label>
						<Form.Control
							type="text"
							name="house"
							placeholder="Enter House"
							onChange={(event) => this.setState({ house: event.target.value })}
						/>
						<Form.Text className="RequiredText">*Required Text</Form.Text>
					</Form.Group> */}

					<div>House:</div>
					<Form>
						{["checkbox"].map((type) => (
							<div key={`custom-inline-${type}`} className="mb-3">
								<Form.Check
									custom
									inline
									disabled = {this.state.disabled}
									label="Gryffindor"
									name="Gryffindor"
									type={type}
									id={`custom-inline-${type}-13`}
									onChange={(event) => this.setHouse(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									disabled = {this.state.disabled}
									label="Ravenclaw"
									name="Ravenclaw"
									type={type}
									id={`custom-inline-${type}-14`}
									onChange={(event) => this.setHouse(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									disabled = {this.state.disabled}
									label="Hufflepuff"
									name="Hufflepuff"
									type={type}
									id={`custom-inline-${type}-15`}
									onChange={(event) => this.setHouse(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									disabled = {this.state.disabled}
									label="Slytherin"
									name="Slytherin"
									type={type}
									id={`custom-inline-${type}-16`}
									onChange={(event) => this.setHouse(event.target.name)}
								/>
							</div>
						))}
					</Form>



					<div>Current skills:</div>
					<Form>
						{["checkbox"].map((type) => (
							<div key={`custom-inline-${type}`} className="mb-3">
								<Form.Check
									custom
									inline
									label="Flying"
									name="Flying"
									type={type}
									id={`custom-inline-${type}-1`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Defense"
									name="Defense"
									type={type}
									id={`custom-inline-${type}-2`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Parseltongue"
									name="Parseltongue"
									type={type}
									id={`custom-inline-${type}-3`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Astronomy"
									name="Astronomy"
									type={type}
									id={`custom-inline-${type}-4`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Charms"
									name="Charms"
									type={type}
									id={`custom-inline-${type}-5`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Herbs"
									name="Herbs"
									type={type}
									id={`custom-inline-${type}-6`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="History"
									name="History"
									type={type}
									id={`custom-inline-${type}-7`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Potions"
									name="Potions"
									type={type}
									id={`custom-inline-${type}-8`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Transfiguration"
									name="Transfiguration"
									type={type}
									id={`custom-inline-${type}-9`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Runes"
									name="Runes"
									type={type}
									id={`custom-inline-${type}-10`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Divination"
									name="Divination"
									type={type}
									id={`custom-inline-${type}-11`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Muggle Knowledge"
									name="Muggle Knowledge"
									type={type}
									id={`custom-inline-${type}-12`}
									onChange={(event) => this.curentSkills(event.target.name)}
								/>
							</div>
						))}
					</Form>

					{/* <Form.Group controlId="formBasicPassword">
						<Form.Label>Desired skills</Form.Label>
						<Form.Control
							type="text"
							name="want_skills"
							placeholder="Enter Desired skills"
							onChange={(event) =>
								this.setState({ want_skills: event.target.value })
							}
						/>
					</Form.Group> */}



					<div>Desired skills:</div>
					<Form>
						{["checkbox"].map((type) => (
							<div key={`custom-inline-${type}`} className="mb-3">
								<Form.Check
									custom
									inline
									label="Flying"
									name="Flying"
									type={type}
									id={`custom-inline-${type}-17`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Defense"
									name="Defense"
									type={type}
									id={`custom-inline-${type}-18`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Parseltongue"
									name="Parseltongue"
									type={type}
									id={`custom-inline-${type}-19`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Astronomy"
									name="Astronomy"
									type={type}
									id={`custom-inline-${type}-20`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Charms"
									name="Charms"
									type={type}
									id={`custom-inline-${type}-21`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Herbs"
									name="Herbs"
									type={type}
									id={`custom-inline-${type}-22`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="History"
									name="History"
									type={type}
									id={`custom-inline-${type}-23`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Potions"
									name="Potions"
									type={type}
									id={`custom-inline-${type}-24`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Transfiguration"
									name="Transfiguration"
									type={type}
									id={`custom-inline-${type}-25`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Runes"
									name="Runes"
									type={type}
									id={`custom-inline-${type}-26`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Divination"
									name="Divination"
									type={type}
									id={`custom-inline-${type}-27`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
								<Form.Check
									custom
									inline
									label="Muggle Knowledge"
									name="Muggle Knowledge"
									type={type}
									id={`custom-inline-${type}-28`}
									onChange={(event) => this.DesiredSkills(event.target.name)}
								/>
							</div>
						))}
					</Form>



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

export default PopupOnFocus;
