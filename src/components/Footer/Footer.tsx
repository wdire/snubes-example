import React from 'react';
import './footer.style.scss';
import serviceImage from '../../images/service-logo.png';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_wrapper">
          <div className="footer_section footer_service">
            <div className="footer_service-icon">
              <img src={serviceImage} alt="Service image" />
            </div>
          </div>
          <div className="footer_section">
            <div className="footer_section_list">
              <a href="#">About us</a>
              <a href="#">Become a Partner</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="footer_section">
            <div className="footer_section_list">
              <a href="#">Imprint</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer_section">
            <div className="footer_section_list">
              <a href="#">support@snubes.com</a>
              <a href="#">+49 (0) 305 5645327</a>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
