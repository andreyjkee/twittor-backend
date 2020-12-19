import React from 'react';
import PropTypes from 'prop-types';

const BtcToUsd = props => (
  <div className="mb-3">
    <span className="mr-3">BTC to USD: {props.price}$</span>
    <button onClick={props.handleRefresh}>
      Refetch
    </button>
  </div>
);

BtcToUsd.propTypes = {
  price: PropTypes.string,
  handleRefresh: PropTypes.func.isRequired,
};

BtcToUsd.defaultProps = {
  price: '0',
};

export default BtcToUsd;
