import React from "react";
import "./App.css";
import StudentsList from "./component/StudentsList";
import HouseScore from "./component/HouseScore";
// import { getAllStudents } from "./lib/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import StudentPage from "./component/StudentPage";
import AppContext from "./AppContext";
import { getSingleStudent } from "./lib/api";


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// studentID: "",
			infoStudent: []
		};
	}



	handleID(studentId) {
		console.log("studentId");
		console.log(studentId);
		// const { studentID } = this.state;
		// this.setState({ loading: true });
		getSingleStudent(studentId).then((response)=>{
			this.setState({infoStudent: response.data})
		})
	}

	render() {
		console.log(this.state.infoStudent._id);
		return (
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<AppContext.Provider
							value={{
								studentId: this.state.studentID,
								infoStudent: this.state.infoStudent,
								getID: (studentId) => {
									this.handleID(studentId);

								},
							}}
						>
							<Route path="/students">
								<StudentsList />
							</Route>

							<Route path="/score">
								<HouseScore />
							</Route>
							<Route path={`/studentPage/:id`}>
							{/* <Route path={`/studentPage/id=${this.state.infoStudent._id}`}> */}
							{/* <Route path={`/studentPage/id=${this.state.infoStudent._id}`}> */}
								<StudentPage />
							</Route>
						</AppContext.Provider>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

//I get a bat request from my axios when I try to  add a new student

// refresh the page after deleteStudent
