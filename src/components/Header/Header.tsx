import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderLogo from './HeaderLogo';

import './header.style.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_wrapper">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </>
  );
};

export default Header;
