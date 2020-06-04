import React from "react";
import "../css/StudentPage.css";
import { withRouter } from "react-router-dom";
import { getSingleStudent } from "../lib/api";
import PopupOnFocus from "./EditStudent";

class StudentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			infoStudent: {},
		};
	}

	componentDidMount() {
		let paramsId = this.props.match.params.id;
		getSingleStudent(paramsId).then((response) => {
			this.setState({ infoStudent: response.data });
		});
	}

	render() {
		let { infoStudent } = this.state;
		console.log("infoStudent");
		console.log(infoStudent);
		console.log(infoStudent.current_magic_skills);

		return (
			<div>
				<div>
					<div className="studentCard">
						<div className="picDiv">
							{infoStudent.house === "Gryffindor" ||
								(infoStudent.house === "gryffindor" && (
									<img
										src="../images/house/gryffindor.png"
										alt="gryffindor"
										className="housePic"
									/>
								))}
							{infoStudent.house === "ravenclaw" ||
								(infoStudent.house === "Ravenclaw" && (
									<img
										src="../images/house/Untitled-1.png"
										alt="ravenclaw"
										className="housePic"
									/>
								))}
							{infoStudent.house === "hufflepuff" ||
								(infoStudent.house === "Hufflepuff" && (
									<img
										src="../images/house/hufflepuff.png"
										alt="hufflepuff"
										className="housePic"
									/>
								))}
							{infoStudent.house === "slytherin" ||
								(infoStudent.house === "Slytherin" && (
									<img
										src="../images/house/slytherin.png"
										alt="slytherin"
										className="housePic"
									/>
								))}
						</div>
						<div className="cardTextRight">
							<h1>
								{infoStudent.first_name} {infoStudent.last_name}
							</h1>
							<div className="studentPageFont">
								<p>Current Skills: {infoStudent.current_magic_skills}</p>
								<p>Desired Skills: {infoStudent.want_skills}</p>
								<p>Course Interests: {infoStudent.course_interests}</p>
								<p>Create Date: {infoStudent.create_date}</p>
								<p>Last Update: {infoStudent.last_update_time}</p>
								<p>Student ID: {infoStudent._id}</p>
							</div>
							<span>
								<PopupOnFocus />
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(StudentPage);
