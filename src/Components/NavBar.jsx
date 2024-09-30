import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const NavBar = () => {
    return(
        <div className="navContainer">
            <ul className="navBar">
                <li className="navItem">Home</li>
                <li className="navItem">About</li>
                <li className="navItem">Contact</li>
                <li className="navItem">Carrier</li>
            </ul>
        </div>
    )
}

export default NavBar;