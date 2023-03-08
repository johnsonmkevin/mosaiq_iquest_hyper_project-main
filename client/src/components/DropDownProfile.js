import React from "react";
import "./dropDownProfile.css";
import dropDownArrow from "../assets/images/dropDownArrow.png";

function DropDownProfile(props) {
  return (
    <div className="dropDownListContainer">
      <ul className="dropDownList">
        <li>{props.log1}</li>
        <li>{props.log2}</li>
        <li>{props.log3}</li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
