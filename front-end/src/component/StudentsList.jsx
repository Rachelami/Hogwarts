import React from "react";
import { getAllStudents, deleteStudent, getSingleStudent } from "../lib/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../css/StudentsList.css";
import Popup from "reactjs-popup";
import PopupOnFocus from "./newStudent";
import { Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import NewStudent from "./StudentPage";
import jwt_decode from "jwt-decode";

class StudentsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acciStudent: false,
			userID: "",
			email: "",
			alert: false,
			// reload: false,
			columnDefs: [
				{
					headerName: "",
					field: "",
					width: 50,
					checkboxSelection: true,
				},

				{
					headerName: "First name",
					field: "first_name",
					width: 120,
					resizable: true,
					sortable: true,
				},
				{
					headerName: "Last name",
					field: "last_name",
					width: 120,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "House",
					field: "house",
					width: 120,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "Current Skills",
					field: "current_magic_skills",
					width: 120,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "Desired Skills",
					field: "want_skills",
					width: 120,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "Course Interests",
					field: "course_interests",
					width: 160,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "Create Date",
					field: "create_date",
					width: 120,
					sortable: true,
					resizable: true,
				},
				{
					headerName: "Last Update",
					field: "last_update_time",
					sortable: true,
					resizable: true,
				},
				{
					headerName: "ID",
					field: "_id",
					sortable: true,
					resizable: true,
				},
			],
			rowData: [],
		};
	}

	async componentDidMount() {
		let data = await getAllStudents();
		console.log(data.data);
		let previousinfo = this.state.rowData;
		let newInfo = previousinfo.concat(data.data);
		this.setState({ rowData: newInfo });

		
		const token = localStorage.usertoken;
		console.log("token")
		console.log(token)
		if (token !== undefined) {
		const decoded = jwt_decode(token);
		console.log("decoded")
		console.log(decoded)
		this.setState({
			email: decoded.identity.email,
		});}
	}

	onDeleteClick = (e) => {
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			if (this.state.email === "rachelami@gmail.com"){

				let txt;
				let person = prompt("Please enter password:", "");
				if (person === "12345") {
					console.log("ok")
					// txt = "Hello " + person + "! How are you today?";
					deleteStudent(selectedData[0]._id);
					window.location.reload(true);
				} else {
					console.log("denied")
					// txt = "User cancelled the prompt.";
					alert("Wrong Password")
				}
				
		} else {
			this.setState({alert: true});
			//print you dont have autorization to delete
			alert("You Dont Have Autorization To Delete")
		}
	}
	};


	onAccioClick = (event, callback) => {
		event.preventDefault();
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			this.setState({ acciStudent: true });
			this.setState({ userID: selectedData[0]._id });
			callback(selectedData[0]._id);
		}
	};


	// AlertDismissibleExample() {
	// 	const [show, setShow] = React.useState(true);
	// 	console.log("dfsfds")
	  
	// 	if (show) {
	// 	  return (
	// 		<Alert variant="danger" onClose={() => setShow(false)} dismissible>
	// 		  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
	// 		  <p>
	// 			Change this and that and try again. Duis mollis, est non commodo
	// 			luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
	// 			Cras mattis consectetur purus sit amet fermentum.
	// 		  </p>
	// 		</Alert>
	// 	  );
	// 	}
	// 	return <Button onClick={() => setShow(true)}>Show Alert</Button>;
	//   }

	render() {
		// console.log(this.state.columnDefs);
		return (
			<div className="flexBox listMarginTop">
				<AppContext.Consumer>
					{({ getID }) => (
						<div className="flexBox">
							<div>
								<img
									src="./images/unnamed.gif"
									alt="goldenSnitch"
									className="goldenSnitch"
								/>
							</div>
							<div className="container">
								<PopupOnFocus />
								<div className="ag-theme-alpine">
									<AgGridReact
										columnDefs={this.state.columnDefs}
										rowData={this.state.rowData}
										onGridReady={(params) => (this.gridApi = params.api)}
									></AgGridReact>
									<div className="deleteText">
										Please select a user before clicking the button
									</div>
									<Button
										variant="primary"
										className="goTOpage borderBtn"
										onClick={(event) => this.onAccioClick(event, getID)}
									>
										{this.state.acciStudent === true && (
											// <Redirect to={`/studentPage`} />
											// <Redirect to={`/studentPage/:id`} />
											<Redirect to={`/studentPage/${this.state.userID}`} />
										)}
										Accio Student
									</Button>
									<Button
										variant="primary"
										className="deleteBtn borderBtn"
										onClick={this.onDeleteClick}
									>
										Avada Kedavra
										{/* {this.state.alert === true && this.AlertDismissibleExample()} */}
									</Button>
								</div>
							</div>
						</div>
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default StudentsList;
