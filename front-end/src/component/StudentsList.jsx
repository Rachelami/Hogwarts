import React from "react";
import { getAllStudents, deleteStudent } from "../lib/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../css/StudentsList.css";
import Popup from "reactjs-popup";
import PopupOnFocus from "./newStudent";
import { Button } from "react-bootstrap";

class StudentsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
					sortable: true,
				},
				{
					headerName: "Last name",
					field: "last_name",
					width: 120,
					sortable: true,
				},
				{
					headerName: "House",
					field: "house",
					width: 120,
					sortable: true,
				},
				{
					headerName: "Current Skills",
					field: "current_magic_skills",
					width: 120,
					sortable: true,
				},
				{
					headerName: "Desired Skills",
					field: "want_skills",
					width: 120,
					sortable: true,
				},
				{
					headerName: "Course Interests",
					field: "course_interests",
					width: 160,
					sortable: true,
				},
				{
					headerName: "Create Date",
					field: "create_date",
					width: 120,
					sortable: true,
				},
				{
					headerName: "Last Update",
					field: "last_update_time",
					sortable: true,
				},
				{
					headerName: "ID",
					field: "_id",
					sortable: true,
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

	// function autoSizeAll(skipHeader) {
	//     var allColumnIds = [];
	//     gridOptions.columnApi.getAllColumns().forEach(function(column) {
	//       allColumnIds.push(column.colId);
	//     });

	//     gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
	//   }
	// function popForm(){

	// }

	onButtonClick = (e) => {
		const selectedNodes = this.gridApi.getSelectedNodes();
		const selectedData = selectedNodes.map((node) => node.data);
		if (selectedData[0] !== undefined) {
			deleteStudent(selectedData[0]._id);
		}
	};

	render() {
		// console.log(this.state.rowData);
		return (
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
			<div
				className="ag-theme-alpine"
				// style={{
				// height: "500px",
				// width: "60%",
				// }}
			>

				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
					onGridReady={(params) => (this.gridApi = params.api)}
				></AgGridReact>
				<PopupOnFocus />
				<Button
					variant="primary"
					className="deleteBtn"
					onClick={this.onButtonClick}
				>
					Delete
				</Button>
				<span className="deleteText">
					please select the user you want to delete
				</span>
			</div></div>
		);
	}
}

export default StudentsList;
