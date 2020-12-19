import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import SignUp from './components/SignUp';
import { fetchSignUp } from './redux/actions';

class SignUpContainer extends Component {
  static propTypes = {
    fetchSignUp: PropTypes.func.isRequired,
  };

  handleSignUpFormSubmit = formValues => this.props.fetchSignUp(formValues);

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={4}>
          <SignUp
            onSubmit={this.handleSignUpFormSubmit}
          />
        </Col>
      </Row>
    );
  }
}

export default connect(null, { fetchSignUp })(SignUpContainer);
