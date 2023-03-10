import React from "react";
import "./dropDownProfile.css";

function DropDownProfile(props) {
  return (
    <div className="dropDownListContainer">
      <ul className="dropDownList">
        <li>{props.logs.log1}</li>
        <li>{props.logs.log2}</li>
        <li>{props.logs.log3}</li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
