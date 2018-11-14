import React from "react";
import "./CharacterCard.css";

const App = props => (
  <div className="card">
    <div
      className="img-container"
      onClick={() => props.handleCharacterSel(props.id)}
    >
      <img src={props.image} alt={props.name} />
    </div>
  </div>
);

export default App;
