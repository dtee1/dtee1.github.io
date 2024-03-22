import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} dtee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
