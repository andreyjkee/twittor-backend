import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  FormGroup,
  Label,
  FormFeedback,
} from 'reactstrap';

const defaultErrorRender = ({ error }) => (<FormFeedback>{error}</FormFeedback>);
defaultErrorRender.propTypes = {
  error: PropTypes.string.isRequired,
};

const defaultLabelComponent = ({ id, label }) => (<Label for={id}>{label}</Label>);
defaultLabelComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

class CustomField extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorComponent: PropTypes.func,
    labelComponent: PropTypes.func,
  };

  static defaultProps = {
    errorComponent: defaultErrorRender,
    labelComponent: defaultLabelComponent,
  };

  renderError = error => this.props.errorComponent({ error });

  renderLabel = (id, label) => this.props.labelComponent({ id, label });

  renderComponent = (childProps) => {
    const {
      child: ChildComponent, input, meta, id, label, ...other
    } = childProps;
    const { value, onChange } = input;
    const { touched, error } = meta;

    return (
      <FormGroup>
        {this.renderLabel(id, label)}
        <ChildComponent
          invalid={Boolean(touched && error)}
          value={value}
          onChange={onChange}
          id={id}
          {...other}
        />
        {touched && error && this.renderError(error)}
      </FormGroup>
    );
  };

  render() {
    // noinspection JSUnusedLocalSymbols
    const {
      component: ChildComponent, labelComponent, errorComponent, ...other
    } = this.props;

    return (
      <Field component={this.renderComponent} child={ChildComponent} {...other} />
    );
  }
}

export default CustomField;
