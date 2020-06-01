import React from "react";
import AppContext from "../AppContext";
import "../css/StudentPage.css";
import { withRouter } from "react-router-dom";
import { getSingleStudent } from "../lib/api";
import PopupOnFocus from "./EditStudent";


// import queryString from 'query-sring'

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
		console.log(infoStudent.current_magic_skills)
		
		return (
			<div>
				{/* <AppContext.Consumer>
					{({ infoStudent }) => ( */}
				<div>
					<div className="studentCard">
						<div className="picDiv">
							{infoStudent.house === "gryffindor" && (
								<img
									src="https://i.pinimg.com/originals/a1/bf/0a/a1bf0a96a8d25df94e22a1219582f7f7.jpg"
									alt="gryffindor"
									className="housePic"
								/>
							)}
							{infoStudent.house === "ravenclaw" && (
								<img
									src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88363/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507640763.jpg?c=2&imbypass=on"
									alt="ravenclaw"
									className="housePic"
								/>
							)}
							{infoStudent.house === "hufflepuff" && (
								<img
									src="https://qph.fs.quoracdn.net/main-qimg-f4758650dd4a2ae5721a0289a076806f"
									alt="hufflepuff"
									className="housePic"
								/>
							)}
							{infoStudent.house === "slytherin" && (
								<img
									src="https://f0.pngfuel.com/png/869/121/slytherin-logo-png-clip-art.png"
									alt="slytherin"
									className="housePic"
								/>
							)}
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
								{/* <button className="studentPageBtn">Edit student</button> */}
								<PopupOnFocus />
							</span>
						</div>
					</div>
				</div>
				{/* )}
				</AppContext.Consumer> */}
			</div>
		);
	}
}

export default withRouter(StudentPage);
