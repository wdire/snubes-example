import React from 'react';
import CallCenterInfos from './CallCenterInfos';
import Form from './Form';

import './form-container.style.scss';

const FormContainer = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-container_wrapper">
          <Form />
          <CallCenterInfos />
        </div>
      </div>
    </>
  );
};

export default FormContainer;
