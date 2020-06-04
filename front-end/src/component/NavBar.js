import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
	logOut(e) {
		e.preventDefault();
		localStorage.removeItem("usertoken");
		this.props.history.push(`/`);
	}

	render() {
		const loginRegLink = (
			<ul className="navbar-nav flexEnd">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/register" className="nav-link">
						Register
					</Link>
				</li>
			</ul>
		);

		const userLink = (
			<div className="flex navSpace">
				<div className="flex center">
					<Link className="main-navbar" to="/">
						Home
					</Link>
					<Link className="main-navbar" to="/students">
						Students List
					</Link>
					<Link className="main-navbar" to="/score">
						Dashboard
					</Link>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/profile" className="nav-link">
							User
						</Link>
					</li>
					<li className="nav-item">
						<a href="#" onClick={this.logOut.bind(this)} className="nav-link">
							Logout
						</a>
					</li>
				</ul>
			</div>
		);

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
				<div className="navbar-collapse">
					{localStorage.usertoken ? userLink : loginRegLink}
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar);
