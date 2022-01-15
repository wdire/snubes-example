import React from 'react';
import './header-logo.style.scss';

import logo from '../../../images/logo.svg';

const HeaderLogo = () => {
  return (
    <>
      <div className="header_logo">
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
};

export default HeaderLogo;
