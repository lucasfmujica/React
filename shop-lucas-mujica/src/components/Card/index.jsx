import React from "react";
import "./card.css";

const Card = ({ title, img, paragraph }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="container-img">
        <img src={img} alt="imagen" />
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
