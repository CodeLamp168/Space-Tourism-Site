import React, { useState, useEffect } from 'react';
export default function MainNavComponent({ activePage, setActivePage }) {
    const [navOpen, setNavOpen] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth <= 640) {
          setNavOpen(false);
        }
      }
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
  
    function NavItem({ navNum, navKey, NavSite }) {
      const handleClick = () => {
        setActivePage(navKey);
        handleNavClose();
      };

      return (
        <li onClick={handleClick}>
          <span className="nav-item-num">{navNum}</span>
          <a className="nav-item">
            {NavSite}
          </a>
        </li>
      );
    }
  
    function handleNavOpen() {
      setNavOpen(true);
    }
  
    function handleNavClose() {
      setNavOpen(false);
    }
  
    return (
      <nav className="main-nav-component">
        <img className="main-web-logo" src="./shared/logo.svg" alt="404" />
        <button className="nav-open-btn" onClick={handleNavOpen}>
          <img src="./shared/icon-hamburger.svg" alt="404" />
        </button>
        <div className={`nav-list-wrap ${navOpen ? 'nav-open' : ''}`}>
          <button className="nav-close-btn" onClick={handleNavClose}>
            <img src="./shared/icon-close.svg" alt="404" />
          </button>
          <ul>
            <NavItem navNum="00" navKey="home" NavSite="HOME" />
            <NavItem navNum="01" navKey="destinations" NavSite="DESTINATION" />
            <NavItem navNum="02" navKey="crew" NavSite="CREW" />
            <NavItem navNum="03" navKey="tech" NavSite="TECHNOLOGY" />
          </ul>
        </div>
      </nav>
    );
  }