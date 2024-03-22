import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaEnvelope,
} from 'react-icons/fa'; // Import the necessary icons
import { Link } from 'react-scroll';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      text: 'Home',
      link: 'home',
      icon: <FaHome />,
    },
    {
      id: 2,
      text: 'Portfolio',
      link: 'portfolio',
      icon: <FaBriefcase />,
    },
    {
      id: 3,
      text: 'Contact',
      link: 'contact',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div name="navbar" className="navbar-container">
      <div className="navbar-top">
        <div>
          <h1 className="logo">dtee</h1>
        </div>
        <ul className="navbar-links hidden md:flex">
          {links.map(({ id, text, link, icon }) => (
            <li key={id}>
              <Link className="navbar-link" to={link} smooth duration={500}>
                {text} {icon}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="toggle-menu md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="mobile-menu">
            {links.map(({ id, text, link, icon }) => (
              <li key={id} className="mobile-menu-item">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
