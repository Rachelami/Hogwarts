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
			hatChoice: true,
		};
	}

	handleOnSubmit() {
		addStudent(this.state);
	}

	curentSkills(event) {
		console.log(event.target.checked);
		let NewCurentMagicSkill = this.state.current_magic_skills;
		if (event.target.checked) {
			NewCurentMagicSkill.push(event.target.name);
		} else {
			NewCurentMagicSkill = NewCurentMagicSkill.filter((skill) => {
				return skill !== event.target.name;
			});
		}
		this.setState({ current_magic_skills: NewCurentMagicSkill });
	}

	DesiredSkills(event) {
		console.log(event);
		console.log(event.target.checked);
		let NewWantSkills = this.state.want_skills;
		if (event.target.checked) {
			NewWantSkills.push(event.target.name);
		} else {
			NewWantSkills = NewWantSkills.filter((skill) => {
				return skill !== event.target.name;
			});
		}
		this.setState({ want_skills: NewWantSkills });
	}

	setHouse(name) {
		console.log(name);
		this.setState({ house: name });
		this.setState({ disabled: true });
	}

	SortingHat() {
		let house1 = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
		let index = Math.floor(Math.random() * 4);
		console.log(index);
		let studentHouse = house1[index];
		console.log(this.state);
		if (this.state.hatChoice) {
			this.setState({ house: studentHouse, hatChoice: false });
		}
	}

	render() {
		let { current_magic_skills, want_skills } = this.state;
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
						</div>
					</div>
					<div className="flexColumn center">
						<div>House:</div>
						<img
							src="./images/hat.png"
							alt="Sorting Hat"
							className="SortingHat"
							onClick={() => {
								this.SortingHat();
							}}
						/>
						<div>
							The House Is: <b>{this.state.house}</b>
						</div>
					</div>
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
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Defense"
									name="Defense"
									type={type}
									id={`custom-inline-${type}-2`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Parseltongue"
									name="Parseltongue"
									type={type}
									id={`custom-inline-${type}-3`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Astronomy"
									name="Astronomy"
									type={type}
									id={`custom-inline-${type}-4`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Charms"
									name="Charms"
									type={type}
									id={`custom-inline-${type}-5`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Herbs"
									name="Herbs"
									type={type}
									id={`custom-inline-${type}-6`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="History"
									name="History"
									type={type}
									id={`custom-inline-${type}-7`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Potions"
									name="Potions"
									type={type}
									id={`custom-inline-${type}-8`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Transfiguration"
									name="Transfiguration"
									type={type}
									id={`custom-inline-${type}-9`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Runes"
									name="Runes"
									type={type}
									id={`custom-inline-${type}-10`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Divination"
									name="Divination"
									type={type}
									id={`custom-inline-${type}-11`}
									onChange={(event) => this.curentSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Muggle Knowledge"
									name="Muggle Knowledge"
									type={type}
									id={`custom-inline-${type}-12`}
									onChange={(event) => this.curentSkills(event)}
								/>
							</div>
						))}
					</Form>

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
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Defense"
									name="Defense"
									type={type}
									id={`custom-inline-${type}-18`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Parseltongue"
									name="Parseltongue"
									type={type}
									id={`custom-inline-${type}-19`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Astronomy"
									name="Astronomy"
									type={type}
									id={`custom-inline-${type}-20`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Charms"
									name="Charms"
									type={type}
									id={`custom-inline-${type}-21`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Herbs"
									name="Herbs"
									type={type}
									id={`custom-inline-${type}-22`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="History"
									name="History"
									type={type}
									id={`custom-inline-${type}-23`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Potions"
									name="Potions"
									type={type}
									id={`custom-inline-${type}-24`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Transfiguration"
									name="Transfiguration"
									type={type}
									id={`custom-inline-${type}-25`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Runes"
									name="Runes"
									type={type}
									id={`custom-inline-${type}-26`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Divination"
									name="Divination"
									type={type}
									id={`custom-inline-${type}-27`}
									onChange={(event) => this.DesiredSkills(event)}
								/>
								<Form.Check
									custom
									inline
									label="Muggle Knowledge"
									name="Muggle Knowledge"
									type={type}
									id={`custom-inline-${type}-28`}
									onChange={(event) => this.DesiredSkills(event)}
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
