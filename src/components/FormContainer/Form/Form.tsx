import React from 'react';

import './form.style.scss';

const Form = () => {
  return (
    <>
      <div className="form">
        <div className="form_head">
          Find inbound call center for your company
        </div>
        <div className="form_sub">
          Use our AI and Big Data driven call center sourcing solution
        </div>

        <div className="form_group_wrapper">
          <div className="form_group">
            <label>Company</label>
            <input placeholder="Company" type="text" />
          </div>
          <div className="form_group">
            <label>Name</label>
            <input placeholder="Full name" type="text" />
          </div>
          <div className="form_group">
            <label>Phone</label>
            <input placeholder="+49" type="text" />
          </div>
          <div className="form_group">
            <label>E-mail</label>
            <input placeholder="name@mail.com" type="text" />
          </div>
        </div>

        <button className="form_button">Get informed</button>
      </div>
    </>
  );
};

export default Form;
