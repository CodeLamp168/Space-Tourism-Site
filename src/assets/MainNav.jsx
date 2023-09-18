import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainNavComponent() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

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

  function handleNavOpen() {
    setNavOpen(true);
  }

  function handleNavClose() {
    setNavOpen(false);
  }

  function NavItem({ navNum, navKey, NavSite }) {
    return (
      <li className={`nav-item ${location.pathname === `/${navKey}` ? 'activeNavBtn' : ''}`}>
        <Link to={`${navKey} `}style={{ textDecoration: 'none', color: '#FFFFFF' }} >
          <span className="nav-item-num">{navNum}</span>
          {NavSite}
        </Link>
      </li>
    );
  }

  return (
    <nav className={`main-nav-component ${navOpen ? 'nav-open' : ''}`}>
      <img className="main-web-logo" src="./shared/logo.svg" alt="404" />
      <button className="nav-open-btn" onClick={handleNavOpen}>
        <img src="./shared/icon-hamburger.svg" alt="404" />
      </button>
      <div className={`nav-list-wrap ${navOpen ? 'nav-open' : ''}`}>
        <button className="nav-close-btn" onClick={handleNavClose}>
          <img src="./shared/icon-close.svg" alt="404" />
        </button>
        <ul>
          <NavItem navNum="00" navKey="/Space-Tourism-Site/" NavSite="HOME" />
          <NavItem navNum="01" navKey="/Space-Tourism-Site/Destinations" NavSite="DESTINATION" />
          <NavItem navNum="02" navKey="/Space-Tourism-Site/Crew" NavSite="CREW" />
          <NavItem navNum="03" navKey="/Space-Tourism-Site/Technology" NavSite="TECHNOLOGY" />
        </ul>
      </div>
    </nav>
  );
}
