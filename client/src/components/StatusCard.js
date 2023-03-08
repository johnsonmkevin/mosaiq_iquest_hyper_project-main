import React, { useState } from "react";
import "./StatusCard.css";
import downloadIcon from "../assets/images/downloadIcon.png";
import dropDownArrow from "../assets/images/dropDownArrow.png";
import DropDownProfile from "./DropDownProfile.js";

function Card(props) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="cardContainer">
      <div className="titleContainer">
        <div className="typeContainer">
          <div className="card-title">
            <h3>{props.title1}</h3>
            <div className="switch">{props.swtich}</div>
          </div>
        </div>
        <div className="typeContainer">
          <div className="card-title">
            <h3>{props.title2}</h3>
            <div className="type">{props.type}</div>
          </div>
        </div>
        <div className="typeContainer">
          <div className="card-title">
            <h3>{props.title3}</h3>
            <div className="status">{props.status}</div>
          </div>
        </div>
        <div className="typeContainer">
          <div className="card-title">
            <h3>{props.title4}</h3>
            <div className="lastReading">{props.lastReading}</div>
          </div>
        </div>
        <div className="typeContainer">
          <div className="card-title">
            <h3>{props.title5}</h3>
            <div>
              <img src={downloadIcon} alt="download icon" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropDownMenuContainer"
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        Select log to download
        <img src={dropDownArrow} alt="drop down menu"></img>
        {openProfile && <DropDownProfile log1="log1" log2="log2" log3="log3" />}
      </div>
    </div>
  );
}

export default Card;
