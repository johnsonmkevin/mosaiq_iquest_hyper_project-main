import React, { useState } from "react";
import "./dataPointsDashBoard.css";
import DropDownProfile from "./DropDownProfile.js";

function DataPointsDashBoard(props) {
  const [openProfile, setOpenProfile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="dataPointsDashBoardContainer">
      <div className="datapointsContainerTemplate">
        <div className="dashBoardTitleContainerTemplate">
          <h2>DataPoints</h2>
          <h3>({props.datapoints}Data Points)</h3>
        </div>
        <div className="dataPointsDashBoardsearchContainer">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fafa-search">
                <img src={props.icons.searchIcon} alt="search icon" />
              </i>
            </button>
          </form>
        </div>
      </div>
      <div className="datapointsContainerTemplate">
        <div className="dashBoardTitleContainerTemplate" id="exportExclusive">
          <h3>Export CSV</h3> <img src={props.icons.downloadIconAlt} />
        </div>
        <div className="dashBoardTitleContainerTemplate" id="sortExclusive">
          <img src={props.icons.filterIcon}></img>{" "}
          <div
            className="sortContainer"
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <div className="sortSelector">
              sort by
              <img src={props.icons.dropDownArrow} alt="drop down menu"></img>
            </div>
            {openProfile && (
              <DropDownProfile width="105" padding="15" logs={props.logs} />
            )}
          </div>
        </div>
      </div>
      <div className="DynamicCardContainer">
        <div className="checkboxContainer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
        </div>
        <div className="SelectorContainertemplate">
          <h3>Select all</h3>
          <img src={props.icons.trashIcon} id="trashcanIcon" />
        </div>
      </div>
    </div>
  );
}

export default DataPointsDashBoard;
