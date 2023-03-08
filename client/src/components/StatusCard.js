import React from "react";
import "./StatusCard.css";
import downloadIcon from "../assets/images/downloadIcon.png";

function Card({
  title1,
  title2,
  title3,
  title4,
  title5,
  swtich,
  type,
  status,
  lastReading,
}) {
  return (
    <div className="cardContainer">
      <div className="titleContainer">
        <div className="card-title">
          <h3>{title1}</h3>
          <div className="switch">{swtich}</div>
        </div>
      </div>
      <div className="titleContainer">
        <div className="card-title">
          <h3>{title2}</h3>
          <div className="type">{type}</div>
        </div>
      </div>
      <div className="titleContainer">
        <div className="card-title">
          <h3>{title3}</h3>
          <div className="status">{status}</div>
        </div>
      </div>
      <div className="titleContainer">
        <div className="card-title">
          <h3>{title4}</h3>
          <div className="lastReading">{lastReading}</div>
        </div>
      </div>
      <div className="titleContainer">
        <div className="card-title">
          <h3>{title5}</h3>
          <div>
            <img src={downloadIcon} alt="download icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
