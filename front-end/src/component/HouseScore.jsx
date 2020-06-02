import React from "react";
import { getStudentWithSkill } from "../lib/api";
import { Bar, Line, Pie } from "react-chartjs-2";

class HouseScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: [
					"flying",
					"Defense",
					"Parseltongue",
					"Astronomy",
					"Charms",
					"Herbs",
					"History",
					"Potions",
					"Transfiguration",
					"Runes",
					"Divination",
					"Muggle Knowledge",
				],
				datasets: [
					{
						label: "# of Votes",
						data: [],
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(255, 206, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(153, 102, 255, 0.2)",
							"rgba(255, 159, 64, 0.2)",
							"rgba(255, 99, 132, 0.2)",
							"rgba(54, 162, 235, 0.2)",
							"rgba(255, 206, 86, 0.2)",
							"rgba(75, 192, 192, 0.2)",
							"rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(255, 206, 86, 0.2)",

						],
						borderColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(255, 159, 64, 1)",
							"rgba(255, 99, 132, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(255, 206, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(255, 206, 86, 1)",

                            
						],
						borderWidth: 1,
					},
				],
			},
			skillsSum: [],
		};
	}

	async componentDidMount() {
		let { labels } = this.state.chartData;
		let { data } = this.state.chartData.datasets[0];

		let countSkillArray = []; //[3, 2, 1,]
		for (let i = 0; i < labels.length ; i++) {
			let countSkill = await getStudentWithSkill(labels[i]);
			console.log(labels[i]);
			console.log(countSkill.data);
			countSkillArray.push(countSkill.data);
		}
		console.log("countSkillArray");
		console.log(countSkillArray);
        let chart = this.state.chartData;
        console.log("chart")
        console.log(chart)
		chart.datasets[0].data = countSkillArray;
		this.setState({ chartData: chart });
	}

	render() {
		return (
			<div className="flex">
				<div className="as">
					dsfd
					<div>
						<img
							src={
								"https://static.wixstatic.com/media/2ded8c_97dac7475d0e4adc87b78d66496a92cd~mv2.gif"
							}
							alt="boohoo"
							className="img-responsive"
						/>
					</div>
				</div>
				<div class="chart">
					<Pie
						data={this.state.chartData}
						width={500}
						// height={50}
						// options={{ maintainAspectRatio: false }}
						options={{
							title: {
								display: true,
								text: "Skills Chart",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
							maintainAspectRatio: false,
						}}
					/>
				</div>
			</div>
		);
	}
}

export default HouseScore;
