import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import withSpinner from '../../../shared/hocs/withSpinner';

const PrivateRoute = ({
  path,
  component,
  isFetching,
  isLogged,
}) => {
  const WithSpinner = withSpinner(component);

  if (!isFetching && !isLogged) {
    return <Redirect from={path} to="/" />;
  }

  return <Route path={path} render={props => <WithSpinner {...props} isFetching={isFetching} />} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLogged: !!state.currentUser.data,
  isFetching: state.currentUser.isFetching,
});

export default connect(mapStateToProps)(PrivateRoute);
