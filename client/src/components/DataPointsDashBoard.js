import React from "react";
import "./dataPointsDashBoard.css";

function DataPointsDashBoard(props) {
  return (
    <div className="dataPointsDashBoardContainer">
      <div className="DatapointsContainerTemplate">
        <div className="DashBoardTitleContainerTemplate">
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
      <div className="DatapointsContainerTemplate">
        <div className="DashBoardTitleContainerTemplate" id="exportExclusive">
          <h3>Export CSV</h3> <img src={props.icons.downloadIconAlt} />
        </div>
      </div>
    </div>
  );
}

export default DataPointsDashBoard;
