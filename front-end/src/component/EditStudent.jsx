import React from "react";
import Popup from "reactjs-popup";
import { Button, Form } from "react-bootstrap";
import "../css/NewStudent.css";
import { withRouter } from "react-router-dom";
import { getSingleStudent, setUserSkills } from "../lib/api";
import "../css/EditStudent.css";

class PopupOnFocus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			infoStudent: {},
			current_magic_skills: [],
		};
	}

	handleOnSubmit() {
		let { infoStudent, current_magic_skills } = this.state;
		console.log(infoStudent._id);
		console.log(current_magic_skills);
		setUserSkills(infoStudent._id, current_magic_skills);
	}

	componentDidMount() {
		let paramsId = this.props.match.params.id;
		getSingleStudent(paramsId).then((response) => {
			this.setState({ infoStudent: response.data });
		});
	}

	curentSkills(name) {
		console.log(name);
		this.setState({
			current_magic_skills: [...this.state.current_magic_skills, name],
		});
		console.log(this.state.current_magic_skills);
	}

	render() {
		let { infoStudent } = this.state;
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
					<div className="name">
						Name: {infoStudent.first_name} {infoStudent.last_name}
					</div>
					<div className="house">House: {infoStudent.house}</div>

					<div>Add Current skills:</div>
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
