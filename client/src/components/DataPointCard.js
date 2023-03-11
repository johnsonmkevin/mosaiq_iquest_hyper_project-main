import React from "react";
import "./dataPointCard.css";

function DataPointCard(props) {
  return (
    <div className="DataPointCardContainer">
      <button>
        <img src={props.icon} alt="add" />

        {props.bodyText}
      </button>
    </div>
  );
}

export default DataPointCard;
