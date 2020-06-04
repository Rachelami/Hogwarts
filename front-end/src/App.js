import React from "react";
import "./App.css";
import StudentsList from "./component/StudentsList";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./component/NavBar";
import StudentPage from "./component/StudentPage";
import Home from "./component/home";
import AppContext from "./AppContext";
import { getSingleStudent } from "./lib/api";
import NavBar from "./component/NavBar";
import Login from "./component/Login";
import Register from "./component/Register";
import Profile from "./component/Profile";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			infoStudent: [],
		};
	}

	handleID(studentId) {
		getSingleStudent(studentId).then((response) => {
			this.setState({ infoStudent: response.data });
		});
	}

	render() {
		return (
			<div className="App">
				<Router>
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
								<div className="container">
									<Route exact path="/register" component={Register} />
									{/* <Route exact path="/" component={Login} /> */}
									<Route exact path="/login" component={Login} />
									<Route exact path="/profile" component={Profile} />
								</div>
							<Route path="/students">
								<StudentsList />
							</Route>

							<Route path="/score">
								<Dashboard />
							</Route>
							<Route path={`/studentPage/:id`}>
								<StudentPage />
							</Route>
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
