import React from 'react';

interface imgProps {
    src : string;
}

const TourImg:React.FC<imgProps> = (props) => {
    return (
        <>
            <img src={props.src} alt="" />    
        </>
    )
};

export default TourImg;