import React from "react";
import CardImg from "./CardImg.jsx";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <CardImg imagen={props.imagen} />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
