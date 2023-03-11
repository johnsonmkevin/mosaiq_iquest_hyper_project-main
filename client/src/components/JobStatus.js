import React, { useState } from "react";
import "./jobStatus.css";
import DropDownProfile from "./DropDownProfile.js";
import DataPointCard from "../components/DataPointCard.js";

function Card(props) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="JobStatusContainer">
      <div className="jobTitle">
        <h3>Hi_test_job_Creation</h3> <img src={props.icons.penIcon} />
        <img src={props.icons.refreshIcon} />
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
            <h3>{props.backupTitle}</h3>
            <div className="downloadIcon">
              <img src={props.icons.downloadIcon} alt="download icon" />
            </div>
          </div>
        </div>
        <div
          className="dropDownMenuContainer"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          <div className="logSelector">
            Select log to download
            <img src={props.icons.dropDownArrow} alt="drop down menu"></img>
          </div>
          {openProfile && <DropDownProfile logs={props.logs} />}
        </div>
      </div>
      <div className="DataPointFlex">
        <DataPointCard
          icon={props.icons.addButton}
          bodyText="Import data points from CSV"
        />
        <DataPointCard
          icon={props.icons.importIcon}
          bodyText="Import data points from CSV"
        />
        <DataPointCard
          icon={props.icons.importIcon}
          bodyText="Import data points from CSV"
        />
        <DataPointCard
          icon={props.icons.importIcon}
          bodyText="Import data points from CSV"
        />
      </div>
    </div>
  );
}

export default Card;
