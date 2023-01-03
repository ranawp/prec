import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className='nav_container'>
            <div>Logo</div>
            <div>
                <ul className='nav_items' id={showLinks ? "hidden" : ""}>
                    <li> Home </li>
                    <li> About </li>
                    <li> Login </li>
                    <li> products </li>
                    <li> logout </li>

                </ul>
                <button className="mobile-nav-btn " onClick={() => setShowLinks(!showLinks)}><i class="fa-solid fa-bars"></i></button>

            </div>
        </div>
    );
};

export default Navbar;