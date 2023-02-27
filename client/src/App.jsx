import { useEffect } from "react";
import "./App.css";

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
      <div className="">HELLO TEAM LETS HAVE FUN</div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}

export default App;
