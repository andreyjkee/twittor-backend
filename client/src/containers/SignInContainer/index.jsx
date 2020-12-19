import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import SignIn from './components/SignIn';
import { fetchSignIn } from './redux/actions';

class SignInContainer extends Component {
  static propTypes = {
    fetchSignIn: Proptypes.func.isRequired,
  };

  handleSignInFormSubmit = formValues => this.props.fetchSignIn(formValues);

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={4}>
          <SignIn
            onSubmit={this.handleSignInFormSubmit}
          />
        </Col>
      </Row>
    );
  }
}

export default connect(null, { fetchSignIn })(SignInContainer);
