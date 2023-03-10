import React, { useState } from "react";
import "./jobStatus.css";
import penIcon from "../assets/images/penIcon.svg";
import refreshIcon from "../assets/images/refreshIcon.svg";
import downloadIcon from "../assets/images/downloadIcon.svg";
import dropDownArrow from "../assets/images/dropDownArrow.svg";
import DropDownProfile from "./DropDownProfile.js";

function Card(props) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="JobStatusContainer">
      <div className="jobTitle">
        Hi_test_job_Creation <img src={penIcon} />
        <img src={refreshIcon} />
      </div>
      <div className="StatusContainer">
        <div className="InnerStatusContainer">
          <div className="typeContainer">
            <h3>{props.switchTitle}</h3>
            <div className="switch">{props.swtich}</div>
          </div>
          <div className="typeContainer">
            <h3>{props.typeTtitle}</h3>
            <div className="type">{props.type}</div>
          </div>
          <div className="typeContainer">
            <h3>{props.statusTitle}</h3>
            <div className="status">{props.status}</div>
          </div>
          <div className="typeContainer">
            <h3>{props.lastReadingTitle}</h3>
            <div className="lastReading">{props.lastReading}</div>
          </div>
          <div className="typeContainer">
            <h3>{props.configTitle}</h3>
            <div className="downloadIcon">
              <img src={downloadIcon} alt="download icon" />
            </div>
          </div>
        </div>
        <div
          className="dropDownMenuContainer"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          <div className="logSelector">
            Select log to download
            <img src={dropDownArrow} alt="drop down menu"></img>
          </div>
          {openProfile && (
            <DropDownProfile log1="log1" log2="log2" log3="log3" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
