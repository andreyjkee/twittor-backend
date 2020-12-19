import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import LinksForm from './LinksForm';

const validate = (values) => {
  const errors = {};

  if (!values.link1) {
    errors.link1 = 'Required field';
  }

  if (!values.link2) {
    errors.link2 = 'Required field';
  }

  return errors;
};

const Links = ({ handleSubmit, onSubmit, reset }) => (
  <LinksForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    reset={reset}
  />
);

Links.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'linksForm',
  validate,
  touchOnChange: true,
})(Links);
