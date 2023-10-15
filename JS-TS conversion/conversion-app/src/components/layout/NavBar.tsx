import React from 'react';

interface Iprops {
    heading : string;
}

const NavBar:React.FC<Iprops> = (props) => {


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <a className="navbar-brand" href="/">
                <h3 className='card-title text-white m-2'>{props.heading}</h3>
            </a>
        </nav>
        </>
    )
};

export default NavBar;