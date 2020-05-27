import React from "react";
import { getAllStudents, deleteStudent, getSingleStudent } from "../lib/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../css/StudentsList.css";
import Popup from "reactjs-popup";
import PopupOnFocus from "./newStudent";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

class StudentsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acciStudent: false,
			idRoute: "",
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
					// cellStyle: { width: "20px"},
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
	}

	onButtonClick = (e) => {
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			deleteStudent(selectedData[0]._id);
		}
	};

	onAccioClick = (event, callback) => {
		event.preventDefault();
		// console.log(callback)
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			console.log("dsfds")
			console.log(selectedData[0]._id)

			// getSingleStudent(selectedData[0]._id);
			// this.setState({ idRoute: selectedData[0]._id });
			this.setState({ acciStudent: true });
			callback(selectedData[0]._id)
			// "/studentPage"
		}
	};

	render() {
		// console.log(this.state.rowData);
		return (
			<div className="flexBox">
				<AppContext.Consumer>
					{(
						{ getID } //what to do now
					) => (
						<div className="flexBox">
							<div>
								<img
									src={
										"https://lh3.googleusercontent.com/proxy/JGGmgQC-q4pj6lD6eOeo34AbDuhMmbCGVsELBa2l4nhTGzNU3awZ4YiVyeQFW-oQ5yd5MxAqFFkHbAwNTxYOj5e2g1qd8fH7mZlbUFds22IkC595GP1718z7IOYD"
									}
									alt="boohoo"
									className="goldenSnitch"
								/>
							</div>
							<div className="ag-theme-alpine">
								<PopupOnFocus />
								<AgGridReact
									columnDefs={this.state.columnDefs}
									rowData={this.state.rowData}
									onGridReady={(params) => (this.gridApi = params.api)}
								></AgGridReact>
								<Button
									variant="primary"
									className="goTOpage"
									onClick={(event) => this.onAccioClick(event, getID) }
									// onSubmit={(event) => this.handleSubmit(event, onTweetPost)}
								>
									{this.state.acciStudent === true && (
										<Redirect to={"/studentPage"} />
									)}
									Accio Student
								</Button>
								<Button
									variant="primary"
									className="deleteBtn"
									onClick={this.onButtonClick}
								>
									Avada Kedavra
								</Button>
								<span className="deleteText">
									please select the user you want to delete
								</span>
							</div>
						</div>
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default StudentsList;
