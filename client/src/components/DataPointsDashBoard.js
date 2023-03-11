import React from "react";
import "./dataPointsDashBoard.css";
import searchIcon from "../assets/images/searchIcon.svg";
import downloadIconAlt from "../assets/images/downloadIconAlt.svg";
function DataPointsDashBoard(props) {
  return (
    <div className="dataPointsDashBoardContainer">
      <div className="DashBoardTitleContainer">
        <div className="datapointTitleContainer">
          <h2>DataPoints</h2>
          <h3>({props.datapoints}Data Points)</h3>
        </div>
        <div className="DataPointsDashBoardsearchContainer">
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
      <div className="">
        <h3>Export CSV</h3> <img src={downloadIconAlt} />
      </div>
    </div>
  );
}

export default DataPointsDashBoard;
