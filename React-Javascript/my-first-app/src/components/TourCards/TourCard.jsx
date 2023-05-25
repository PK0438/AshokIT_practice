import React from "react";
import TourImg from "./TourImg";

const TourCard = (props) => {
  return (
    <>
      <div className="col-sm-3 mt-3">
        <div className="card bg-light">
          <TourImg src={props.image}/>
          <div className="card-body">
            <p className="h4">{props.title}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              est facilis quis. Nulla quasi maxime nisi quisquam. Voluptates
              nobis dolorum illum, alias sapiente voluptas dolorem! Nesciunt
              reiciendis saepe, magnam perspiciatis repellendus veritatis enim
              error numquam quisquam molestiae? Iure, debitis minima?
            </p>
            <button className="btn btn-success">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
