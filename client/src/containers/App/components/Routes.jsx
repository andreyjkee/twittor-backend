import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ExampleContainer from '../../ExampleContrainer/index';
import SignUpContainer from '../../SignUpContainer/index';
import SignInContainer from '../../SignInContainer/index';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ExampleContainer} />
    <Route path="/1" component={ExampleContainer} />
    <PrivateRoute path="/private" component={ExampleContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/signin" component={SignInContainer} />
  </Switch>
);

export default hot(module)(Routes);
