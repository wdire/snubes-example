import React from 'react';

import './call-center-infos.style.scss';

const CallCenterInfos = () => {
  return (
    <>
      <div className="call-center-infos">
        <div className="call-center-infos_head">
          Welcome to Europe’s largest call center database
        </div>
        <div className="call-center-infos_wrapper">
          <div className="call-center-infos_item">
            <div className="call-center-infos_item_num">500+</div>
            <div className="call-center-infos_item_name">Tenders</div>
          </div>
          <div className="call-center-infos_item">
            <div className="call-center-infos_item_num">200+</div>
            <div className="call-center-infos_item_name">Callcenter</div>
          </div>
          <div className="call-center-infos_item">
            <div className="call-center-infos_item_num">375.000</div>
            <div className="call-center-infos_item_name">Agents available</div>
          </div>
          <div className="call-center-infos_item">
            <div className="call-center-infos_item_num">85%</div>
            <div className="call-center-infos_item_name">Faster sourcing</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallCenterInfos;
