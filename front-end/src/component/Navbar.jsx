import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {students
	return (
		<div className="nav-back flex">
			<Link className="navbar" to="/students">
			Students List
			</Link>
			<Link className="navbar" to="/profile">
				Profile
			</Link>
		</div>
	);
};

export default Navbar;
