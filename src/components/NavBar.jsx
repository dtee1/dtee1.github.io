import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
 
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 3,
            link: 'contact'
        },
    ];

    return (
        <div name="navbar" className="navbar-container">
            <div className="navbar-top">
                <div>
                    <h1 className="logo">dtee</h1>
                </div>
                <ul className="navbar-links hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li key={id} className="navbar-link">
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                <div onClick={() => setNav(!nav)} className="toggle-menu md:hidden">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className="mobile-menu">
                        {links.map(({ id, link }) => (
                            <li key={id} className="mobile-menu-item">
                                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}

export default NavBar;
