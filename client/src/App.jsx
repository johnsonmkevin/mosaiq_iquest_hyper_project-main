import { useEffect } from "react";
import "./App.css";
import JobStatus from "./components/JobStatus.js";
import icons from "../src/assets/images/index.js";

import DataPointsDashBoard from "./components/DataPointsDashBoard.js";

function App() {
  // Connection String and socket
  const ws = new WebSocket("ws://localhost:8000/");

  const logs = { log1: "log1", log2: "log2", log3: "log3" };
  const dataPoints = [
    "datapoint1",
    "datapoint2",
    "datapoint3",
    "datapoint4",
    "datapoint5",
    "datapoint6",
    "datapoint7",
    "datapoint8",
    "datapoint9",
  ];

  // re render on every change
  useEffect(() => {
    ws.onopen = (res) => console.log("OPEN CONNECTION ====>", res);
    ws.onmessage = (res) => {
      console.log("MESSAGE FROM BACKEND ====>", JSON.parse(res.data));
    };

    // hacky function, going to ask petter about it
    setTimeout(() => {
      sendData();
    }, 1000);
  }, []);

  // sends expected data that we want to receive
  const sendData = () => {
    ws.send(
      JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>mosaiq</h1>
      </div>
      <div className="menuContainer">
        <div className="MenuTop">
          <div className="minerTitleContainer">
            <img src={icons.homeIcon} alt="home icon" />{" "}
            <h3>/miner/Jobs/Hi_Test_Job_Creation</h3>
          </div>
          <div className="searchContainer">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i className="fafa-search">
                  <img src={icons.searchIcon} alt="search icon" />
                </i>
              </button>
            </form>
            <img src={icons.userIcon} alt="user icon" /> <h3>HI_Miner</h3>
          </div>
        </div>
        <div className="menuNav">
          <ul className="MenuList">
            <li className="navItem" id="NavHome">
              <a href="">Home</a>
            </li>
            <li className="navItem" id="NavConnections">
              <a href="">Connections</a>
            </li>
            <li className="navItem" id="NavJobs">
              <a href="">Jobs</a>
            </li>
            <li className="navItem" id="NavAlerts">
              <a href="">Alerts</a>
            </li>
            <li className="navItem" id="NavHelpCenter">
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
          backupTitle="Backup"
          swtich="On"
          type="SMHI"
          status="Active"
          lastReading="2023-02-25 17:30:59"
          logs={logs}
          icons={icons}
        />
      </div>
      <DataPointsDashBoard icons={icons} datapoints={dataPoints.length} />
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}
export default App;
