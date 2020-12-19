import React from 'react';
import PropTypes from 'prop-types';
import ReCaptcha from 'react-google-recaptcha';

const SITEKEY = '6LfOZF8UAAAAAFHTuACmpCfHyhzHzdVNxGRwOjFf';

const Captcha = ({ onChange }) => (
  <ReCaptcha
    sitekey={SITEKEY}
    onChange={onChange}
  />
);

Captcha.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Captcha;
