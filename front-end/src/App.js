import React from "react";
import "./App.css";
import StudentsList from "./component/StudentsList";
import Dashboard from "./component/Dashboard";
// import { getAllStudents } from "./lib/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar";
import StudentPage from "./component/StudentPage";
import Home from "./component/home";
import AppContext from "./AppContext";
import { getSingleStudent } from "./lib/api";

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from "./component/NavBar";
// import Landing from './components/Landing'
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from "./component/Profile";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// studentID: "",
			infoStudent: [],
		};
	}

	handleID(studentId) {
		console.log("studentId");
		console.log(studentId);
		// const { studentID } = this.state;
		// this.setState({ loading: true });
		getSingleStudent(studentId).then((response) => {
			this.setState({ infoStudent: response.data });
		});
	}

	render() {
		// console.log(this.state.infoStudent._id);
		return (
			<div className="App">
				<Router>
					{/* <Navbar /> */}
					<NavBar />

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
								<Dashboard />
							</Route>
							<Route path={`/studentPage/:id`}>
								{/* <Route path={`/studentPage/id=${this.state.infoStudent._id}`}> */}
								{/* <Route path={`/studentPage/id=${this.state.infoStudent._id}`}> */}
								<StudentPage />
							</Route>

							{/* <div className="App"> */}
								{/* <Route exact path="/" component={Landing} /> */}
								<div className="container">
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/profile" component={Profile} />
								</div>
							{/* </div> */}
							<Route path="/">
								<Home />
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
