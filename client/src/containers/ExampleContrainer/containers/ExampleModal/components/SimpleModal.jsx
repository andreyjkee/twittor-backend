import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from '../styled';
import { hideModal } from '../../../../../shared/modal/redux/actions';

class SimpleExampleModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        MODAL CONTENT
      </StyledModalContent>);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleExampleModal);
