import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import "../css/Logs.css";
import NavBar from "./NavBar"



class Profile extends Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			goToPage: true,

		};
	}

	componentDidMount() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			first_name: decoded.identity.first_name,
			last_name: decoded.identity.last_name,
			email: decoded.identity.email,
		});
		// this.setState({goToPage: false})
	}

	render() {
		return (
			<div className="container">
			{/* {this.state.goToPage && <NavBar/>} */}
				<div className="jumbotron mt-5">
					<div className="col-sm-8 mx-auto">
						<h1 className="text-center">Profile</h1>
					</div>
					<table className="table col-md-6 mx-auto">
						<tbody>
							<tr>
								<td className="tdWidth">First Name</td>
								<td>{this.state.first_name}</td>
							</tr>
							<tr>
								<td>Last Name</td>
								<td>{this.state.last_name}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{this.state.email}</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		);
	}
}

export default Profile;
