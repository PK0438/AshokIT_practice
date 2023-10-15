import React from "react";

interface headingProps {
  textColor : string;
  heading : string;
};

const TourHeading:React.FC<headingProps> = (props) => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h4 className={`card-title ${props.textColor}`}>{props.heading}</h4>
            <p className="m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque quod sint nisi assumenda alias aperiam sapiente,
              inventore nam similique omnis, eius tempora libero id ad, quis
              quia explicabo. Quia facere odio maxime natus quam optio placeat
              labore non dolore exercitationem. Asperiores repellat ex deleniti
              hic distinctio suscipit harum, sit quae nam. Impedit dolorum quo
              omnis sint deserunt vitae consectetur pariatur.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourHeading;