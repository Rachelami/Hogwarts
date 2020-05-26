import React from "react";
import "./App.css";
import StudentsList from "./component/StudentsList";
// import { getAllStudents } from "./lib/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./component/Navbar";



class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			loading: false,
		};
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
          {/* <Navbar /> */}
						<Route path="/students">
							<StudentsList />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
