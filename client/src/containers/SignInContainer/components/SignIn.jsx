import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import SignInForm from './SignInForm';

const SignIn = ({ handleSubmit, onSubmit }) => (
  <SignInForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signInForm',
})(SignIn);
