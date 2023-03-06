import { useEffect } from "react";
import "./App.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
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
      <div className="header" >
        <h1>Mosaiq</h1></div>
        <div className="dashboardBar">
        <div><HomeIcon/> /miner/Jobs/Hi_Test_Job_Creation</div>
         <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"> <SearchSharpIcon/></i></button>
      <div> <AccountCircleSharpIcon/> HI_Miner</div>
    </form>
      </div>
        </div>
      <button onClick={sendData}>Send Data</button>
    </div>
  
  );  

}
export default App;
