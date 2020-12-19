import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SignUpForm from './SignUpForm';

const SignUp = ({ handleSubmit, onSubmit }) => (
  <SignUpForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signUpForm',
})(SignUp);
