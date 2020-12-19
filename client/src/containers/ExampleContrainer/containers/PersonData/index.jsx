import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import PersonDataForm from './components/PersonDataForm';

const PersonData = ({ handleSubmit, onSubmit }) => (
  <PersonDataForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

PersonData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'personDataForm',
})(PersonData);
