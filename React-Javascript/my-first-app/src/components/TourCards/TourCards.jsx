import React, { useState } from "react";
import cardImg1 from '../../assets/img/card_1.jpg';
import cardImg2 from '../../assets/img/card_2.jpg';
import cardImg3 from '../../assets/img/card_3.jpg';
import cardImg4 from '../../assets/img/card_4.jpg';
import TourHeading from "./TourHeading";
import TourCard from "./TourCard";


const TourCards = () => {

    let [cards, setCards] = useState([
        {
            id: 1,
            title: "Paris",
            image: cardImg1
        },
        {
            id: 2,
            title: "Bangkok",
            image: cardImg2
        },
        {
            id: 3,
            title: "Srilanka",
            image: cardImg3
        },
        {
            id: 4,
            title: "Switzerland",
            image: cardImg4
        }
    ]);
  return (
    <>
      <TourHeading heading={"Nicky Holiday Tours"} textColor={"text-success"}/>
      <div className="container mt-3 mb-3">
        <div className="row">
            {
                cards.map((cards, index) => {
                    return(
                            <TourCard key={cards.id} image={cards.image} title={cards.title}/>
                            
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default TourCards;
