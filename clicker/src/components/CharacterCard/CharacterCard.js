import React from "react";
import "./CharacterCard.css";


const CharacterCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />

    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name: {props.name}</strong>
        </li>
        <li>
          <strong>Occupation: {props.occupation}</strong>
        </li>
        <li>
          <strong>Location: {props.location}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default CharacterCard;
