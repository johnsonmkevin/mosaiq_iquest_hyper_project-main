import * as React from "react";

const ws = new WebSocket("ws://localhost:8000/");
ws.onopen = (res) => console.log("OPEN CONNECTION ====>", res);

function DataPointList() {
	ws.onmessage = (res) => {
		const data = JSON.parse(res.data);
		console.log("MESSAGE FROM BACKEND ====>", data);
		if (data.action === "RUN_EXPLORER_SUCCESS") {
			console.log("yea");
			setDataPoints(data.payload.dataPoints);
		}
	};
	const [dataPoints, setDataPoints] = React.useState();

	React.useEffect(() => {
		console.log("check1");

		ws.send(JSON.stringify({ job: { type: "se.iquest.iqmine.poller.SMHIPoller" }, action: "RUN_EXPLORER" }));
	}, []);
	if (!dataPoints) return null;

	return (
		<div>
			<h1>List</h1>
			{dataPoints.map((data) => {
				return <div>{data.dataPoint.name}</div>;
			})}
		</div>
	);
}

export default DataPointList;
