import React from 'react';
import '../components/MyCard.css';

const MyCard = (props) => {

    const printCaps = (str) => {
        return str.toUpperCase();
    };

    return (
        <>
            <div className={`card card-body m-3 shadow-lg ${props.bgColor}`}>
                <h1>{printCaps(props.heading)}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus illum vel laudantium aut at iure id consequuntur magni ullam eaque quasi quae consequatur dolor odio pariatur eos inventore, delectus ea? Vero tempora possimus ipsa animi ad quidem doloribus culpa quibusdam excepturi quisquam odio, laudantium deleniti voluptate numquam cupiditate debitis veritatis sit alias recusandae. Fuga cupiditate ducimus animi libero amet.</p>
            </div>
        </>
    )
};

export default MyCard;