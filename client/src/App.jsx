import { useEffect } from "react";
import "./App.css";
import JobStatus from "./components/JobStatus.js";
import homeIcon from "../src/assets/images/homeIcon.png";
import searchIcon from "../src/assets/images/searchIcon.png";
import userIcon from "../src/assets/images/userIcon.png";
import DataPointList from "./components/DataPointList";

function App() {
	// Connection String and socket
	const ws = new WebSocket("ws://localhost:8000/");
	ws.onopen = (res) => console.log("OPEN CONNECTION ====>", res);
	ws.onmessage = (res) => console.log("MESSAGE FROM BACKEND ====>", JSON.parse(res.data));
	// re render on every change
	useEffect(() => {
		console.log("Once")
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
			<div className="menuContainer">
				<div className="MenuTop">
					<div>
						<img src={homeIcon} alt="home icon" /> /miner/Jobs/Hi_Test_Job_Creation
					</div>
					<div className="searchContainer">
						<form action="/action_page.php">
							<input type="text" placeholder="Search.." name="search" />
							<button type="submit">
								<i className="fafa-search">
									<img src={searchIcon} alt="search icon" />
								</i>
							</button>
						</form>
						<img src={userIcon} alt="user icon" /> HI_Miner
					</div>
				</div>
				<div className="menuNav">
					<ul className="MenuList">
						<li className="navItem">
							<a href="">Home</a>
						</li>
						<li className="navItem">
							<a href="">Connections</a>
						</li>
						<li className="navItem">
							<a href="">Jobs</a>
						</li>
						<li className="navItem">
							<a href="">Alerts</a>
						</li>
						<li className="navItem">
							<a href="">Help Center</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="dashboardContainer">
				<JobStatus
					switchTitle="On/Off"
					typeTtitle="Type"
					statusTitle="Status"
					lastReadingTitle="Last reading"
					configTitle="Config"
					swtich="On"
					type="SMHI"
					status="Active"
					lastReading="2023-02-25 17:30:59"
				/>
			</div>
			<div className="buttonWithIcon">
				<button>Item 1</button>
				<button>Item 2</button>
				<button>Item 3</button>
				<button>Item 4</button>
				<button onClick={sendData}>Send Data</button>
			</div>
			<div className="dataPointHeader">
				<h1>Data Points</h1>
				<DataPointList />
				<div className="searchContainerData">
					<form action="/action_page.php">
						<input type="text" placeholder="Search.." name="search" />
						<button type="submit">
							<i className="fafa-search">
								<img src={searchIcon} alt="search icon" />
							</i>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
export default App;
