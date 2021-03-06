import React, { Component } from "react";
import { login } from "../lib/api";
import "../css/Logs.css";
import NavBar from "./NavBar";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		console.log(user);
		login(user).then((res) => {
			if (res === undefined) {
				alert("User Dosent Exist");
			} else if (!res.error) {
				this.props.history.push(`/profile`);
				console.log("ddfgfhfhf");
				this.setState({ goToPage: true });
			}
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row white">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
							<div className="form-group">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="Enter Email"
									value={this.state.email}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password </label>
								<input
									type="password"
									className="form-control"
									name="password"
									placeholder="Enter Password"
									value={this.state.password}
									onChange={this.onChange}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-lg btn-primary btn-block"
							>
								Sign In
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
