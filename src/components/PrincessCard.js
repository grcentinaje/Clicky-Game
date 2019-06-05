import React from "react";
import "../styles/PrincessCard.css";

function PrincessCard(props) {
  return (
    <div className="img-container" onClick={() => props.isClicked()}>
      <img src={props.image} alt={props.id} />
    </div>
  );
}

export default PrincessCard;
