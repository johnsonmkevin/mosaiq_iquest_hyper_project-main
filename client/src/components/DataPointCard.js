import React from "react";
import addButton from "../assets/images/addButton.svg";
import "./dataPointCard.css";

function DataPointCard(props) {
  return (
    <div className="DataPointCardContainer">
      <button>
        <img src={addButton} alt="add"></img>

        {props.bodyText}
      </button>
    </div>
  );
}

export default DataPointCard;
