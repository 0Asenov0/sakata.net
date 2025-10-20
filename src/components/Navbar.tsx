import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container navbar-container">
        <a href="#home" className="logo">
         Portfolio
        </a>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} data-testid="nav-links">
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#links" className="nav-link" onClick={closeMenu}>
              Links
            </a>
          </li>
        </ul>
        <div className="hamburger"  data-testid="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
