import React from "react";
import { getAllStudents } from "../lib/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class StudentsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// we need to write here - first name, last name, skills...
			columnDefs: [
				{
					headerName: "First name",
					field: "first_name",
					sortable: true,
				},
				{
					headerName: "Last name",
					field: "last_name",
					sortable: true,
				},
				{
					headerName: "House",
					field: "house",
					sortable: true,
				},
				{
					headerName: "Current Skills",
					field: "current_magic_skills",
					sortable: true,
				},
				{
					headerName: "Desired Skills",
					field: "want_skills",
					sortable: true,
				},
				{
					headerName: "Course Interests",
					field: "course_interests",
					sortable: true,
				},
				{
					headerName: "Create Date",
					field: "create_date",
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

	render() {
		console.log(this.state.rowData);
		return (
			<div
				className="ag-theme-alpine"
				style={{
					height: "500px",
					width: "1000px",
				}}
			>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
				></AgGridReact>
			</div>
		);
	}
}

export default StudentsList;

