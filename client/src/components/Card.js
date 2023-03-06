import React from "react";
import "./Card.css";

function Card(title, body) {
  return (
    <div className="cardContainer">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body"></div>
      <p>{body}</p>
    </div>
  );
}

export default Card;
