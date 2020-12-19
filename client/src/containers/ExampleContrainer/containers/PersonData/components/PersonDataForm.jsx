import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Form,
} from 'reactstrap';
import Field from '../../../../../shared/redux-form-components/CustomField';
import Button from '../../../../../shared/styledComponents/Button';

class PersonDataForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Form with submit validation</strong>
        <Field
          id="name"
          name="name"
          type="text"
          component={Input}
          placeholder="Name"
          label="Name"
        />
        <Field
          id="surname"
          name="surname"
          type="text"
          component={Input}
          placeholder="Surname"
          label="Surname"
        />
        <Button
          fullWidth
          type="submit"
          className="mr-3"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default PersonDataForm;
