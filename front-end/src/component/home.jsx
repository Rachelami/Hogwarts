import React from "react";
import "../css/Navbar.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="flexColumn center hogwarts">
				<img
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b4bdfc0-163c-4a6b-b800-0213094cfc2d/d665icx-cbbc58fe-5ff6-421e-bbeb-cedcfbe670e3.png/v1/fill/w_1600,h_1727,strp/hogwarts_crest_by_geijvontaen_d665icx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNzI3IiwicGF0aCI6IlwvZlwvNWI0YmRmYzAtMTYzYy00YTZiLWI4MDAtMDIxMzA5NGNmYzJkXC9kNjY1aWN4LWNiYmM1OGZlLTVmZjYtNDIxZS1iYmViLWNlZGNmYmU2NzBlMy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zpQV70EiewFGrFbsgVSNFVILPpLHHfeFq9L1CENaB2w"
					alt="hogwartsFlag"
					className="hogwartsFlag"
				/>
				<img src="https://i.imgur.com/aa3K0qq.gif" className="hogwarts-txt" alt="hogwarts" />

				<div className="main-text">school of witchcraft and wizardry</div>
			</div>
		);
	}
}

export default Home;
