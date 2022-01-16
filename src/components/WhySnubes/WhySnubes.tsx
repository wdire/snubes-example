import React from 'react';

import './why-snubes.style.scss';

const WhySnubes = () => {
  return (
    <>
      <div className="why-snubes">
        <div className="why-snubes_wrapper">
          <div className="why-snubes_head">Why Snubes?</div>
          <div className="why-snubes_item">
            <div className="why-snubes_subhead">Trusted Know-How</div>
            <div className="why-snubes_desc">
              We have more than 20 years of experience and continuously check
              call centers for their quality and capabilities. Customers like
              Allianz trust Snubes industry knowledge.
            </div>
          </div>
          <div className="why-snubes_item">
            <div className="why-snubes_subhead">Time and cost savings</div>
            <div className="why-snubes_desc">
              With Snubes you can easily compare prices, quality and
              availability, and find more potential suppliers. Reach your goal
              faster and save resources.
            </div>
          </div>
          <div className="why-snubes_item">
            <div className="why-snubes_subhead">Satisfaction guaranteed</div>
            <div className="why-snubes_desc">
              We offer a validated data-based approach to procurement, rather
              than awarding contracts only based on the lowest price, an
              existing relationship or "gut feeling".
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySnubes;
