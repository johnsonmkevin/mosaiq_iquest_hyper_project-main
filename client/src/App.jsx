import { useEffect } from "react";
import "./App.css";
import StatusCard from "./components/StatusCard.js";
import homeIcon from "../src/assets/images/homeIcon.png";
import searchIcon from "../src/assets/images/searchIcon.png";
import userIcon from "../src/assets/images/userIcon.png";

function App() {
  // Connection String and socket
  const ws = new WebSocket("ws://localhost:8000/");

  // re render on every change
  useEffect(() => {
    ws.onopen = (res) => console.log("OPEN CONNECTION ====>", res);
    ws.onmessage = (res) =>
      console.log("MESSAGE FROM BACKEND ====>", JSON.parse(res.data));
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
      <div className="menu">
        <div className="dashboardBar">
          <div>
            <img src={homeIcon} alt="home icon" />{" "}
            /miner/Jobs/Hi_Test_Job_Creation
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
        <div className="menuWrapper">
          <ul className="MenuList">
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
        <StatusCard
          title1="On/Off"
          title2="Type"
          title3="Status"
          title4="Last reading"
          title5="Config"
          swtich="On"
          type="SMHI"
          status="Active"
          lastReading="2023-02-25 17:30:59"
        />
      </div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}
export default App;
