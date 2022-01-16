import React from 'react';

import './features.style.scss';

import signUpFree from '../../images/icon/sign-up-icon.svg';
import sourceSmarter from '../../images/icon/source-icon.svg';
import receiveOffer from '../../images/icon/receive-offers-icon.svg';

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features_wrapper">
          <div className="features_item">
            <div className="features_item_icon">
              <img src={signUpFree} alt="Sign up for free" />
            </div>
            <div className="features_item_details">
              <div className="features_item_head">Sign up for free</div>
              <div className="features_item_sub">
                Signing up and setting up your project takes less than 5 minutes
              </div>
            </div>
          </div>
          <div className="features_item">
            <div className="features_item_icon">
              <img src={sourceSmarter} alt="Source smarter" />
            </div>
            <div className="features_item_details">
              <div className="features_item_head">Source smarter</div>
              <div className="features_item_sub">
                Our data-based AI and our experts will help you find exactly
                what you are looking for
              </div>
            </div>
          </div>
          <div className="features_item">
            <div className="features_item_icon">
              <img src={receiveOffer} alt="Receive offers" />
            </div>
            <div className="features_item_details">
              <div className="features_item_head">Receive offers</div>
              <div className="features_item_sub">
                With our insights you always receive high-quality proposals at
                the best price
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
