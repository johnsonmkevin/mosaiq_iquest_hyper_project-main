import { useEffect } from "react";
import "./App.css";
import Card from "../src/components/Card.js";
import HomeIcon from "@mui/icons-material/Home";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

function App() {
	// Connection String and socket
	const ws = new WebSocket("ws://localhost:8000/");

	// re render on every change
	useEffect(() => {
		ws.onopen = (res) => console.log("OPEN CONNECTION ====>", res);
		ws.onmessage = (res) => console.log("MESSAGE FROM BACKEND ====>", JSON.parse(res.data));
	}, []);

	// sends expected data that we want to receive
	const sendData = () => {
		ws.send(JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" }));
	};

	return (
		<div className="App">
			<div className="header">
				<h1>mosaiq</h1>
			</div>
			<div className="menu">
				<div className="dashboardBar">
					<div>
						<HomeIcon /> /miner/Jobs/Hi_Test_Job_Creation
					</div>
					<div className="searchContainer">
						<form action="/action_page.php">
							<input type="text" placeholder="Search.." name="search" />
							<button type="submit">
								<i className="fafa-search">
									<SearchSharpIcon />
								</i>
							</button>
						</form>
						<div>
							<AccountCircleSharpIcon /> HI_Miner
						</div>
					</div>
				</div>
				<div className="menuWrapper">
					<ul>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Connections</a>
						</li>
						<li>
							<a href="">Jobs</a>
						</li>
						<li>
							<a href="">Alerts</a>
						</li>
						<li>
							<a href="">Help Center</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="dashboard">
				<Card
					title="cardTitle"
					body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
				/>
			</div>
			<button onClick={sendData}>Send Data</button>
		</div>
	);
}
export default App;
