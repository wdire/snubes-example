import React, { useEffect, useRef, useState } from 'react';
import countryCodes, { CountryCodeType } from '../../../utils/countryCodes';
import getCountry from '../../../utils/getCountry';

import './form.style.scss';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[+][0-9]*$/;

const Form = () => {
  const [fields, setFields] = useState({
    company: '',
    fullname: '',
    phone: '',
    email: ''
  });

  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formHeaderRef = useRef<HTMLDivElement>(null);
  const formSubHeaderRef = useRef<HTMLDivElement>(null);

  const isError = error ? 'error' : '';
  const isSubmitted = formSubmitted ? 'submitted' : '';

  const onSubmitForm = () => {
    validateFields();
  };

  const validateFields = () => {
    // Very basic validation,
    // Set all inputs on error mode if true

    let verror = false;

    if (!fields.company || !fields.email || !fields.fullname || !fields.phone) {
      verror = true;
    }

    if (fields.company.length > 80 || fields.fullname.length > 50) {
      verror = true;
    }

    if (
      !phoneRegex.test(fields.phone) ||
      !emailRegex.test(fields.email) ||
      /\d/.test(fields.company)
    ) {
      verror = true;
    }

    setError(verror);

    if (!verror) {
      setFormSubmitted(true);
      console.log('success');

      if (
        formHeaderRef.current?.innerText &&
        formSubHeaderRef.current?.innerText
      ) {
        formHeaderRef.current.innerText = 'Thank you for your request!';
        formSubHeaderRef.current.innerText =
          'You’ve taken the first step. Our experts will get in touch with you soon.';
      }
    }
  };

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    handleDefaultCountry();
  }, []);

  const handleDefaultCountry = async () => {
    const country_code = (await getCountry()).countryCode;
    const country_dial = countryCodes.filter((e: CountryCodeType) => {
      return e.code === country_code;
    });

    if (country_dial[0] && country_dial[0].dial_code) {
      setFields({
        ...fields,
        phone: country_dial[0].dial_code
      });
    }
  };

  return (
    <>
      <div className="form">
        <div className={'form_head ' + isSubmitted} ref={formHeaderRef}>
          Find inbound call center for your company
        </div>
        <div className={'form_sub ' + isSubmitted} ref={formSubHeaderRef}>
          Use our AI and Big Data driven call center sourcing solution
        </div>

        <div className="form_group_wrapper">
          <div className={'form_group ' + isSubmitted}>
            <label>Company</label>
            <input
              placeholder="Company"
              className={isError}
              name="company"
              readOnly={formSubmitted}
              type="text"
              onChange={onFieldChange}
            />
          </div>
          <div className={'form_group ' + isSubmitted}>
            <label>Name</label>
            <input
              placeholder="Full name"
              className={isError}
              name="fullname"
              readOnly={formSubmitted}
              type="text"
              onChange={onFieldChange}
            />
          </div>
          <div className={'form_group ' + isSubmitted}>
            <label>Phone</label>
            <input
              placeholder="+49"
              className={isError}
              name="phone"
              defaultValue={fields.phone}
              readOnly={formSubmitted}
              type="text"
              onChange={onFieldChange}
            />
          </div>
          <div className={'form_group ' + isSubmitted}>
            <label>E-mail</label>
            <input
              placeholder="name@mail.com"
              className={isError}
              readOnly={formSubmitted}
              name="email"
              type="text"
              onChange={onFieldChange}
            />
          </div>
        </div>

        <button className="form_button" onClick={onSubmitForm}>
          Get informed
        </button>
      </div>
    </>
  );
};

export default Form;
