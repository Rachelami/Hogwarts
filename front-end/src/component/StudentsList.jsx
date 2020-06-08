import React from "react";
import { getAllStudents, deleteStudent, getSingleStudent } from "../lib/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../css/StudentsList.css";
import PopupOnFocus from "./newStudent";
import { Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router";
import AppContext from "../AppContext";
import jwt_decode from "jwt-decode";

class StudentsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acciStudent: false,
			userID: "",
			email: "",
			alert: false,
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
		console.log("token");
		console.log(token);
		if (token) {
			console.log("in the loop");
			const decoded = jwt_decode(token);
			this.setState({
				email: decoded.identity.email,
			});
		}
	}

	onDeleteClick = (e) => {
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			if (this.state.email === "rachelami@gmail.com") {
				let txt;
				let person = prompt("Please Enter Password:", "");
				if (person === "12345") {
					console.log("ok");
					deleteStudent(selectedData[0]._id);
					window.location.reload(true);
				} else {
					console.log("Denied");
					alert("Wrong Password");
				}
			} else {
				this.setState({ alert: true });
				alert("You Don't Have Autorization To Delete");
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

	render() {
		return (
			<div className="flexBox listMarginTop">
				<AppContext.Consumer>
					{({ getID }) => (
						<div className="container flex center">
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
								</Button>
							<PopupOnFocus />
							</div>
						</div>
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default StudentsList;
