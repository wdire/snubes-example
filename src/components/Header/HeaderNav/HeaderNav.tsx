import React from 'react';
import './header-nav.style.scss';

const HeaderNav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_link">
          <a href="#">About Us</a>
        </div>
        <div className="nav_link">
          <a href="#">How it works</a>
        </div>
        <div className="nav_link">
          <a href="#">Become a Partner</a>
        </div>
        <div className="nav_link">
          <a href="#">EUR</a>
          <div className="nav_link_arrow-icon"></div>
        </div>
        <div className="nav_link">
          <a href="#">EN</a>
          <div className="nav_link_arrow-icon"></div>
        </div>
        <div className="nav_link">
          <a href="#">Sign In</a>
        </div>
        <div className="nav_link">
          <a href="#">Get Access</a>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
