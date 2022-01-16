import React from 'react';
import './header-logo.style.scss';

import logo from '../../../images/logo.svg';
import shortLogo from '../../../images/short-logo.svg';

const HeaderLogo = () => {
  return (
    <>
      <div className="header_logo">
        <img src={logo} alt="Logo" className="header_logo_long" />
        <img src={shortLogo} alt="Short Logo" className="header_logo_short" />
      </div>
    </>
  );
};

export default HeaderLogo;
