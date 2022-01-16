import React from 'react';

import './reviews.style.scss';

import companyTalixoBlack from '../../images/company/talixo-black-icon.png';
import companyTalixo from '../../images/company/talixo.png';
import companyAllianz from '../../images/company/allianz-icon.png';
import companyCreditShelf from '../../images/company/credit-shelf-icon.png';
import companyLaserhub from '../../images/company/laserhub-icon.png';
import companyUserCentrics from '../../images/company/usercentrics-icon.png';

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="reviews_wrapper">
          <div className="reviews_items_wrapper">
            <div className="reviews_items">
              <div className="reviews_item">
                <div className="reviews_item_icon">
                  <img src={companyTalixoBlack} alt="Talixo" />
                </div>
                <div className="reviews_item_desc_wrapper">
                  <div className="reviews_item_desc">
                    “Finding a suitable outsourcing service provider through
                    Snubes was very easy and our personal consultant helped us
                    every step of the way. After a short time we had good offers
                    on the table. An on-site visit confirmed the positive
                    impression and we have now found a matching partner. Thank
                    you for your great support, which has helped us a lot in the
                    selection process.”
                  </div>
                  <div className="reviews_arrow right-circle"></div>
                  <div className="reviews_arrow left-circle"></div>
                </div>
                <div className="reviews_item_owner">
                  <b>Jan Brenneke,</b> VP Operations
                </div>
              </div>
            </div>
          </div>
          <div className="reviews_pagination">
            <div className="reviews_pagination_wrapper">
              <div className="reviews_pagination_item active"></div>
              <div className="reviews_pagination_item"></div>
              <div className="reviews_pagination_item"></div>
            </div>
            <div className="reviews_arrow right-light"></div>
            <div className="reviews_arrow left-light"></div>
          </div>
          <div className="reviews_companies">
            <div className="reviews_companies_item">
              <img src={companyAllianz} alt="Allianz" />
            </div>
            <div className="reviews_companies_item">
              <img src={companyCreditShelf} alt="Credit Shelf" />
            </div>
            <div className="reviews_companies_item">
              <img src={companyUserCentrics} alt="Usercentrics" />
            </div>
            <div className="reviews_companies_item">
              <img src={companyLaserhub} alt="Laserhub" />
            </div>
            <div className="reviews_companies_item">
              <img src={companyTalixo} alt="Talixo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
