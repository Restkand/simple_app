import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    const handleClick = () => {
      nav.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      hamburger.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className="header sticky top-0">
      <nav className="nav">
      <div className="logo">
        <Link to="/">DOKI</Link>
      </div>
      </nav>
      <nav className="nav">
        <nav className="nav_right">
        <Link to="/services">SERVICES</Link>
        <Link to="/works">WORKS</Link>
        <Link to="/stories">STORIES</Link>
        <Link to="/culture">CULTURE</Link>
        <Link to="/career">CAREER</Link>
        <Link to="/contact">CONTACT</Link>
        </nav>
      </nav>
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Navbar;
