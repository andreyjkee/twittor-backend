import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class ReduxformSelect extends Component {
  static propTypes = {
    input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
    children: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    options: null,
  };

  handleInputChange = ({ value }) => {
    this.props.input.onChange(value);
  };

  render() {
    const {
      children, input, options,
    } = this.props;

    return (
      <label htmlFor="Select">
        {children}
        <Select
          clearable={false}
          searchable={false}
          options={options}
          {...input}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
